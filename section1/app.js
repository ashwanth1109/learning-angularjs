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
    };

    $scope.isEven = function() {
      return $scope.val % 2 === 0;
    };
  }
]);

angular.module("controllers", []).controller("MainController1", [
  "$scope",
  function($scope) {
    $scope.val = "This is MainController1";
  }
]);
