/* eslint no-undef: "off" */
(function () {
  angular
  .module('adminApp')
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })
  .config([
    '$routeProvider',
    routerConfig
  ])

  function routerConfig ($routeProvider) {
    $routeProvider
      .when('/trip', {
        templateUrl: 'app/pages/trip/trip.tpl.html',
        controller: 'TripController',
        controllerAs: 'vm',
        secure: true
      })
      .when('/destination', {
        templateUrl: 'app/pages/destination/destination.tpl.html',
        controller: 'DestinationController',
        controllerAs: 'vm',
        secure: true
      })
      .when('/login', {
        templateUrl: 'app/pages/login/login.tpl.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      // .when('/login', {

      // })
      // })
      // .when('/author/:author', {
      //   templateUrl: 'app/author/author.tpl.html',
      //   controller: 'AuthorController',
      //   controllerAs: 'vm'
      // })
      .otherwise('/trip')
  }
})()
