/* eslint no-undef: "off" */
(function () {
  angular
    .module('adminApp')
    .factory('ImgFactory', ImgFactory)

  function ImgFactory ($http, cfg, $rootScope) {
    function getImgs () {
      return $http.get(cfg.urlImgs)
    }
    return {
      getImgs
    }
  }
})()
