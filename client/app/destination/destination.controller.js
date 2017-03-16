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

    vm.addDestination = (e) => {
      e.preventDefault()
      console.log(e)

      const { cityName, lat, lng, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartMsg, heartImg, heartCheck } = vm
      // console.log('Tourism Check ' + tourismCheck)
      // console.log(npoCheck)
      const blocks = []
      blocks.push({ title: tourismTitle, description: tourismDes, image: tourismImg, visible: tourismCheck, section: 'tourism' })
      blocks.push({ title: npoTitle, description: npoDes, image: npoImg, visible: npoCheck, section: 'npo' })
      blocks.push({ title: heartTitle, description: heartMsg, image: heartImg, visible: heartCheck, section: 'heart' })

      $rootScope.newDestination = {
        name: cityName,
        coord: {
          lat,
          lng
        },
        blocks
      }
      console.log($rootScope.newDestination)
      adminAppFactory.newDestination()
        .then($route.reload())
    }
  }
})()
