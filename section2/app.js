const app = angular.module("app", []);

app.controller("Controller1", [
  "$scope",
  function($scope) {
    $scope.val = "Hello World";

    $scope.classVar1 = "orange";
    $scope.classVar2 = "italic";

    $scope.isOrange = false;
    $scope.isItalic = true;
  }
]);

app.controller("Controller2", ["$scope", function($scope) {}]);

app.controller("SubController", ["$scope", function($scope) {}]);
