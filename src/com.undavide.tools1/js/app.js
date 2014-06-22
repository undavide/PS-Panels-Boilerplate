var app = angular.module('ToolsApp', []);

app.controller('ToolsController', function ($scope, $http) {
	
	$scope.psToolsModel = null;
	$scope.csInterface = new CSInterface();
	
	$http.get('./js/tools.json')
		.success( function (data) {
			$scope.psToolsModel = data;
		})
		.error( function(data, status, headers, config) {
			console.log("Error reading the tools file!");
		});
});

app.directive('psTools', function () {
	return {
		restrict: 'E',
		replace: true,
		// seems like ToolTip doesn't work as button's title :-(
		template: '<button class="topcoat-icon-button" ng-click="selectTool()" title="{{toolTip}}">\
						<span class="ps-icon {{type}}"></span>\
				   </button>',
		link: function($scope, $element, $attrs) {
			$scope.type = $attrs.type;
			if ($attrs.idx) {
				$scope.toolTip = $scope.psToolsModel[$attrs.idx].toolTip;
			}
			// calls the selection function in JSX
			$scope.selectTool = function() { 
				$scope.csInterface.evalScript("selectTool('" + $scope.type + "')");
			};
		}
	}
});
