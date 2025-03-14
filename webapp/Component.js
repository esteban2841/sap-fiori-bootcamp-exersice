sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/bootcamp/sapui5/testproject/model/models",
    "com/bootcamp/sapui5/testproject/utils/HomeHelper"
], (UIComponent, models, HomeHelper) => {
    "use strict";

    return UIComponent.extend("com.bootcamp.sapui5.testproject.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

            // use to instance the main  inside the HomeHelper library
            this.setInitModel()
        },

        setInitModel: function (){
            HomeHelper.init(this.getModel())
        }
    });
});