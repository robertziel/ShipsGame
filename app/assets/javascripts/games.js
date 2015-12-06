(function() {
  var app = angular.module('Game', []);

  app.controller('GameController', function(){

    this.userboard = userData;

    this.Ship = [0,0,0,0,0,0,0,0,0,0];

    this.shipRotate = function(num){
      if (this.Ship[num] === 0) {
        this.Ship[num] = 1;
      }
      else {
        this.Ship[num] = 0;
      }
    };
    
  });

})();

var userData = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
