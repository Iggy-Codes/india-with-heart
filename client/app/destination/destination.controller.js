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
      // console.log(e)

      const { cityName, lat, lng, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartMsg, heartImg, heartCheck } = vm

      const blocks = []
      blocks.push({ title: tourismTitle, description: tourismDes, img: tourismImg, visible: tourismCheck, section: 'tourism' })
      console.log(blocks)
      blocks.push({ title: npoTitle, description: npoDes, img: npoImg, visible: npoCheck, section: 'npo' })
      blocks.push({ title: heartTitle, description: heartMsg, img: heartImg, visible: heartCheck, section: 'heart' })

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
