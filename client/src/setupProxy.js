const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/user', '/question', '/answer'],
    createProxyMiddleware({
      target: 'https://ef7d-211-214-195-126.jp.ngrok.io/',
      changeOrigin: true,
      headers: {
        'ngrok-skip-browser-warning': 'skip',
      },
    })
  );
};
