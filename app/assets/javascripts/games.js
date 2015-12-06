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
      var offsetHash = offset(angular.element( document.querySelector( '.Ship' + num ) ));
      this.position[num][0] = offsetHash.left;
      this.position[num][1] = offsetHash.top;
    };


    this.fields = arr;

    this.checkPosition = function(){
      var elementsFields = angular.element( document.querySelector('.gameBoard' )).children().children().children();
      for (var x = 0; x < 10; x++){
        for (var y = 0; y < 10; y++){
          var offsetHash = offset(angular.element(elementsFields[(y * 10) + x]));
          this.fields[x][y][0] = offsetHash.left;
          this.fields[x][y][1] = offsetHash.top;
        }
      }
    };

  });

})();



//initialize 3D array
arr = [];
for(var x = 0; x < 10; x++){
    arr[x] = [];
    for(var y = 0; y < 10; y++){
        arr[x][y] = [0,0];
    }
}
//initialize 3D array

var userData = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];



//ABSOLUTE ELEMENT POSITION
function offset(elm) {
  try {return elm.offset();} catch(e) {}
  var rawDom = elm[0];
  var _x = 0;
  var _y = 0;
  var body = document.documentElement || document.body;
  var scrollX = window.pageXOffset || body.scrollLeft;
  var scrollY = window.pageYOffset || body.scrollTop;
  _x = rawDom.getBoundingClientRect().left + scrollX;
  _y = rawDom.getBoundingClientRect().top + scrollY;
  return { left: _x, top: _y };
}
