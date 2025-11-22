sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "megaacademy/mod2aula2/model/models",
  ],
  function (UIComponent, device, models) {
    "use strict";

    return UIComponent.extend("megaacademy.mod2aula2.Component", {
      metadata: {
        manifest: "json", // informa que o manifest.json será usado
        interfaces: [
          "sap.ui.core.IAsyncContentCreation", // ativa criação assíncrona de conteúdo
        ],
      },

      /**
       * Método de inicialização do componente
       * @public
       * @override
       */

      init: function () {
        // executa a inicialização padrão do UIComponent
        UIComponent.prototype.init.apply(this, arguments);

        // inicia o roteamento configurado no manifest.json
        this.getRouter().initialize();

        // cria e registra o modelo de dispositivo para ajustar comportamentos por tipo de tela
        this.setModel(models.createDeviceModel(), "device");
        this.setModel(models.createDeviceModel()); //Model global
      },
    });
  }
);
