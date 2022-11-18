const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/member',
    createProxyMiddleware({
      target: 'https://4982-14-39-204-244.jp.ngrok.io',

      changeOrigin: true,
    })
  );
  app.use(
    '/question',
    createProxyMiddleware({
      target: 'https://4982-14-39-204-244.jp.ngrok.io',

      changeOrigin: true,
    })
  );
  app.use(
    '/answer',
    createProxyMiddleware({
      target: 'https://4982-14-39-204-244.jp.ngrok.io',

      changeOrigin: true,
    })
  );
};
