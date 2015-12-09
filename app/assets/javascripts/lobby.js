(function() {
  var app = angular.module('Lobby', []);

  app.controller('LobbyController', function($http, $scope){


    var updateLobby = function() {
        $http.get(document.URL + '/games.json').then(function(response) {
          $scope.games = response.data;
      });
    };


    //LOOP
    var loopLobby = function() {
      updateLobby("");
      var timer = setInterval(function() {
        updateLobby("");
      }, 5000);
    }

    loopLobby();
    //LOOP



  });

})();
