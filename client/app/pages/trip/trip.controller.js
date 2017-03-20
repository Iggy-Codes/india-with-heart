/* eslint no-undef: "off" */
(function () {
  angular
  .module('adminApp')
  .controller('TripController', TripController)
  .directive('confirmationNeeded', function () {
    return {
      priority: 1,
      terminal: true,
      link: function (scope, element, attr) {
        var msg = attr.confirmationNeeded || 'Are you sure?'
        var clickAction = attr.ngClick
        element.bind('click', function () {
          if (window.confirm(msg)) {
            scope.$eval(clickAction)
          }
        })
      }
    }
  })

  function TripController (adminAppFactory, $rootScope, $route) {
    var vm = this

    vm.titleForm = 'Alta de Viaje'
    vm.id = ''
    vm.msgForm = 'Alta'

    adminAppFactory.getDestinations()
      .then(({data}) => {
        vm.destinations = data
      })

    adminAppFactory.getTrips()
      .then(({data}) => {
        vm.trips = data
      })

    vm.editTrip = (e, id) => {
      e.preventDefault()
      adminAppFactory.getTripById(id)
        .then((response) => {
          const trip = response.data
          vm.titleForm = 'Modificación viaje ' + trip.title
          vm.id = id
          vm.title = trip.title
          vm.titleUri = trip.titleUri
          vm.description = trip.description
          vm.msgForm = 'Modificar'
          console.log(response.data)
        })
    }

    vm.removeTrip = (e, id) => {
      e.preventDefault()
      adminAppFactory.removeTripById(id)
        .then($route.reload())
    }

    vm.addTrip = (e) => {
      e.preventDefault()
      let { id, title, description, stops } = vm
      let newTrip = {
        title,
        description,
        stops,
        id
      }
      adminAppFactory.addTrip(newTrip)
        .then($route.reload())
    }
  }
})()
