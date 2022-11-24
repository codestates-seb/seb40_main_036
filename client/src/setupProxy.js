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
      '/shelterQuestion',
      '/shelterAnswer',
    ],
    createProxyMiddleware({
      target: 'https://548c-14-39-204-244.jp.ngrok.io/',
      changeOrigin: true,
    })
  );
};
