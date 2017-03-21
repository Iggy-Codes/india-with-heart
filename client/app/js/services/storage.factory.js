/* eslint no-undef: "off" */
angular
  .module('adminApp')
  .factory('StorageFactory', function ($window) {
    const store = $window.localStorage
    const key = 'auth-token'

    function readToken () {
      return store.getItem(key)
    }

    function saveToken (token) {
      return !!store.setItem(key, token)
    }

    function removeToken () {
      return store.removeItem(key)
    }

    return { readToken, saveToken, removeToken }
  })
