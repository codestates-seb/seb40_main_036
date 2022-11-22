const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/member', '/question', '/answer', '/stuffQuestion'],
    createProxyMiddleware({
      target: 'https://45ff-211-212-149-89.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};
