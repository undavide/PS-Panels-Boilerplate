/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    var extensionId =  csInterface.getExtensionID();

    function PersistentOn() {
        var event = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION");
        event.extensionId = extensionId;
        csInterface.dispatchEvent(event);
    }

    function init() {
        // Styling        
        themeManager.init();

        // Persistence
        PersistentOn();

        // Listener for PhotoshopJSONCallback
        csInterface.addEventListener("com.adobe.PhotoshopJSONCallback" + extensionId, PhotoshopCallbackUnique);

        function PhotoshopCallbackUnique(csEvent) {
            console.log(csEvent.toString());
            try {
                if (typeof csEvent.data === "string") {
                    var eventData = csEvent.data.replace("ver1,{", "{");
                    var eventDataObject = JSON.parse(eventData);
                    csEvent.data = eventDataObject;

                    console.log(csEvent);

                } else {
                    console.log("PhotoshopCallbackUnique expecting string for csEvent.data!");
                }
            } catch(e) {
                console.log("PhotoshopCallbackUnique catch: " + e);
            }
        }

        function toggleEventRegistering (eventStringID, isOn) {
            var event;
            if (isOn) {
                event = new CSEvent("com.adobe.PhotoshopRegisterEvent", "APPLICATION");
            } else {
                event = new CSEvent("com.adobe.PhotoshopUnRegisterEvent", "APPLICATION");
            }
            event.extensionId = extensionId;

            csInterface.evalScript("app.stringIDToTypeID('" + eventStringID + "')", function (typeID) {
                event.data = typeID;
                csInterface.dispatchEvent(event);
                console.log("Dispatched Event " + eventStringID, event);
            });
        }

        $('#make').change(function() {
            toggleEventRegistering(this.id, this.checked);
        });
        $('#duplicate').change(function() {
            toggleEventRegistering(this.id, this.checked);
        });
        $('#delete').change(function() {
            toggleEventRegistering(this.id, this.checked);
        });
        $('#close').change(function() {
            toggleEventRegistering(this.id, this.checked);
        });
    }
        
    init();

}());
    
