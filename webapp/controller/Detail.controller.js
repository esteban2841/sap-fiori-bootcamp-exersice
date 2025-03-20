sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/testproject/utils/HomeHelper",
    "com/bootcamp/sapui5/testproject/utils/HomeService",
], (Controller, HomeHelper, HomeService) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.testproject.controller.Detail", {
        onInit: function () {
            let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },
   
        _onObjectMatched: function (oEvent) {
            // Obtener el ProductID de la URL y enlazar el contexto
            let sProductID = oEvent.getParameter("arguments").ProductID;

            console.log(sProductID, ' Product id in detail')
            this.getView().bindElement({
                path: "/Products(" + sProductID + ")",
                parameters: {
                    expand: "Order_Details"
                }
            });
        },
    });
});