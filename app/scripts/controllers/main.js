'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', ['$scope', 'mainService', '$location',function($scope, mainService,$location) {
    var arrangeData = function(x) {
      var res = [];
      var y = x.split('SERIES');
      y.map(function(val) {
        if (val !== '') {
          var z = val.split(',');
          z.map(function(n, i) {
            if (i > 0) {
              var h = n.split('|');
              var q = findObjectByKey(res, 'year', h[0]);
              if (q) {
                q['SERIES' + z[0]] = h[1];
              } else {

                res.push({ 'year': h[0], ['SERIES' + z[0]]: h[1] });

              }
            }
          })
        }
      })
      return res;
    }

    var findObjectByKey = function(array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }
      return null;
    }
    $scope.onFileUpload = function(ev) {
      var files = ev.files;
      $scope.fileName = files[0].name;
      if (files.length) {
        var reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onload = function(event) {
          var jsonData = arrangeData(event.target.result);
          mainService.fnPostSerieses({ Series: jsonData }).then(function(response) {
            console.log(response);
            $scope.showLink = true;
            $scope.id=response.data._id;
          });

        }
      }
    }
    $scope.fnGotoChart=function(){
    	$location.path('/chart/'+$scope.id);
    }

  }]);
