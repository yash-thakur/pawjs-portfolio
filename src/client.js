import "./resources/css/style.scss";

export default class Client {
  loadWebFonts() {
    const WebFont = require("webfontloader");
    WebFont.load({
      google: {
        families: [
          "Open Sans:400,300,600,300italic,400italic,600italic,700,700italic,800,800italic",
          "Raleway:400,300,600,300italic,400italic,600italic,700,700italic,800,800italic"
        ]
      }
    });
  }
  apply(clientHandler) {
    clientHandler.hooks.beforeRender.tapPromise("AddWebFonts", async (app) => {
      this.loadWebFonts();
    });
  }
}
