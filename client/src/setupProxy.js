const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/question',

    createProxyMiddleware({
      target: 'https://dc9b-14-39-204-244.jp.ngrok.io',

      changeOrigin: true,
    })
  );
};
