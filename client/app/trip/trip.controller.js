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
      console.log(e)
      for (var i = 4; i < 12; i++) {
        console.log()
        if (+e.srcElement[i].value !== 0 && destinations.indexOf(e.srcElement[i].value) < 0) {
          destinations.push(e.srcElement[i].value)
        }
      }

      $rootScope.newTrip = {
        title: vm.title,
        titleUri: vm.titleUri,
        description: vm.description,
        destinations
      }
      console.log('action ' + vm.action)
      console.log($rootScope.newTrip)
      adminAppFactory.addTrip()
        .then($route.reload())
    }
  }
})()

// (function () {
//   angular
//   .module('bookStoreApp')
//   .controller('CategoryController', [
//     'BookStoreFactory',
//     '$routeParams',
//     CategoryController
//   ])

//   function CategoryController (BookStoreFactory, $routeParams) {
//     vm.showCategory = false
//     vm.orderCriteria = 'rank'

//     console.log('category controller ' + $routeParams.categoryURL)

//     BookStoreFactory.getCategoryName($routeParams.categoryURL)
//     .then(function (response) {
//       console.log('title categories')
//       console.log('Category Controller Title')
//       console.log(response[0].display_name)
//       vm.title = response[0].display_name
//     })

//     BookStoreFactory.getCategoryBooks($routeParams.categoryURL)
//     .then(function (response) {
//       vm.booksResult = response
//     })
//   }
// })()
