angular.module("app", []).directive('inputBlur', function(){
  var FOCUS_CLASS = 'input-focused';
  return {
    restrict: 'A';
    priority: 1;
    require: 'ngModel';
    link: function(scope, element, attrs, ctrl){
      element.bind('focus', function() {
        // Perform any on-focus logic here
        element.parent().addClass(FOCUS_CLASS);
      }).bind('blur', function() {
        // Perform any off-focus logic here
        element.parent().removeClass(FOCUS_CLASS);
      });
    }
  };
});
$scope.someValue = "Hello";

