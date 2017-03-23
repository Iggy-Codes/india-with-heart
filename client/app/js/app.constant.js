/* eslint no-undef: "off" */
(function () {
  angular
    .module('adminApp')
    .constant('cfg', {
      urlDestinations: '/api/destination',
      urlTrips: '/api/trip',
      urlImgs: '/api/img',
      urlAuth: '/auth/login',
      urlGeocoding: 'https://maps.google.com/maps/api/geocode/json?address='
    })
})()
