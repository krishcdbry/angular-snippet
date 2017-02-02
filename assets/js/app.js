(function(ng) {
  'use strict';

  angular
    .module('krishApp', ['ui.router'])

    .config([
      '$stateProvider'
      , '$httpProvider'
      , '$locationProvider'
      , '$urlRouterProvider'
     , function ($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider) {

       $httpProvider.defaults.headers.post['content-type'] = 'application/x-www-form-url-encoded;charset=UTF-8';

       $stateProvider
            .state('home', {
                url: '/home'
                , templateUrl: 'template/home.html'
            })
            .state('profile', {
                url: '/profile'
                , templateUrl: 'template/profile.html'
            })
            .state('/', {
              url : '/',
              templateUrl: 'template/main.html'
            })

	           $urlRouterProvider.otherwise('/');
        // $locationProvider.html5Mode(true);
     }])

    .controller('mainController', ['$scope', '$http', function ($scope, $http) {
      $scope.heading = "KRISHCDBRY";
      $http.defaults.headers.common['x-access-token'] = 'Mohana Krishna';

      $scope.one = {
        'krish' : 'krishcdbrysss',
        'name': 'one'
      }

      $scope.two = {
        'name' : 'krishcdbry'
      }


      console.log(angular.extend({}, $scope.one, $scope.two));
      console.log($scope.one);
      console.log($scope.two);

    }])

    .controller('homeController', ['$scope', '$http', function($scope, $http) {

        $scope.request = function() {
          $http.get('/sdsadadsd').success(function () {

          })
        }
    }])

    .controller('profileController', ['$scope', '$http', function($scope, $http) {

    }])

})(angular)
