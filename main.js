/**
 * Created by SHERRI on 3/27/15.
 */

var countryApp = angular.module('countryApp', []);
countryApp.controller('CountryListCtrl', function ($scope, $http){
    $http.get('countries.json').success(function(data) {
        $scope.countries = data;
    });
});


