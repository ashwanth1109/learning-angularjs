# Introduction

## Model View Controller

A software architectural pattern that separates the representation of information from the user's interaction with it.

- Model: application data, business rules, logic etc.
- View: an output representation of the data
- Controller: Mediates input and converts it to commands for the model or view

## Best Practices enforced by AngularJS

- Model View Separation & Comparmentalization
- DRY (modularity of the framework)
- Dont Hack - even if its seems hacky, you're probably doing it wrong (\*this is interesting)

## Things to look out for

- Performance
- Reusability
- Identify the right features and use them the right way

## Testing

- Incredibly robust testing framework
- Essential part of an angular application
- Doesn't have to be TDD

## Important Things to Note

- Source code is well commented and readable (consumable)
- Error messages are bad

# Section 1:

- ng-app: Auto bootstrapping AngularJS (designates the root element of the application)
- You can interpolate values using {{}}
- ng-controller: attaches a controller class to the view

### Importing AngularJS into the app

```html
<html ng-app="app">
  <head>
    <script
      type="text/javascript"
      src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js"
    ></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body></body>
</html>
```

```js
const app = angular.module("app", []);
```

### Defining a controller

Interpolation of variables inside the controller

```html
<div ng-controller="MainController">
  {{greeting}} {{name()}}
</div>
```

Adding behavior/functionality to the controller

```js
app.controller("MainController", [
  "$scope",
  function($scope) {
    $scope.greeting = "Hola,";
    $scope.name = function() {
      return "Ashwanth" + " " + "A R";
    };
  }
]);
```
