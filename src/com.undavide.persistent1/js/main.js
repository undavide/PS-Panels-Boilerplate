/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();   
    var gExtensionId = "com.undavide.persistent1";

    function Persistent(inOn) {

        if (inOn){
            var event = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION");
        } else {
            var event = new CSEvent("com.adobe.PhotoshopUnPersistent", "APPLICATION");
        }
        event.extensionId = gExtensionId;
        csInterface.dispatchEvent(event);
    }

    function init() {
        
        themeManager.init();

        $('#persistenceSwitch').change(function() {
            Persistent( $(this).is(':checked') );
        });
    }
        
    init();

}());
    
