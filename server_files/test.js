angular.module('test_click', [])
.directive("testing", function() {
	return {
		restrict: "E",
		template: "<div>This is a test</div>
	}
});