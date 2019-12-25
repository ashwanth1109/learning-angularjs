const app = angular.module("app", ["controllers"]);

app.controller("MainController", [
  "$scope",
  function($scope) {
    $scope.greeting = "Hola,";
    $scope.name = function() {
      return "Ashwanth" + " " + "A R";
    };

    $scope.isButtonClicked = false;
    $scope.handleClick = function() {
      $scope.isButtonClicked = true;
    };

    $scope.val = 1;
    $scope.increment = function() {
      $scope.val += 1;
      $scope.isEven = $scope.val % 2 === 0;
    };
  }
]);

app.controller("ListController", [
  "$scope",
  function($scope) {
    $scope.myArr = [1, 2, 3, 4, 5, 5];
    $scope.users = [
      { name: "Mike", age: 23 },
      { name: "Andy", age: 34 },
      { name: "Reid", age: 45 }
    ];

    $scope.heroes = { name: "Kunkka", attack: "Melee", type: "Strength" };
  }
]);

angular.module("controllers", []).controller("MainController1", [
  "$scope",
  function($scope) {
    $scope.val = "This is MainController1";
  }
]);
