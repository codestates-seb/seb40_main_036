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
      target: 'https://e071-2001-e60-8798-7654-5594-c20b-6051-3258.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};
