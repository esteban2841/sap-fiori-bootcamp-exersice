/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"combootcampsapui5/testproject/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});