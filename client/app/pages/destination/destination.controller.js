/* eslint no-undef: "off" */
(function () {
  angular
  .module('adminApp')
  .controller('DestinationController', DestinationController)

  function DestinationController (adminAppFactory, $rootScope, $route, addressGeocoderFactory, $window) {
    var vm = this

    vm.titleForm = 'Alta de Destinación'

    vm.tourismCheck = true
    vm.npoCheck = true
    vm.heartCheck = true
    vm.cityNameFocus = true

    adminAppFactory.getDestinations()
      .then(({data}) => {
        vm.destinations = data
      })

    adminAppFactory.getImgs()
      .then(({data}) => { vm.imgs = data.files })

    vm.addDestination = (e) => {
      e.preventDefault()
      console.log(e)

      const { cityName, lat, lng, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartMsg, heartImg, heartCheck } = vm

      const rawData = { cityName, lat, lng, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartMsg, heartImg, heartCheck }

      adminAppFactory.newDestination(rawData)
        .then($route.reload())
    }

    vm.changeEnterForTab = (e, elementId) => {
      vm.lat = ''
      vm.lng = ''
      if (e.keyCode === 13) {
        e.preventDefault()
        vm.setFocus(elementId)
      }
    }

    vm.setFocus = (elementId) => {
      var element = $window.document.getElementById(elementId)
      element.focus()
    }

    vm.lookGoogleMaps = (e) => {
      if (e.srcElement.value !== '') {
        addressGeocoderFactory.getLocation(vm.cityName)
          .then((response) => {
            console.log(response)
            vm.lat = +response.location.latitude
            vm.lng = +response.location.longitude
          })
          .catch(reason => {
            alert('Ciudad no encontrada.')
            vm.lat = ''
            vm.lng = ''
            vm.cityName = ''
            vm.setFocus('cityName')
          })
      }
    }
  }
})()
