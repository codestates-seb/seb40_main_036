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
<<<<<<< HEAD
      target: 'https://51a0-14-39-204-244.jp.ngrok.io/',
=======
      target: 'https://8a56-14-39-204-244.jp.ngrok.io',
>>>>>>> 1003b7033617d90f3879923832594417693c8967

      changeOrigin: true,
    })
  );
};
