sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/testproject/utils/HomeHelper",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter"

], (Controller, HomeHelper, FilterOperator, Filter) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.testproject.controller.Home", {
        onInit() {    
            this.oRouter = this.getOwnerComponent().getRouter()
        },

        getModelData(modelName){
            console.log(modelName, 'Modelo name')
            let values =  this.getOwnerComponent().getModel(modelName).getData()
            console.log(values, 'Modelo local en home controller')
        },
        
        onPress: async function (){
            
            let oFilter = [];
            // let sValue = this.byId("inputID").getValue();
            // let sValueCombo = this.byId("comboboxID").getSelectedKey();

            let values = this.getOwnerComponent().getModel("LocalDataModel").getData()

            // if (sValue) {
            if (values.valueInput) {
                //oFilter.push(new Filter("ProductID", FilterOperator.EQ, sValue));
                oFilter.push(new Filter("ProductID", FilterOperator.EQ, values.valueInput));
            }

            //if (sValueCombo) {
            if (values.selectedKey) {
                //oFilter.push(new Filter("CategoryID", FilterOperator.EQ, sValueCombo));
                oFilter.push(new Filter("CategoryID", FilterOperator.EQ, values.selectedKey));
            }
            
            let oDatos = await HomeHelper.getDataProducts(oFilter);
            
            let CurrentState = this.getOwnerComponent().getModel('LocalDataModel').getData()
            
            CurrentState.products = oDatos[0].results
            
            await HomeHelper.setProductModel(this, CurrentState, "LocalDataModel");
        },
        
        onItemPressRedirect: function(oEvent){
            let oSource = oEvent.getSource();
            console.log(oSource, 'sourcer')
            let oDatos = oSource.getBindingContext("ProductCollection").getObject();
            console.log(oDatos, 'datica')
            this.oRouter.navTo("detail", {
                ProductID: oDatos.ProductID
            });
        },
        
        onSelectionChange: async function (oEvent) {
            const filters = []
            const model = this.getOwnerComponent().getModel("LocalDataModel").getData()
            if (model.multiFilter.length) {
                //oFilter.push(new Filter("CategoryID", FilterOperator.EQ, sValueCombo));
                model.multiFilter.forEach(categoryId=>{
                    filters.push(new Filter("CategoryID", FilterOperator.EQ, categoryId));
                })
            }
            const data = await HomeHelper.getDataProducts(filters)
            console.log(data, 'multiinput on selection FILTERED DATA')
            model.products = data[0].results
            await HomeHelper.setProductModel(this, model, "LocalDataModel");
            
        },
        onFinishChange: async function (oEvent) {
            const filters = []
            const model = this.getOwnerComponent().getModel("LocalDataModel").getData()
            if (model.multiFilter.length) {
                //oFilter.push(new Filter("CategoryID", FilterOperator.EQ, sValueCombo));
                model.multiFilter.forEach(categoryId=>{
                    filters.push(new Filter("CategoryID", FilterOperator.EQ, categoryId));
                })
            }
            const data = await HomeHelper.getDataProducts(filters)
            console.log(data, 'multiinput on selection FILTERED DATA END')
            model.products = data[0].results
            await HomeHelper.setProductModel(this, model, "LocalDataModel");
        },

        onChange: async function (oEvent){
            let oFliter = []
            let oSource = oEvent.getSource()
            let oTable = this.getView().byId("idProductsTable")
            let oBinding = oTable.getBinding("items")

            if(oSource.getValue()){
                oFliter = new sap.ui.model.Filter("ProductID", sap.ui.model.FilterOperator.EQ, oSource.getValue())
            }
            
            oBinding.Filter(oFliter)
        }
    });
});