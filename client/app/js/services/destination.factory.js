/* eslint no-undef: "off" */
(function () {
  angular
    .module('adminApp')
    .factory('DestinationFactory', DestinationFactory)

  function DestinationFactory ($http, cfg, $rootScope) {
    function newDestination (rawData) {
      const postDestination = rawToDestination(rawData, $rootScope)
      if (rawData.id === '') return $http.post(cfg.urlDestinations, {postDestination})
      else return $http.put(cfg.urlDestinations + '/' + rawData.id, {postDestination})
    }

    function getDestinations () {
      return $http.get(cfg.urlDestinations)
    }

    function getDestinationById (id) {
      return $http.get(cfg.urlDestinations + '/' + id)
        .then(response => {
          response.data = destinationToRaw(response.data)
          return response
        })
    }

    function removeDestinationById (id) {
      return $http.delete(cfg.urlDestinations + '/' + id)
    }

    return {
      newDestination,
      getDestinations,
      getDestinationById,
      removeDestinationById
    }
  }

  function rawToDestination (rawData, $rootScope) {
    const blocks = []
    blocks.push({ title: rawData.tourismTitle, description: rawData.tourismDes, img: rawData.tourismImg, visible: rawData.tourismCheck, section: 'tourism' })
    blocks.push({ title: rawData.npoTitle, description: rawData.npoDes, img: rawData.npoImg, visible: rawData.npoCheck, section: 'npo' })
    blocks.push({ title: rawData.heartTitle, description: rawData.heartDes, img: rawData.heartImg, visible: rawData.heartCheck, section: 'heart' })
    const coord = $rootScope.coord
    return {
      name: rawData.cityName,
      coord,
      blocks
    }
  }

  function destinationToRaw (destination) {
    var rawData = {}
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
    return rawData
  }
})()
