sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("megaacademy.mod2aula2.controller.Main", {
      onInit: function () {
        //let oModelLocal = new JSONModel();
        let oModelglobal = this.getOwnerComponent().getModel();
        oModelglobal.loadData("http://swapi.dev/api/people/");
        //this.getView().setModel(oModelLocal);
      },
    });
  });