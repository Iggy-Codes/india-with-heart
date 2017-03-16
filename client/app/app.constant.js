/* eslint no-undef: "off" */
(function () {
  angular
    .module('adminApp')
    .constant('cfg', {
      urlDestinations: '/api/destination',
      urlTrips: '/api/trip',
      urlImgs: '/api/img'
    })
})()
