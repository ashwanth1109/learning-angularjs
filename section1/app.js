const app = angular.module("app", ["controllers"]);

app.controller("MainController", [
  "$scope",
  function($scope) {
    $scope.greeting = "Hola,";
    $scope.name = function() {
      return "Ashwanth" + " " + "A R";
    };
  }
]);

angular.module("controllers", []).controller("MainController1", [
  "$scope",
  function($scope) {
    $scope.val = "This is MainController1";
  }
]);
