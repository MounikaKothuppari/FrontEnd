       'use strict';
       angular.module("appApp").service('mainService', ['ajaxServiceManager', 'serverConfig', function(ajaxServiceManager, serverConfig) {
         var myConnection = serverConfig.url;

         function fnGetSeries(id) {
           var httpdata = {
             method: 'GET',
             url: myConnection + 'api/serieses/' + id,
             params: {
               id: id
             }

           };
           var result = ajaxServiceManager.fnQuery(httpdata);
           return result;
         }

         function fnPostSerieses(data) {

           var httpdata = {
             url: myConnection + 'api/serieses/',
             method: 'POST',
             data: data
           }
           var result = ajaxServiceManager.fnQuery(httpdata);
           return result;

         }
         return {
           fnGetSeries: fnGetSeries,
           fnPostSerieses: fnPostSerieses

         }
       }]);
