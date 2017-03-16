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

    function newDestination () {
      return $http.post(cfg.urlDestinations, { postDestination: $rootScope.newDestination })
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

