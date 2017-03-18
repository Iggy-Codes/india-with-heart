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
        vm.destinations = data
      })

    adminAppFactory.getTrips()
      .then(({data}) => {
        vm.trips = data
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
      adminAppFactory.removeTripById(id)
        .then($route.reload())
    }

    vm.addTrip = (e) => {
      e.preventDefault()
      let destinations = []
      for (var i = 3; i < 11; i++) {
        if (+e.srcElement[i].value !== 0 && destinations.indexOf(e.srcElement[i].value) < 0) {
          destinations.push(e.srcElement[i].value)
        }
      }
      let { title, description } = vm
      let newTrip = {
        title,
        description,
        destinations
      }
      adminAppFactory.addTrip(newTrip)
        .then($route.reload())
    }
  }
})()
