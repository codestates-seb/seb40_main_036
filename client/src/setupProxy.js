const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/question',

    createProxyMiddleware({
      target: 'https://67c1-211-214-195-126.jp.ngrok.io',

      changeOrigin: true,
    })
  );
  app.use(
    '/answer',

    createProxyMiddleware({
      target: 'https://67c1-211-214-195-126.jp.ngrok.io',

      changeOrigin: true,
    })
  );
};
