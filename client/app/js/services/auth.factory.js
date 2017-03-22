/* eslint no-undef: "off" */
angular
  .module('adminApp')
  .factory('AuthFactory', function ($http, $q, $rootScope, $location, StorageFactory, jwtHelper, cfg) {
    function login (credentials) {
      console.log('Login Factory')
      return $http.post(cfg.urlAuth, credentials)
        .then(response => response.data.token)
        .then(token => {
          console.log('token')
          console.log(token)
          StorageFactory.saveToken(token)
          return token
        })
    }

    // function register (credentials) {
    //   const url = '/api/register'
    //   return $http.post(url, credentials)
    //     .then($location.path('/login'))
    // }

    function logout () {
      delete $rootScope.loggedUser
      StorageFactory.removeToken()
      $rootScope.$broadcast('eventLogin', false)
    }

    function isLoggedIn () {
      const token = StorageFactory.readToken()
      if (!token) return false
      const tokenPayload = jwtHelper.decodeToken(token)// eslint-disable-line no-unused-vars
      return !(jwtHelper.isTokenExpired(token))
    }

    function setCredentials (token) {
      var tokenPayload = jwtHelper.decodeToken(token)
      $rootScope.loggedUser = tokenPayload
      $rootScope.$broadcast('eventLogin', true)
    }

    return { login, logout, isLoggedIn, setCredentials }
  })
