/* eslint no-undef: "off" */
(function () {
  angular
  .module('adminApp')
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
