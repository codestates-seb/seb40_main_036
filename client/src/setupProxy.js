const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    [
      '/member',
      '/shelter',
      '/reservation',
      '/reservationInfo',
      '/question',
      '/answer',
      '/stuffQuestion',
      '/stuffAnswer',
    ],
    createProxyMiddleware({
      target: 'https://28d0-211-212-149-89.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};
