/* eslint no-undef: "off" */
(function () {
  angular
    .module('navBar', [])
    .component('navBar', {
      template: '/header.tpl.html',
      controller: 'NavbarController',
      controllerAs: 'vm'
    })
})()

