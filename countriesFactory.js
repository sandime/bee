/**
 * Created by SHERRI on 3/31/15.
 */
angular.module('countriesFactory', [])
    .factory('countries', function($http){
        return {
            list: function (callback){
                $http({
                    method: 'GET',
                    url: 'countries.json',
                    cache: true
                }).success(callback);
            },
            find: function(id, callback){
                $http({
                    method: 'GET',
                    url: 'country_' + id + '.json',
                    cache: true
                }).success(callback);
            }
        };
    });
//replaced below with above. have to make it a module

/*countryApp.factory('countries', function($http){
    return {
        list: function (callback){
            $http({
                method: 'GET',
                url: 'countries.json',
                cache: true
            }).success(callback);
        },
        find: function(id, callback){
            $http({
                method: 'GET',
                url: 'country_' + id + '.json',
                cache: true
            }).success(callback);
        }
    };
});
    */