sap.ui.define([
    "com/bootcamp/sapui5/testproject/utils/HomeService",
    "sap/ui/model/json/JSONModel",
    "com/bootcamp/sapui5/testproject/utils/HomeHelper",
], function (HomeService, JSONModel){
    "use strict"

    return {
		init: async function (oNorthwindModel) {
			this._oNorthwindModel = oNorthwindModel;

		},

        setInitModelLocal: async function (oComponent){
            const oFilters = []
            const products = await HomeService.readProducts(this._oNorthwindModel, oFilters)
            oComponent.setModel(new JSONModel({
                selectedKey: "",
                valueInput: "",
                multiFilter: [],
                products: products[0].results
            }), "LocalDataModel")

            const data = oComponent.getModel('LocalDataModel').getData()
            return data
            
        },

		getProposalBystatus: async function(oFilters) {
            //let oFilters = [];
            return HomeService.readProducts(this._oNorthwindModel, oFilters);
        },

        getDataProducts: async function (oFilters){
            console.log(oFilters, 'filtros in fn')
            // let oFilters = [];
            return await HomeService.readProducts(this._oNorthwindModel, oFilters)
        },

        setProductModel: async function (oController, oDatos, ModelName) {
            let oListModel = oController.getOwnerComponent().getModel(ModelName);
            if(!oListModel){
                const oModel  = new JSONModel([]);
                oModel.setSizeLimit(1000000);	
                oController.getOwnerComponent().setModel(oModel, ModelName);  
                oListModel = oController.getOwnerComponent().getModel(ModelName);
            }

            oListModel.setData(oDatos);
        },

    }
}

)