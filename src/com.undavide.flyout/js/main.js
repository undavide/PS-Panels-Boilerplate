/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
	'use strict';

	var csInterface = new CSInterface();
	
	function init() {

		// Ugly workaround to keep track of "checked" and "enabled" statuses
		var checkableMenuItem_isChecked = true;
		var targetMenuItem_isEnabled = true;
				
		// Flyout menu XML string 
		var flyoutXML = '<Menu> \
							<MenuItem Id="enabledMenuItem" Label="Enabled Menu Item" Enabled="true" Checked="false"/> \
							<MenuItem Id="disabledMenuItem" Label="Disabled Menu Item" Enabled="false" Checked="false"/> \
							\
							<MenuItem Label="---" /> \
							\
							<MenuItem Id="checkableMenuItem" Label="Checkable Menu Item" Enabled="true" Checked="true"/> \
							\
							<MenuItem Label="---" /> \
							\
							<MenuItem Id="actionMenuItem" Label="Click me to enable/disable the Target Menu!" Enabled="true" Checked="false"/> \
							<MenuItem Id="targetMenuItem" Label="Target Menu Item" Enabled="true" Checked="false"/> \
							\
							<MenuItem Label="---" /> \
							\
							<MenuItem Label="Parent Menu (wont work on PS CC 2014.2.0)"> \
								<MenuItem Label="Child Menu 1"/> \
								<MenuItem Label="Child Menu 2"/> \
							</MenuItem> \
						</Menu>';

		// Uses the XML string to build the menu
		csInterface.setPanelFlyoutMenu(flyoutXML);

		// Flyout Menu Click Callback
		function flyoutMenuClickedHandler (event) {

			// the event's "data" attribute is an object, which contains "menuId" and "menuName"
			console.dir(event); 
			switch (event.data.menuId) {
				
				case "checkableMenuItem": 
					checkableMenuItem_isChecked = !checkableMenuItem_isChecked;
					csInterface.updatePanelMenuItem("Checkable Menu Item", true, checkableMenuItem_isChecked);
					break;

				case "actionMenuItem": 
					targetMenuItem_isEnabled = !targetMenuItem_isEnabled;
					csInterface.updatePanelMenuItem("Target Menu Item", targetMenuItem_isEnabled, false);
					break;

				default: 
					console.log(event.data.menuName + " clicked!");
			}

			csInterface.evalScript("alert('Clicked!\\n \"" + event.data.menuName + "\"');");
		}

		// Listen for the Flyout menu clicks
		csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", flyoutMenuClickedHandler);

		themeManager.init();

	}
		
	init();

}());
	
