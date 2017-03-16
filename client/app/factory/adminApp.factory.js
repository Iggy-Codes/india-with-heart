/* eslint no-undef: "off" */
(function () {
  angular
    .module('adminApp')
    .factory('adminAppFactory', adminAppFactory)

  function adminAppFactory ($http, cfg, $rootScope) {
    function getDestinations () {
      return $http.get(cfg.urlDestinations)
    }

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

    return {
      getDestinations,
      getTrips,
      addTrip,
      removeTripById,
      getTripById
    }
  }
})()

