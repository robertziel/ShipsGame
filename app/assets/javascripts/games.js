(function() {
  var app = angular.module('Game', []);

  app.controller('GameController', function(){

    this.userboard = userData;

    this.Ship = [0,0,0,0,0,0,0,0,0,0];
    this.shipRotate = function(num){
      if (this.Ship[num] === 0) {this.Ship[num] = 1;} else {this.Ship[num] = 0;}
    };

    this.position = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
    this.changePosition = function(num){
      this.position[num][0] = angular.element( document.querySelector( '.Ship' + num ) ).prop('offsetLeft');
      this.position[num][1] = angular.element( document.querySelector( '.Ship' + num ) ).prop('offsetTop');
    }

  });

})();





var userData = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
