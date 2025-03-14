sap.ui.define([
    "com/bootcamp/sapui5/testproject/utils/HomeService",
    "sap/ui/model/json/JSONModel"
], function (HomeService, JSONModel){
    "use strict"

    return {
        init: async function(oNorthwindModel){
            this._oNorthwindModel = oNorthwindModel
            const oData = {
                recipient: {
                    products: await HomeHelper.getDataProducts()
                }
            }
            const oModel = new JSONModel(oData)
            
            this.getView().setModel(oModel, 'Products');
        },

        getDataProducts: async function (){
            let oFilters = [];
            return HomeService.readProducts(this._oNorthwindModel, oFilters)
        }

    }
}

)