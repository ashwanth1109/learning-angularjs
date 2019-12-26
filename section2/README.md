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
