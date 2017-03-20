/* eslint no-undef: "off" */
(function () {
  angular
  .module('adminApp')
  .config([
    '$routeProvider',
    routerConfig
  ])

  function routerConfig ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/pages/trip/trip.tpl.html',
        controller: 'TripController',
        controllerAs: 'vm'
      })
      .when('/destination', {
        templateUrl: 'app/pages/destination/destination.tpl.html',
        controller: 'DestinationController',
        controllerAs: 'vm'
      })
      // .when('/category/:categoryURL', {
      //   templateUrl: 'app/category/category.tpl.html',
      //   controller: 'CategoryController',
      //   controllerAs: 'vm'
      // })
      // .when('/author/:author', {
      //   templateUrl: 'app/author/author.tpl.html',
      //   controller: 'AuthorController',
      //   controllerAs: 'vm'
      // })
      .otherwise('/')
  }
})()
