/* eslint no-undef: "off" */
angular
  .module('adminApp')
  .controller('LoginController', function ($scope, $location, AuthFactory) {
    const vm = this
    vm.login = () => {
      console.log('login controller')
      const username = vm.username
      const password = vm.password
      AuthFactory.login({ username, password })
        .then(AuthFactory.setCredentials)
        .then(() => $location.path('/trip'))
    }
  })
