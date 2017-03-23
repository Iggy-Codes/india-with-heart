/* eslint no-undef: "off" */
(function () {
  angular
  .module('adminApp')
  .controller('DestinationController', DestinationController)

  function DestinationController (adminAppFactory, $rootScope, $route, addressGeoFactory, $window) {
    var vm = this

    vm.titleForm = 'Alta de Destinación'
    vm.id = ''

    vm.tourismCheck = true
    vm.npoCheck = true
    vm.heartCheck = true

    adminAppFactory.getDestinations()
      .then(({data}) => {
        vm.destinations = data
      })

    adminAppFactory.getImgs()
      .then(({data}) => { vm.imgs = data.files })

    vm.addDestination = (e) => {
      e.preventDefault()
      const { id, cityName, lat, lng, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartDes, heartImg, heartCheck } = vm
      const rawData = { id, cityName, lat, lng, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartDes, heartImg, heartCheck }
      adminAppFactory.newDestination(rawData)
          .then($route.reload())
    }

    vm.editDestination = (e, id) => {
      e.preventDefault()
      adminAppFactory.getDestinationById(id)
        .then(response => {
          Object.keys(response.data).forEach(key => { vm[key] = response.data[key] })
          vm.titleForm = 'Modificación de: ' + response.data.cityName
          vm.id = response.data.id
        })
    }

    vm.removeDestination = (e, id) => {
      e.preventDefault()
      if (confirm('Are you sure?')) {
        adminAppFactory.checkTripDestination(id)
          .then(result => {
            if (result) {
              alert('City in use\n It can NOT be removed')
                .then($route.reload())
            } else {
              adminAppFactory.removeDestinationById(id)
                  .then($route.reload())
            }
          })
      }
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
        addressGeoFactory.getCoordinates(vm.cityName)
          .then((response) => {
            console.log(response)
            debugger
            if (response.lat === 0 && response.lng === 0) {
              alert('Ciudad no encontrada.')
              vm.lat = ''
              vm.lng = ''
              vm.cityName = ''
              vm.setFocus('cityName')
            } else {
              vm.lat = +response.lat
              vm.lng = +response.lng
            }
          })
      }
    }
  }
})()
