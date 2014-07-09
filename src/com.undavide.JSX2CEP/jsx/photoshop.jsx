/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

try {
	var xLib = new ExternalObject("lib:\PlugPlugExternalObject");
} catch (e) {
	alert(e);
}

function dispatchCEPEvent(_type, _data) {
	if (xLib) {
		var eventObj = new CSXSEvent(); 
		eventObj.type = _type;
		eventObj.data = _data;
		eventObj.dispatch();
	}
}

function mainRoutine() {
	eventType = "My Custom Event";
	dispatchCEPEvent(eventType, "JSX: mainRoutine() has started.");
	$.sleep(1000);
	dispatchCEPEvent(eventType, "One second has passed and everything's fine here...");
	$.sleep(1000);
	dispatchCEPEvent(eventType, "Two seconds have passed and it still holds!");
	$.sleep(1000);
	dispatchCEPEvent(eventType, "JSX: mainRoutine() is done.");
	return "[Return Message from evalScript() callback]";
}

