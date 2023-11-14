const { createProxyMiddleWare } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleWare(["/api", "/ws"], {
      target: "http://52.79.132.18:8443",
      changeOrgin: true,
      ws: true,
      router: {
        "/ws": "ws://52.79.132.18:8443",
      },
    })
  );
};
