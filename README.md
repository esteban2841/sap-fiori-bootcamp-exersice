## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Wed Mar 12 2025 18:10:46 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.16.5|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>SAP System (ABAP On Premise)|
|**Service URL**<br>https://services.odata.org/northwind/northwind.svc|
|**Module Name**<br>testproject|
|**Application Title**<br>Freestyle app SAPUI5|
|**Namespace**<br>com.bootcamp.sapui5|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.133.0|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## testproject

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


# sap-fiori-bootcamp-exersice

# Table exercise made

Binding model as JSONModel in the recipient['products'] in Home controller as "Products" this model contains the product info from the oData generated from Northwind api db and instanced on Home controller but throught the helper init Fn Fn and rendered in a basic Table controller accessed as /Products in the Home View