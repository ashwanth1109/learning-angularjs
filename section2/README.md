# Section 2:

### ng-classes

Apply class styles in html/css

```html
<style type="text/css">
  .orange {
    color: orange;
  }
  .italic {
    font-style: italic;
  }
</style>
```

Normal, class usage:

```html
<h1 class="orange italic">Hello World</h1>
```

Applying ng-classes:

```html
<h1 ng-class="['orange', 'italic']">Hello ng class</h1>
```

Applying ng-classes from variables dynamically:

```html
<div ng-controller="Controller1">
  <h1 ng-class="[classVar1, classVar2]">Hello Class Vars</h1>
  <hr />
  <h1 ng-class="{orange: isOrange, italic: isItalic}">
    Hello class toggle
  </h1>
</div>
```

```js
function($scope) {
    $scope.val = "Hello World";

    $scope.classVar1 = "orange";
    $scope.classVar2 = "italic";

    $scope.isOrange = false;
    $scope.isItalic = true;
}
```

### ng-model

Model input to data:

```html
<input ng-model="mydata" />
<input ng-model="mydata" />
<h1>{{mydata}}</h1>
<h1>{{mydata}}</h1>
<button ng-click="mydata='123'">123</button>
```

Note, you can have several instances of the variable which will all update.
You can use a button to update the value through javascript assignment.

Inheritance of model into a sub controller:

```html
<div ng-controller="Controller2">
  <input ng-model="mydata" />
  <h1>{{mydata}}</h1>
  <div ng-controller="SubController">
    <input ng-model="mydata" />
    <h1>{{mydata}}</h1>
  </div>
</div>
```

Here, changing value in Controller2 is reflected in all places. But as soon as you change the value in the SubController, Angular instantiates a new instance for the SubController and changes will not be reflected outside. Further changes outside will not be reflected inside.

To circumvent this problem, you can use the object dot notation as follows:

```html
<div ng-controller="Controller2">
  <input type="text" ng-model="mydata1.val" />
  <div ng-controller="SubController">
    <input type="text" ng-model="mydata1.val" />
    <h1>{{mydata1.val}}</h1>
  </div>
</div>
```
