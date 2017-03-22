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

  function NavbarController ($scope) {
    const vm = this
    vm.textButton = 'Logout'

    vm.logout = (e) => {
      e.preventDefault()
      alert('hola')
    }
  }
})()
