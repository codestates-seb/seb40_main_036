const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/question',

    createProxyMiddleware({
      target: 'https://4c4c-14-39-204-244.jp.ngrok.io',

      changeOrigin: true,
    })
  );
  app.use(
    '/answer',

    createProxyMiddleware({
      target: 'https://4c4c-14-39-204-244.jp.ngrok.io',

      changeOrigin: true,
    })
  );
};
