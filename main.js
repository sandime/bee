/**
 * Created by SHERRI on 3/27/15.
 */
    //added countriesFactory and CountryDirective
var countryApp = angular.module('countryApp', ['ngRoute',
    'countryControllers',
    'countriesFactory',
    'countryDirective']);

countryApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'country-list.html',
            controller: 'CountryListCtrl'
        }).
        when('/:countryId', {
            templateUrl: 'country-detail.html',
            controller: 'CountryDetailCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});

