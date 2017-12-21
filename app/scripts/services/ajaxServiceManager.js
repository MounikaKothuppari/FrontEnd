'use strict';
angular.module("appApp").service('ajaxServiceManager',['$http','$q', function($http,$q) {

    function fnQuery(httpdata) {
        return $http({
            url: httpdata.url,
            method: httpdata.method,
            params: httpdata.params,
            data: httpdata.data
        }).then(function successCallback(oResponse) {
            return oResponse.data;
        }, function errorCallback(oResponse) {
           return $q.reject(oResponse);
        });
    };
    return {
        fnQuery: fnQuery
    }


}]);
