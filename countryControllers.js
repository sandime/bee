/**
 * Created by SHERRI on 3/31/15.
 */
var countryControllers = angular.module('countryControllers', []);

countryControllers.controller('CountryListCtrl', function ($scope, countries){
    countries.list(function(countries) {
        $scope.countries = countries;
    });
});

countryControllers.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
    countries.find($routeParams.countryId, function(country) {
        $scope.country = country;
    });
});

/* moved this code out of main.js and changed to above
countryApp.controller('CountryListCtrl', function ($scope, countries){
    countries.list(function(countries) {
        $scope.countries = countries;
    });
});
countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
    countries.find($routeParams.countryId, function(country) {
        $scope.country = country;
    });
});
    */