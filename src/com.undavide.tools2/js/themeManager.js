/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global window, document, CSInterface*/

var themeManager = (function() {
	'use strict';

	// Convert the Color object to string in hexadecimal format; 
	function toHex(color, delta) {

		function computeValue(value, delta) {
			var computedValue = !isNaN(delta) ? value + delta : value;
			if (computedValue < 0) {
				computedValue = 0;
			} else if (computedValue > 255) {
				computedValue = 255;
			}

			computedValue = Math.floor(computedValue);

			computedValue = computedValue.toString(16);
			return computedValue.length === 1 ? "0" + computedValue : computedValue;
		}

		var hex = "";
		if (color) {
			hex = computeValue(color.red, delta) + computeValue(color.green, delta) + computeValue(color.blue, delta);
		}
		return hex;
	}

	// Add a rule in a stylesheet
	function addRule(stylesheetId, selector, rule) {
		var stylesheet = document.getElementById(stylesheetId);
		if (stylesheet) {
			stylesheet = stylesheet.sheet;
			if (stylesheet.addRule) {
				stylesheet.addRule(selector, rule);
			} else if (stylesheet.insertRule) {
				stylesheet.insertRule(selector + ' { ' + rule + ' }', stylesheet.cssRules.length);
			}
		}
	}
	
	// Update the theme with the appropriate Topcoat CSS using appSkinInfo
	// to determine which one to load - then overrides some Topcoat properties
	function updateThemeWithAppSkinInfo(appSkinInfo) {

		// console.log(JSON.stringify(appSkinInfo));

		var themeShade = "",
			redShade = appSkinInfo.panelBackgroundColor.color.red;

		if (redShade > 200) { // exact: 214 (#D6D6D6)
			themeShade = "lightlight"; // might be useful in the future
			// this is where font color and other theme dependent stuff could go
			$("#topcoat").attr("href", "css/topcoat-desktop-lightlight.min.css");
		
		} else if (redShade > 180) { // exact: 184 (#B8B8B8)
			themeShade = "light";
			$("#topcoat").attr("href", "css/topcoat-desktop-light.min.css");

		} else if (redShade > 80) { // exact: 83 (#535353)
			themeShade = "dark";
			$("#topcoat").attr("href", "css/topcoat-desktop-dark.min.css");
		
		} else if (redShade > 50) { // exact: 52 (#343434)
			themeShade = "darkdark";
			$("#topcoat").attr("href", "css/topcoat-desktop-darkdark.min.css");
		}

		var styleId = "topcoat-host",
			fontColor = themeShade.match(/light/) ? "#202020" : "#E6E6E6"
			
		addRule(styleId, "body", "font-family:" + appSkinInfo.baseFontFamily );
		addRule(styleId, "body", "font-size:" + appSkinInfo.baseFontSize + "px");
		addRule(styleId, "body", "color:" + fontColor);

		// Set the Tools icons stylesheet and Font color
		if (redShade > 128) { // light theme
			$("#icons").attr("href", "css/icons-light-theme.css");	
		} else { // dark theme
			$("#icons").attr("href", "css/icons-dark-theme.css");	
		}
	}

	// Callback for the CSInterface.THEME_COLOR_CHANGED_EVENT
	function onAppThemeColorChanged(event) {
		var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
		updateThemeWithAppSkinInfo(skinInfo);
	}

	function init() {

		var csInterface = new CSInterface();

		// Update the theme
		updateThemeWithAppSkinInfo(csInterface.hostEnvironment.appSkinInfo);

		// Set the Event Listener for future theme changes
		csInterface.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, onAppThemeColorChanged);
	}

	return {
		init: init
	};

}());