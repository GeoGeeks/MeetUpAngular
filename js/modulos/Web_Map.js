angular.module('esri-map-GeoGeeks',['esri.map'])
    .controller('controladorWebMap', function($scope, esriLoader) {
        $scope.map = {
            center: {
                lng:  -73.612,
                lat: 3.502
            },
            zoom:11,
            point: null
        };

        $scope.webMapLoaded = function(map) {
            $scope.mapa = map;
        };
    });