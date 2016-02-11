angular.module('esri-map-GeoGeeks')
    .controller('controladorRuteo', function($scope, esriLoader) {
        $scope.btnRuteo = function() {
            esriLoader.require(["esri/urlUtils", "esri/dijit/Directions"], function(urlUtils, Directions) {
                var directions = new Directions({
                    map: $scope.mapa,
                    showTravelModesOption: true,
                    travelModesServiceUrl: "http://utility.arcgis.com/usrsvcs/servers/cdc3efd03ddd4721b99adce219629489/rest/services/World/Utilities/GPServer"
                },"dir");
                directions.startup();   
            });
        }
    });  