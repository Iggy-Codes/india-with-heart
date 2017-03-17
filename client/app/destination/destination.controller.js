/* eslint no-undef: "off" */
(function () {
  angular
  .module('adminApp')
  .controller('DestinationController', DestinationController)

  function DestinationController (adminAppFactory, $rootScope, $route) {
    var vm = this

    vm.titleForm = 'Alta de Destinación'

    vm.tourismCheck = true
    vm.npoCheck = true
    vm.heartCheck = true

    adminAppFactory.getDestinations()
      .then(({data}) => {
        // console.log(response)
        vm.destinations = data
      })

    adminAppFactory.getImgs()
      .then(({data}) => { vm.imgs = data.files })

    vm.addDestination = (e) => {
      e.preventDefault()

      const { cityName, lat, lng, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartMsg, heartImg, heartCheck } = vm

      const rawData = { cityName, lat, lng, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartMsg, heartImg, heartCheck }

      adminAppFactory.newDestination(rawData)
        .then($route.reload())
    }
  }
})()
