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
      '/api',
    ],
    createProxyMiddleware({
      target: 'https://7c8d-14-39-204-244.jp.ngrok.io/',

      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // URL ^/api -> 공백 변경
      },
    })
  );
};
