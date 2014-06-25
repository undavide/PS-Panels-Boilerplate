var app = angular.module('ToolsApp', []);

app.controller('ToolsController', function ($scope, $http) {

	$scope.psToolsModel = null;
	// currentTool =  null;
	$scope.csInterface = new CSInterface();

	// Get the StringID of the currently selected Tool
	// so that when the panel opens it already has the right Tool selected
	$scope.csInterface.evalScript('getCurrentTool()', function (stringID) { // callback

		// Fetch the local JSON (array of Tools objects)
		$http.get('./js/tools.json')

			.success( function (data) {
				// fill the psToolsModel to be used by ng-repeat directive
				$scope.psToolsModel = data;

				// filter the JSON to extract the object corresponding to the selected tool
				// selectedTool is an Array of one object
				var selectedTool = $scope.psToolsModel.filter(function (item) {
					return item['stringID'] == stringID;
				});
				// assign the object to toggleGroup, which is the ng-model for radio buttons
				$scope.toggleGroup = JSON.stringify(selectedTool[0]);
			})

			// in case of error
			.error( function(data, status, headers, config) {
				console.log("Error reading the tools file!");
			});
	});
});

app.directive('psTools', function () {
	return {
		restrict: 'E',
		replace: true,
		// seems like ToolTip doesn't work as button's title :-(
		template: '<div class="inline"><input type="radio" value="{{tool}}" id="{{type}}" class="topcoat-toggle" ng-model="$parent.toggleGroup" ng-click="selectTool()"> \
					<label class="topcoat-toggle topcoat-icon-button ps-icon {{type}}" for="{{type}}" title="{{toolTip}}"></label></div>',
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
