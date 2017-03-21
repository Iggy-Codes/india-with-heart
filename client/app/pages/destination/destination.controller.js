/* eslint no-undef: "off" */
(function () {
  angular
  .module('adminApp')
  .controller('DestinationController', DestinationController)

  function DestinationController (adminAppFactory, $rootScope, $route, addressGeocoderFactory, $window) {
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
      const rawData = { cityName, lat, lng, tourismTitle, tourismDes, tourismImg, tourismCheck, npoTitle, npoDes, npoImg, npoCheck, heartTitle, heartDes, heartImg, heartCheck }
      if (id === '') {
        adminAppFactory.newDestination(rawData)
          .then($route.reload())
      }
    }

    vm.editDestination = (e, id) => {
      e.preventDefault()
      console.log(id)
      adminAppFactory.getDestinationById(id)
        .then(response => {
          // const data = response.data
          // console.log(data)
          Object.keys(response.data).forEach(key => { vm[key] = response.data[key] })
          vm.titleForm = 'Modificación de: ' + response.data.cityName
        })
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
