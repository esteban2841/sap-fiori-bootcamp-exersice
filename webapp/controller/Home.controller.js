sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/testproject/utils/HomeHelper",

], (Controller, HomeHelper) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.testproject.controller.Home", {
        onInit() {            
        },

        onPress: async function (){
            let getData = await HomeHelper.getDataProducts()
            console.log(getData, 'oData')
        }
    });
});