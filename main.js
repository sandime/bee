/**
 * Created by SHERRI on 3/27/15.
 */
/* this goes away
var countryApp = angular.module('countryApp', []);
countryApp.controller('CountryListCtrl', function ($scope, $http){
    $http.get('countries.json').success(function(data) {
        $scope.countries = data;
    });
});

*/

//new

var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'country-list.html',
            controller: 'CountryListCtrl'
        }).
        when('/:countryName', {
            templateUrl: 'country-detail.html',
            controller: 'CountryDetailCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});
/* using angular's built-in http cache service*/
countryApp.factory('countries', function($http){

        function getData(callback){
          $http({
            method: 'GET',
            url: 'countries.json',
            cache: true
          }).success(callback);
        }

        return {
          list: getData,
          find: function(name, callback){
            getData(function(data) {
              var country = data.filter(function(entry){
                return entry.name === name;
              })[0];
              callback(country);
            });
          }
        };
      });

      countryApp.controller('CountryListCtrl', function ($scope, countries){
        countries.list(function(countries) {
          $scope.countries = countries;
        });
      });

      countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
        countries.find($routeParams.countryName, function(country) {
          $scope.country = country;
        });
      });



/*
countryApp.factory('countries', function($http){

        function getData(callback){
          $http({
            method: 'GET',
            url: 'countries.json',
            cache: true
          }).success(callback);
        }

        return {
          list: getData,
          find: function(name, callback){
            getData(function(data) {
              var country = data.filter(function(entry){
                return entry.name === name;
              })[0];
              callback(country);
            });
          }
        };
      });

      countryApp.controller('CountryListCtrl', function ($scope, countries){
        countries.list(function(countries) {
          $scope.countries = countries;
        });
      });

      countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
        countries.find($routeParams.countryName, function(country) {
          $scope.country = country;
        });
      });
*/
