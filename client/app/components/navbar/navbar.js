/* eslint no-undef: "off" */
(function () {
  angular
  .module('components')
  .component('navBar', {
    templateUrl: 'app/components/navbar/navbar.html',
    controller: 'NavbarController',
    controllerAs: 'vm'
  })
  .controller('NavbarController', NavbarController)

  function NavbarController ($scope, $rootScope, $location, AuthFactory) {
    const vm = this
    vm.textButton = 'Logout'
    vm.loggedUser = !(!$rootScope.loggedUser)
    vm.logout = (e) => {
      e.preventDefault()
      AuthFactory.logout()
      $location.path('/')
    }
    $scope.$on('eventLogin', (event, data) => {
      vm.loggedUser = data
    })
  }
})()
