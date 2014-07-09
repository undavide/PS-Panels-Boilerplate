/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
	'use strict';

	var csInterface = new CSInterface();
	var message = "";
	
	function init() {
				
		themeManager.init();
		
		csInterface.addEventListener("My Custom Event", function(evt) {
			message += evt.data + "\n\n";
			$("#textarea").text(message);
			// console.log(evt.data);
		});

		$("#btn_triggerEvent").click(function () {
			csInterface.evalScript("mainRoutine()", function (res) {
				message += res + "\n\n";
				$("#textarea").text(message);
			});
		});
	}
		
	init();

}());
	
