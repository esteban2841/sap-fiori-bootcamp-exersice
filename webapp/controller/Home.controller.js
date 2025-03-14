sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/testproject/utils/HomeHelper",
    "sap/ui/model/json/JSONModel"
], (Controller, HomeHelper, JSONModel) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.testproject.controller.Home", {
        async onInit() {
            const oData = {
                recipient: {
                    products: await HomeHelper.getDataProducts()
                }
            }
            const oModel = new JSONModel(oData)
            
            this.getView().setModel(oModel, 'Products');
            
        },

        onPress: async function (){
            let getData = await HomeHelper.getDataProducts()
            console.log(getData, 'oData')
        }
    });
});