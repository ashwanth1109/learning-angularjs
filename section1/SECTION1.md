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

### Modularizing a controller (prefer this pattern in production)

```html
<div ng-controller="MainController1">
  {{val}}
</div>
```

```js
const app = angular.module("app", ["controllers"]); // dependancy injection

angular.module("controllers", []).controller("MainController1", [
  "$scope",
  function($scope) {
    $scope.val = "This is MainController1";
  }
]);
```

### Handling Click Events using ng-click

```html
<div ng-controller="MainController">
  <div>
    {{isButtonClicked ? 'Button is clicked' : 'Button is not clicked'}}
  </div>
  <button ng-click="handleClick()">Click me!</button>
</div>
```

```js
$scope.isButtonClicked = false;
$scope.handleClick = function() {
  $scope.isButtonClicked = true;
};
```

### Showing/Hiding using ng-show and ng-hide

```html
<div>{{val}}</div>
<button ng-click="increment()">Increment</button>
<div ng-show="isEven()">Value is even</div>
<div ng-hide="isEven()">Value is odd</div>
```

```js
$scope.val = 1;
$scope.increment = function() {
  $scope.val += 1;
};

$scope.isEven = function() {
  return $scope.val % 2 === 0;
};
```

Note: Considered a bad practice to call a function in state directives such as show or hide. This can lead to performance degradation.

### Improved way of using ng-show and ng-hide

```html
<div ng-show="isEven">Value is even</div>
<div ng-hide="isEven">Value is odd</div>
```

```js
$scope.val = 1;
$scope.increment = function() {
  $scope.val += 1;
  $scope.isEven = $scope.val % 2 === 0;
};
```

### ng-repeat

```html
<div ng-controller="ListController">
  <div ng-repeat="element in myArr track by $index">
    {{element}}: {{$index}} element {{$start}} {{$middle}} {{$last}} {{$even}}
    {{$odd}}
  </div>
  <hr />
  <div ng-repeat-start="user in users">
    <strong>{{user.name}}</strong>: {{user.age}}
  </div>
  <hr ng-repeat-end />

  <div ng-repeat="attr in heroes">{{attr}}</div>
</div>
```

```js
app.controller("ListController", [
  "$scope",
  function($scope) {
    $scope.myArr = [1, 2, 3, 4, 5, 5];
    $scope.users = [
      { name: "Mike", age: 23 },
      {
        name: "Andy",
        age: 34
      },
      { name: "Reid", age: 45 }
    ];
    $scope.heroes = { name: "Kunkka", attack: "Melee", type: "Strength" };
  }
]);
```
