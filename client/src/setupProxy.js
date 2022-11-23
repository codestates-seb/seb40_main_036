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
        'http://ec2-15-164-100-229.ap-northeast-2.compute.amazonaws.com:8080/',
      changeOrigin: true,
    })
  );
};
