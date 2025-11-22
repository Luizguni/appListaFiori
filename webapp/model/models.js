sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/Device"],
  /**
   *
   * @param {typeof sap.ui.model.JSONModel} JSONModel
   * @param {typeof sap.ui.Device} Device
   *
   * @returns  {Function} createDeviceModel()
   */
  function (JSONModel, Device) {
    "use strict";

    return {
      /* cria um modelo JSON com informações do dispositivo */
      createDeviceModel: function () {
        var oModel = new JSONModel(Device); /* carrega dados do objeto Device */
        oModel.setDefaultBindingMode(
          "OneWay"
        ); /* impede alterações vindas da interface */
        return oModel; /* retorna o modelo configurado */
      },
    };
  }
);
