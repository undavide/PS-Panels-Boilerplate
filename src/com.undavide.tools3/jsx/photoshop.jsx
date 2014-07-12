function s2t(s) { return app.stringIDToTypeID(s); }
function t2s(t) { return app.typeIDToStringID(t); }

// Select the Tool corresponding to the passed stringID
function selectTool(stringID){
	var d = new ActionDescriptor();
	var r = new ActionReference();
	r.putClass( s2t(stringID) );
	d.putReference( s2t("target"), r);
	d.putBoolean( s2t("dontRecord"), true );
	d.putBoolean( s2t("forceNotify"), true );
	executeAction( s2t("select"), d, DialogModes.NO );
}

// Returns the StringID of the selected Tool
function getCurrentTool() {
	var r = new ActionReference();
	r.putProperty( s2t("property"), s2t("tool") );
	r.putEnumerated( s2t("application"), s2t("ordinal"), s2t("targetEnum") ); 
	var d = executeActionGet(r);
	return t2s( d.getEnumerationType( s2t("tool") ) );
}
