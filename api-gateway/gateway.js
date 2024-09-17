const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Proxy for Service 1
app.use('/service1', createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: { '^/service1': '/service1' }
}));

// Proxy for Service 2
app.use('/service2', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: { '^/service2': '/service2' }
}));

const port = 4000;
app.listen(port, () => {
    console.log(`API Gateway running on http://localhost:${port}`);
});
