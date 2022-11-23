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
      target:
        'http://c2-43-201-38-207.ap-northeast-2.compute.amazonaws.com:8080/',
      changeOrigin: true,
    })
  );
};
