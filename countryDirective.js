/**
 * Created by SHERRI on 3/31/15.
 */
angular.module('countryDirective', [])
       .directive('country', function(){
  return {
    scope: { country: '=' },
    restrict: 'A',
    templateUrl: 'country.html',
    controller: function($scope, countries){
      countries.find($scope.country.id, function(country) {
        $scope.flagURL = country.flagURL;
      });
    }
  };
});

/* replaced below with above. study this!
countryApp.directive('country', function(){
    return {
        scope: {
            country: '='
        },
        restrict: 'A',
        templateUrl: 'country.html',
        controller: function($scope, countries){
            countries.find($scope.country.id, function(country) {
                $scope.flagURL = country.flagURL;
            });
        }
    };
});
    */