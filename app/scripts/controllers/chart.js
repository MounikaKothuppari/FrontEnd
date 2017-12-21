'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ChartCtrl', ['$scope', 'mainService', '$routeParams', function($scope, mainService, $routeParams) {
    mainService.fnGetSeries($routeParams.ID).then(function(response) {

      var chart = c3.generate({
        data: {
          json: response.Series,
          keys: {
          	x:'year',
            value: ['SERIES1', 'SERIES2', 'SERIES3', 'SERIES4'],
          }
        }
      });
    });

  }]);
