/* eslint no-undef: "off" */
(function () {
  angular
  .module('adminApp')
  .controller('DestinationController', DestinationController)

  function DestinationController (DestinationFactory, ImgFactory, TripFactory, $rootScope, $route, addressGeoFactory, $window) {
    var vm = this

    vm.titleForm = 'Alta de Destinación'
    vm.id = ''

    vm.tourismCheck = true
    vm.npoCheck = true
    vm.heartCheck = true

    DestinationFactory.getDestinations()
      .then(({data}) => {
        vm.destinations = data
      })

    ImgFactory.getImgs()
      .then(({data}) => { vm.imgs = data.files })

    vm.addDestination = (e) => {
      e.preventDefault()
      const { id, cityName, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartDes, heartImg, heartCheck } = vm
      const rawData = { id, cityName, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartDes, heartImg, heartCheck }
      DestinationFactory.newDestination(rawData)
          .then($route.reload())
    }

    vm.editDestination = (e, id) => {
      e.preventDefault()
      DestinationFactory.getDestinationById(id)
        .then(response => {
          Object.keys(response.data).forEach(key => { vm[key] = response.data[key] })
          vm.titleForm = 'Modificación de: ' + response.data.cityName
          vm.id = response.data.id
          $rootScope.coord = {
            'lat': response.data.lat,
            'lng': response.data.lng
          }
        })
    }

    vm.removeDestination = (e, id) => {
      e.preventDefault()
      if (confirm('Are you sure?')) {
        TripFactory.checkTripDestination(id)
          .then(result => {
            if (result) {
              alert('City in use\n It can NOT be removed')
                .then($route.reload())
            } else {
              DestinationFactory.removeDestinationById(id)
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
        if (e.srcElement.id === 'cityName') {
          vm.lookGoogleMaps(e)
          vm.lat2 = vm.lat
          vm.lng2 = vm.lng
        }
        vm.setFocus(elementId)
      }
    }

    vm.setFocus = (elementId) => {
      var element = $window.document.getElementById(elementId)
      element.focus()
    }

    vm.lookGoogleMaps = (e) => {
      if (e.srcElement.value !== '') {
        console.log('Searching for: ' + vm.cityName)
        addressGeoFactory.getCoordinates(vm.cityName)
          .then((response) => {
            $rootScope.coord = response
            if (response.lat === 0 && response.lng === 0) {
              alert('Ciudad no encontrada.')
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
