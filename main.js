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
/* this section is redundant. calling json twice. replaced with the "countries" factory
countryApp.controller('CountryListCtrl', function ($scope, $http){
    $http.get('countries.json').success(function(data) {
        $scope.countries = data;
    });
});
countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams, $http){
    $scope.name = $routeParams.countryName;
    $http.get('countries.json').success(function(data) {
        $scope.country = data.filter(function(entry){
            return entry.name === $scope.name;
        })[0];
    });
}); */

/* replace this with section above
countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams){
    console.log($routeParams);
    $scope.name= $routeParams.countryName;
    */

countryApp.factory('countries', function($http){
        return {
          list: function(callback){
            $http.get('countries.json').success(callback);
          }
        };
      });
/* now the controllers call the list function and pass their own callback using "countries" factory*/
      countryApp.controller('CountryListCtrl', function ($scope, countries){
        countries.list(function(countries) {
          $scope.countries = countries;
        });
      });
      countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams, $http){
        $http.get('countries.json').success(function(data) {
          $scope.country = data.filter(function(entry){
            return entry.name === $routeParams.countryName
          })[0];
        });
      });
