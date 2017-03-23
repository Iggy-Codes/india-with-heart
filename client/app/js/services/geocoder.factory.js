/* eslint no-undef: "off" */
(function () {
  angular
    .module('adminApp')
    .factory('addressGeoFactory', addressGeoFactory)

  function addressGeoFactory ($http, cfg) {
    function getCoordinates (address) {
      console.log(cfg.urlGeocoding + address)
      return $http.get(cfg.urlGeocoding + address)
        .then(response => {
          console.log(response)

          let coord = { 'lat': 0, 'lng': 0 }
          if (response.data.results.length === 1) {
            // only 1 address
            coord = response.data.results[0].geometry.location
          }
          return coord
        })
    }

    return {
      getCoordinates
    }
  }
})()
// (function () {
//   angular
//     .module('adminApp')
//     .factory('addressGeocoderFactory', ['$q', function ($q) {
//       var myGeo

//     //
//       var result = function () {
//         return {
//           success: false,
//           message: '',
//           location: {
//             latitude: '',
//             longitude: ''
//           }
//         }
//       }

//       myGeo = {
//         getLocation: function (address) {
//           var deferred = $q.defer()

//           var googleMap = new google.maps.Geocoder()
//           googleMap.geocode({'address': address}, function (results, status) {
//             if (status === google.maps.GeocoderStatus.OK) {
//               var ok = new result()
//               ok.success = true
//               ok.location.latitude = results[0].geometry.location.lat().toFixed(3)
//               ok.location.longitude = results[0].geometry.location.lng().toFixed(3)

//               deferred.resolve(ok)
//             } else {
//               var error = new result()
//               error.message = 'The geocode was not successful for the these reasons: ' + status

//               deferred.reject(error)
//             }
//           })

//           return deferred.promise
//         }
//       }

//       return myGeo
//     }])
// })()
