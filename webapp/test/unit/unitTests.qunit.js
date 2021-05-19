/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/btp/sapui5extension/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});