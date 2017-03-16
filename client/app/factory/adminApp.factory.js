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

    return {
      getDestinations,
      getTrips,
      addTrip
    }
  }
})()

