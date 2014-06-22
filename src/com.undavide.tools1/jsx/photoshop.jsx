// Select the Tool corresponding to the passed stringID
function selectTool(stringID){

	var s2t = function(s) { return app.stringIDToTypeID(s); }
	
	var d = new ActionDescriptor();
	var r = new ActionReference();
	r.putClass( s2t(stringID) );
	d.putReference( s2t("target"), r);
	d.putBoolean( s2t("dontRecord"), true );
	d.putBoolean( s2t("forceNotify"), true );
	executeAction( s2t("select"), d, DialogModes.NO );
}
