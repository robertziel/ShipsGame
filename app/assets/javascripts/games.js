(function() {
  var app = angular.module('Game', []);

  app.controller('GameController', function($http, $scope){


    var updateUserBoard = function(push) {
        if (Object.prototype.toString.call( push ) === '[object Array]') { push = '&push=' + push ;} else { push = "";}
        $http.get(document.URL + '.json?game=1' + push).then(function(response) {
        $scope.userboard = response.data.userboard;
        $scope.readyuser = response.data.readyuser;

      });
    };
    var updateUserBoardPut = function(push) {
        if (Object.prototype.toString.call( push ) === '[object Array]') { push = '&push=' + push ;} else { push = "";}
        $http.put(document.URL + '.json?game=1' + push).then(function(response) {
        $scope.userboard = response.data.userboard;
        $scope.readyuser = response.data.readyuser;

      });
    };

    //LOOP
    var loopFunction = function() {
      updateUserBoard("");
      var timer = setInterval(function() {
        updateUserBoard("");
      }, 5000);
    }

    loopFunction();
    //LOOP

    this.tab = ($scope.readyuser) ? 2 : 1;



    this.Ship = [0,0,0,0,0,0,0,0,0,0];
    this.shipRotate = function(num){
      if (this.Ship[num] === 0) {this.Ship[num] = 1; this.position[num][2] = 1;} else {this.Ship[num] = 0; this.position[num][2] = 0;}
    };

    this.position = [[0,0,0,0],[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,2],[0,0,0,2],[0,0,0,2],[0,0,0,3],[0,0,0,3],[0,0,0,4]];
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
          this.fields[y][x][0] = offsetHash.left;
          this.fields[y][x][1] = offsetHash.top;
        }
      }

      //FILL UP

      for (var x = 0; x < 10; x++){
        for (var y = 0; y < 10; y++){
          var fieldX = this.fields[x][y][0];
          var fieldY = this.fields[x][y][1];
          for (var z = 0; z < 11; z++){
            var shipX = this.position[z][0];
            var shipY = this.position[z][1];
            var shipType = this.position[z][3];
            if (fieldY + 25 >= shipY && fieldY - 25 < shipY) {
              if (fieldX + 25 >= shipX && fieldX - 25 < shipX) {

                if (this.position[z][2] === 1) {
                  for (var con = x; con <= x + (shipType - 1); con++){
                    if ($scope.userboard[con][y] === 0) {
                      $scope.userboard[con][y] = 1;
                    }
                  }
                }
                else {
                  for (var con = y; con <= y + (shipType - 1); con++){
                    if ($scope.userboard[x][con] === 0) {
                      $scope.userboard[x][con] = 1;
                    }
                  }
                }
              }
            }
          }
        }
      }

      //CHECK AMOUNT 20
      var amount = 0;
      for (var x = 0; x < 10; x++) {
        for (var y = 0; y < 10; y++) amount = amount + $scope.userboard[x][y];
      }
      if (amount < 20) {
        for (var x = 0; x < 10; x++) {
          for (var y = 0; y < 10; y++) $scope.userboard[x][y] = 0;
        }
      }
      else {
        updateUserBoardPut($scope.userboard);
        this.tab = 2;
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
