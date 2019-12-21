const app = angular.module("app", []);

app.controller("MainController", [
  "$scope",
  function($scope) {
    $scope.greeting = "Hola!";
  }
]);
