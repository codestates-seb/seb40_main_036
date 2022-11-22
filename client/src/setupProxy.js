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
      target: 'https://9fbd-211-214-195-126.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};
