/* eslint no-undef: "off" */
(function () {
  angular
  .module('adminApp')
  .controller('TripController', TripController)

  function TripController (adminAppFactory, $rootScope, $route) {
    var vm = this

    vm.titleForm = 'Alta de Viaje'

    adminAppFactory.getDestinations()
      .then(({data}) => {
        // console.log(response)
        vm.destinations = data
      })

    adminAppFactory.getTrips()
      .then(({data}) => {
        // if(data.length === 0) {
        // }
        vm.trips = data
        console.log(data)
      })

    // vm.editTrip = (e, id) => {
    //   e.preventDefault()
    //   $rootScope.tripId = id
    //   adminAppFactory.getTripById()
    //     .then((response) => {
    //       const trip = response.data
    //       vm.title = trip.title
    //       vm.titleUri = trip.titleUri
    //       vm.description = trip.description
    //       console.log(response.data)
    //     })
    // }

    vm.removeTrip = (e, id) => {
      e.preventDefault()
      console.log('we are here ' + id)
      $rootScope.tripId = id
      adminAppFactory.removeTripById()
        .then($route.reload())
    }

    vm.addTrip = (e) => {
      e.preventDefault()
      let destinations = []
      // console.log(e)
      for (var i = 4; i < 12; i++) {
        console.log()
        if (+e.srcElement[i].value !== 0 && destinations.indexOf(e.srcElement[i].value) < 0) {
          destinations.push(e.srcElement[i].value)
        }
      }
      let { title, titleUri, description } = vm
      $rootScope.newTrip = {
        title,
        titleUri,
        description,
        destinations
      }
      // console.log('action ' + vm.action)
      // console.log($rootScope.newTrip)
      adminAppFactory.addTrip()
        .then($route.reload())
    }
  }
})()
