/* eslint no-undef: "off" */
(function () {
  angular
    .module('adminApp')
    .factory('adminAppFactory', adminAppFactory)

  function adminAppFactory ($http, cfg, $rootScope) {
    function getTrips () {
      return $http.get(cfg.urlTrips)
    }

    function addTrip () {
      return $http.post(cfg.urlTrips, $rootScope.newTrip)
    }

    function removeTripById () {
      console.log(cfg.urlTrips + '/' + $rootScope.tripId)
      return $http.delete(cfg.urlTrips + '/' + $rootScope.tripId)
    }

    function getTripById () {
      return $http.get(cfg.urlTrips + '/' + $rootScope.tripId)
    }

    function newDestination (rawData) {
      const blocks = []
      blocks.push({ title: rawData.tourismTitle, description: rawData.tourismDes, img: rawData.tourismImg, visible: rawData.tourismCheck, section: 'tourism' })
      console.log(blocks)
      blocks.push({ title: rawData.npoTitle, description: rawData.npoDes, img: rawData.npoImg, visible: rawData.npoCheck, section: 'npo' })
      blocks.push({ title: rawData.heartTitle, description: rawData.heartMsg, img: rawData.heartImg, visible: rawData.heartCheck, section: 'heart' })
      const coord = {
        lat: rawData.lat,
        lng: rawData.lng
      }
      const postDestination = {
        name: rawData.cityName,
        coord,
        blocks
      }
      return $http.post(cfg.urlDestinations, {postDestination})
    }

    function getDestinations () {
      return $http.get(cfg.urlDestinations)
    }

    function getImgs () {
      console.log(cfg.urlImgs)
      return $http.get(cfg.urlImgs)
    }
    return {
      getTrips,
      addTrip,
      removeTripById,
      getTripById,
      newDestination,
      getDestinations,
      getImgs
    }
  }
})()

