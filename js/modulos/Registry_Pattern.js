
angular.module('esri-map-GeoGeeks')
    .controller('RegistryPatternCtrl', function($scope, esriRegistry) {
        $scope.btnClickPuntos = function() {
            esriRegistry.get('myMap').then(function(map){
                map.on('click', function(e) {
                    $scope.$apply(function() {
                        $scope.map.point = e.mapPoint;
                    });
                });
            });
        }
    });