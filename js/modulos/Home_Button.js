angular.module('esri-map-GeoGeeks')
    .controller('controladorHButton', function($scope, esriLoader) {
        $scope.btnHomeBtn = function() {
            esriLoader.require("esri/dijit/HomeButton", function(HomeButton)  {
                var home = new HomeButton({
                    map: $scope.mapa
                }, "HomeButton");
                home.startup();
            });
        }
    });

      
