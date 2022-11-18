const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    [
      '/member',
      '/shelter',
      '/reservation',
      '/reservationIfo',
      '/question',
      '/answer',
      '/stuffQuestion',
      '/stuffAnswer',
    ],
    createProxyMiddleware({
      target: 'https://67c1-211-214-195-126.jp.ngrok.io/',
      changeOrigin: true,
      headers: {
        'ngrok-skip-browser-warning': 'skip',
      },
    })
  );
};
