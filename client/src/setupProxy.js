const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/question',

    createProxyMiddleware({
      target: 'https://4cc3-211-214-195-126.jp.ngrok.io',

      changeOrigin: true,
    })
  );
};
