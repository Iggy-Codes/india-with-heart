/* eslint no-undef: "off" */
(function () {
  angular
    .module('adminApp')
    .factory('adminAppFactory', adminAppFactory)

  function adminAppFactory ($http, cfg, $rootScope) {
    function getTrips () {
      return $http.get(cfg.urlTrips)
    }

    function addTrip (newTrip) {
      newTrip['titleUri'] = urlTitle(newTrip.title)
      newTrip['destinations'] = checkDestinations(newTrip.stops)
      return $http.post(cfg.urlTrips, newTrip)
    }

    function updateTrip (newTrip) {
      newTrip['titleUri'] = urlTitle(newTrip.title)

      let posNewStops = (newTrip.stops) ? Object.keys(newTrip.stops).map((k) => +k) : []
      let destinationsToCheck = (newTrip.trip_destinations) ? newTrip.trip_destinations : []
      posNewStops.forEach(pos => {
        destinationsToCheck[pos] = newTrip.stops[pos.toString()]
      })
      newTrip['destinations'] = checkDestinations(destinationsToCheck)
      return $http.put(cfg.urlTrips, newTrip)
    }

    function removeTripById (id) {
      return $http.delete(cfg.urlTrips + '/' + id)
    }

    function getTripById (id) {
      return $http.get(cfg.urlTrips + '/' + id)
    }

    function checkTripDestination (id) {
      return $http.get(cfg.urlTrips + '/checkDestination/' + id)
        .then(response => response.data.result)
    }

    function newDestination (rawData) {
      const blocks = []
      blocks.push({ title: rawData.tourismTitle, description: rawData.tourismDes, img: rawData.tourismImg, visible: rawData.tourismCheck, section: 'tourism' })
      console.log(blocks)
      blocks.push({ title: rawData.npoTitle, description: rawData.npoDes, img: rawData.npoImg, visible: rawData.npoCheck, section: 'npo' })
      blocks.push({ title: rawData.heartTitle, description: rawData.heartDes, img: rawData.heartImg, visible: rawData.heartCheck, section: 'heart' })
      const coord = $rootScope.coord
      const postDestination = {
        name: rawData.cityName,
        coord,
        blocks
      }
      console.log('factory before petition')
      console.log(postDestination)
      if (rawData.id === '') return $http.post(cfg.urlDestinations, {postDestination})
      else return $http.put(cfg.urlDestinations + '/' + rawData.id, {postDestination})
    }

    function getDestinations () {
      return $http.get(cfg.urlDestinations)
    }

    function getDestinationById (id) {
      var rawData = {}
      return $http.get(cfg.urlDestinations + '/' + id)
        .then(response => {
          const destination = response.data
          console.log('received')
          console.log(destination)
          rawData['id'] = destination._id
          rawData['cityName'] = destination.name
          rawData['lat'] = destination.coord.lat
          rawData['lng'] = destination.coord.lng
          destination.blocks.forEach(block => {
            const titles = [block.section + 'Title', block.section + 'Des', block.section + 'Check', block.section + 'Img']
            rawData[titles[0]] = block.title
            rawData[titles[1]] = block.description
            rawData[titles[2]] = block.visible
            rawData[titles[3]] = block.img
          })
          console.log(rawData)
          response.data = rawData
          console.log(response)
          // const promise = new Promise((resolve, reject) => resolve(rawData))
          // console.log(promise)
          return response
        })

          // const rawData = { cityName, lat, lng, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartMsg, heartImg, heartCheck }
    }

    function removeDestinationById (id) {
      return $http.delete(cfg.urlDestinations + '/' + id)
    }

    function getImgs () {
      return $http.get(cfg.urlImgs)
    }
    return {
      getTrips,
      addTrip,
      updateTrip,
      removeTripById,
      getTripById,
      checkTripDestination,
      newDestination,
      getDestinations,
      getDestinationById,
      removeDestinationById,
      getImgs
    }
  }

  function checkDestinations (newTripStops) {
    let destinations = []
    if (newTripStops) {
      let stops = Object.keys(newTripStops).map((k) => newTripStops[k])
      if (stops) {
        stops.forEach(stop => {
          if (!(!stop) && destinations.indexOf(stop) < 0) {
            destinations.push(stop)
          }
        })
      }
    }
    return destinations
  }

  function urlTitle (title) {
    const Latinise = {}
    Latinise.latin_map = { 'á': 'a', 'ă': 'a', 'ắ': 'a', 'ặ': 'a', 'ằ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ǎ': 'a', 'â': 'a', 'ấ': 'a', 'ậ': 'a', 'ầ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ä': 'a', 'ǟ': 'a', 'ȧ': 'a', 'ǡ': 'a', 'ạ': 'a', 'ȁ': 'a', 'à': 'a', 'ả': 'a', 'ȃ': 'a', 'ā': 'a', 'ą': 'a', 'ᶏ': 'a', 'ẚ': 'a', 'å': 'a', 'ǻ': 'a', 'ḁ': 'a', 'ⱥ': 'a', 'ã': 'a', 'ꜳ': 'aa', 'æ': 'ae', 'ǽ': 'ae', 'ǣ': 'ae', 'ꜵ': 'ao', 'ꜷ': 'au', 'ꜹ': 'av', 'ꜻ': 'av', 'ꜽ': 'ay', 'ḃ': 'b', 'ḅ': 'b', 'ɓ': 'b', 'ḇ': 'b', 'ᵬ': 'b', 'ᶀ': 'b', 'ƀ': 'b', 'ƃ': 'b', 'ɵ': 'o', 'ć': 'c', 'č': 'c', 'ç': 'c', 'ḉ': 'c', 'ĉ': 'c', 'ɕ': 'c', 'ċ': 'c', 'ƈ': 'c', 'ȼ': 'c', 'ď': 'd', 'ḑ': 'd', 'ḓ': 'd', 'ȡ': 'd', 'ḋ': 'd', 'ḍ': 'd', 'ɗ': 'd', 'ᶑ': 'd', 'ḏ': 'd', 'ᵭ': 'd', 'ᶁ': 'd', 'đ': 'd', 'ɖ': 'd', 'ƌ': 'd', 'ı': 'i', 'ȷ': 'j', 'ɟ': 'j', 'ʄ': 'j', 'ǳ': 'dz', 'ǆ': 'dz', 'é': 'e', 'ĕ': 'e', 'ě': 'e', 'ȩ': 'e', 'ḝ': 'e', 'ê': 'e', 'ế': 'e', 'ệ': 'e', 'ề': 'e', 'ể': 'e', 'ễ': 'e', 'ḙ': 'e', 'ë': 'e', 'ė': 'e', 'ẹ': 'e', 'ȅ': 'e', 'è': 'e', 'ẻ': 'e', 'ȇ': 'e', 'ē': 'e', 'ḗ': 'e', 'ḕ': 'e', 'ⱸ': 'e', 'ę': 'e', 'ᶒ': 'e', 'ɇ': 'e', 'ẽ': 'e', 'ḛ': 'e', 'ꝫ': 'et', 'ḟ': 'f', 'ƒ': 'f', 'ᵮ': 'f', 'ᶂ': 'f', 'ǵ': 'g', 'ğ': 'g', 'ǧ': 'g', 'ģ': 'g', 'ĝ': 'g', 'ġ': 'g', 'ɠ': 'g', 'ḡ': 'g', 'ᶃ': 'g', 'ǥ': 'g', 'ḫ': 'h', 'ȟ': 'h', 'ḩ': 'h', 'ĥ': 'h', 'ⱨ': 'h', 'ḧ': 'h', 'ḣ': 'h', 'ḥ': 'h', 'ɦ': 'h', 'ẖ': 'h', 'ħ': 'h', 'ƕ': 'hv', 'í': 'i', 'ĭ': 'i', 'ǐ': 'i', 'î': 'i', 'ï': 'i', 'ḯ': 'i', 'ị': 'i', 'ȉ': 'i', 'ì': 'i', 'ỉ': 'i', 'ȋ': 'i', 'ī': 'i', 'į': 'i', 'ᶖ': 'i', 'ɨ': 'i', 'ĩ': 'i', 'ḭ': 'i', 'ꝺ': 'd', 'ꝼ': 'f', 'ᵹ': 'g', 'ꞃ': 'r', 'ꞅ': 's', 'ꞇ': 't', 'ꝭ': 'is', 'ǰ': 'j', 'ĵ': 'j', 'ʝ': 'j', 'ɉ': 'j', 'ḱ': 'k', 'ǩ': 'k', 'ķ': 'k', 'ⱪ': 'k', 'ꝃ': 'k', 'ḳ': 'k', 'ƙ': 'k', 'ḵ': 'k', 'ᶄ': 'k', 'ꝁ': 'k', 'ꝅ': 'k', 'ĺ': 'l', 'ƚ': 'l', 'ɬ': 'l', 'ľ': 'l', 'ļ': 'l', 'ḽ': 'l', 'ȴ': 'l', 'ḷ': 'l', 'ḹ': 'l', 'ⱡ': 'l', 'ꝉ': 'l', 'ḻ': 'l', 'ŀ': 'l', 'ɫ': 'l', 'ᶅ': 'l', 'ɭ': 'l', 'ł': 'l', 'ǉ': 'lj', 'ſ': 's', 'ẜ': 's', 'ẛ': 's', 'ẝ': 's', 'ḿ': 'm', 'ṁ': 'm', 'ṃ': 'm', 'ɱ': 'm', 'ᵯ': 'm', 'ᶆ': 'm', 'ń': 'n', 'ň': 'n', 'ņ': 'n', 'ṋ': 'n', 'ȵ': 'n', 'ṅ': 'n', 'ṇ': 'n', 'ǹ': 'n', 'ɲ': 'n', 'ṉ': 'n', 'ƞ': 'n', 'ᵰ': 'n', 'ᶇ': 'n', 'ɳ': 'n', 'ñ': 'n', 'ǌ': 'nj', 'ó': 'o', 'ŏ': 'o', 'ǒ': 'o', 'ô': 'o', 'ố': 'o', 'ộ': 'o', 'ồ': 'o', 'ổ': 'o', 'ỗ': 'o', 'ö': 'o', 'ȫ': 'o', 'ȯ': 'o', 'ȱ': 'o', 'ọ': 'o', 'ő': 'o', 'ȍ': 'o', 'ò': 'o', 'ỏ': 'o', 'ơ': 'o', 'ớ': 'o', 'ợ': 'o', 'ờ': 'o', 'ở': 'o', 'ỡ': 'o', 'ȏ': 'o', 'ꝋ': 'o', 'ꝍ': 'o', 'ⱺ': 'o', 'ō': 'o', 'ṓ': 'o', 'ṑ': 'o', 'ǫ': 'o', 'ǭ': 'o', 'ø': 'o', 'ǿ': 'o', 'õ': 'o', 'ṍ': 'o', 'ṏ': 'o', 'ȭ': 'o', 'ƣ': 'oi', 'ꝏ': 'oo', 'ɛ': 'e', 'ᶓ': 'e', 'ɔ': 'o', 'ᶗ': 'o', 'ȣ': 'ou', 'ṕ': 'p', 'ṗ': 'p', 'ꝓ': 'p', 'ƥ': 'p', 'ᵱ': 'p', 'ᶈ': 'p', 'ꝕ': 'p', 'ᵽ': 'p', 'ꝑ': 'p', 'ꝙ': 'q', 'ʠ': 'q', 'ɋ': 'q', 'ꝗ': 'q', 'ŕ': 'r', 'ř': 'r', 'ŗ': 'r', 'ṙ': 'r', 'ṛ': 'r', 'ṝ': 'r', 'ȑ': 'r', 'ɾ': 'r', 'ᵳ': 'r', 'ȓ': 'r', 'ṟ': 'r', 'ɼ': 'r', 'ᵲ': 'r', 'ᶉ': 'r', 'ɍ': 'r', 'ɽ': 'r', 'ↄ': 'c', 'ꜿ': 'c', 'ɘ': 'e', 'ɿ': 'r', 'ś': 's', 'ṥ': 's', 'š': 's', 'ṧ': 's', 'ş': 's', 'ŝ': 's', 'ș': 's', 'ṡ': 's', 'ṣ': 's', 'ṩ': 's', 'ʂ': 's', 'ᵴ': 's', 'ᶊ': 's', 'ȿ': 's', 'ɡ': 'g', 'ᴑ': 'o', 'ᴓ': 'o', 'ᴝ': 'u', 'ť': 't', 'ţ': 't', 'ṱ': 't', 'ț': 't', 'ȶ': 't', 'ẗ': 't', 'ⱦ': 't', 'ṫ': 't', 'ṭ': 't', 'ƭ': 't', 'ṯ': 't', 'ᵵ': 't', 'ƫ': 't', 'ʈ': 't', 'ŧ': 't', 'ᵺ': 'th', 'ɐ': 'a', 'ᴂ': 'ae', 'ǝ': 'e', 'ᵷ': 'g', 'ɥ': 'h', 'ʮ': 'h', 'ʯ': 'h', 'ᴉ': 'i', 'ʞ': 'k', 'ꞁ': 'l', 'ɯ': 'm', 'ɰ': 'm', 'ᴔ': 'oe', 'ɹ': 'r', 'ɻ': 'r', 'ɺ': 'r', 'ⱹ': 'r', 'ʇ': 't', 'ʌ': 'v', 'ʍ': 'w', 'ʎ': 'y', 'ꜩ': 'tz', 'ú': 'u', 'ŭ': 'u', 'ǔ': 'u', 'û': 'u', 'ṷ': 'u', 'ü': 'u', 'ǘ': 'u', 'ǚ': 'u', 'ǜ': 'u', 'ǖ': 'u', 'ṳ': 'u', 'ụ': 'u', 'ű': 'u', 'ȕ': 'u', 'ù': 'u', 'ủ': 'u', 'ư': 'u', 'ứ': 'u', 'ự': 'u', 'ừ': 'u', 'ử': 'u', 'ữ': 'u', 'ȗ': 'u', 'ū': 'u', 'ṻ': 'u', 'ų': 'u', 'ᶙ': 'u', 'ů': 'u', 'ũ': 'u', 'ṹ': 'u', 'ṵ': 'u', 'ᵫ': 'ue', 'ꝸ': 'um', 'ⱴ': 'v', 'ꝟ': 'v', 'ṿ': 'v', 'ʋ': 'v', 'ᶌ': 'v', 'ⱱ': 'v', 'ṽ': 'v', 'ꝡ': 'vy', 'ẃ': 'w', 'ŵ': 'w', 'ẅ': 'w', 'ẇ': 'w', 'ẉ': 'w', 'ẁ': 'w', 'ⱳ': 'w', 'ẘ': 'w', 'ẍ': 'x', 'ẋ': 'x', 'ᶍ': 'x', 'ý': 'y', 'ŷ': 'y', 'ÿ': 'y', 'ẏ': 'y', 'ỵ': 'y', 'ỳ': 'y', 'ƴ': 'y', 'ỷ': 'y', 'ỿ': 'y', 'ȳ': 'y', 'ẙ': 'y', 'ɏ': 'y', 'ỹ': 'y', 'ź': 'z', 'ž': 'z', 'ẑ': 'z', 'ʑ': 'z', 'ⱬ': 'z', 'ż': 'z', 'ẓ': 'z', 'ȥ': 'z', 'ẕ': 'z', 'ᵶ': 'z', 'ᶎ': 'z', 'ʐ': 'z', 'ƶ': 'z', 'ɀ': 'z', 'ﬀ': 'ff', 'ﬃ': 'ffi', 'ﬄ': 'ffl', 'ﬁ': 'fi', 'ﬂ': 'fl', 'ĳ': 'ij', 'œ': 'oe', 'ﬆ': 'st', 'ₐ': 'a', 'ₑ': 'e', 'ᵢ': 'i', 'ⱼ': 'j', 'ₒ': 'o', 'ᵣ': 'r', 'ᵤ': 'u', 'ᵥ': 'v', 'ₓ': 'x' }
    let input = title
    return input.replace(/[ ]/g, '-')
      .toLowerCase()
      .replace(/[^a-z0-9\-]/g, function (a) { return Latinise.latin_map[a] || a })
  }
})()

      // let destinations = []
      // if (newTrip.stops) {
      //   let stops = Object.keys(newTrip.stops).map((k) => newTrip.stops[k])
      //   if (stops) {
      //     stops.forEach(stop => {
      //       if (!(!stop) && destinations.indexOf(stop) < 0) {
      //         destinations.push(stop)
      //       }
      //     })
      //   }
      // }
      // newTrip['destinations'] = destinations
      // console.log(newTrip)
      // console.log('Position New Stops')
      // console.log(posNewStops)

      // console.log('destinationsToCheck')
      // console.log(destinationsToCheck)
      // newTrip['destinations'] = checkDestinations(destinationsToCheck)

      // console.log(newTrip.destinations)

      // debugger
      // let destinations = []
      // if (newTrip.stops) {
      //   let stops = Object.keys(newTrip.stops).map((k) => newTrip.stops[k])
      //   if (stops) {
      //     stops.forEach(stop => {
      //       if (!(!stop) && destinations.indexOf(stop) < 0) {
      //         destinations.push(stop)
      //       }
      //     })
      //   }
      // }
      // newTrip['destinations'] = destinations

      // let trip_destinations = newTrip.trip_destinations
      // console.log('old destinations')
      // console.log(trip_destinations)

      // console.log('before')
      // console.log(stops)

      // console.log('after')
      // console.log(destinations)
      // console.log(newTrip)
      // if (newTrip.id === '')
      // else
      // for (var i = 3; i < 11; i++) {
      //   if (+e.srcElement[i].value !== 0 ) {
      //   }
      // }

      // let idx = stops.indexOf('')
      // while (idx !== -1) {
      //   stops.splice(idx, 1)
      //   idx = stops.indexOf('')
      // }
      // {

      // }

      // var desired = stringToReplace.replace(/[^a-z0-9\-]/gi, '')
    // }
