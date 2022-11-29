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
      target:
        'http://ec2-43-201-83-32.ap-northeast-2.compute.amazonaws.com:8080',

      changeOrigin: true,
    })
  );
};
