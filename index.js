const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const cors = require('cors');
const app = express();

app.use(cors());

const apiProxy = createProxyMiddleware({
    target: 'https://cuutruyent9sv7.xyz',
    changeOrigin: true,
    pathRewrite: {
        
    },
});

// Use the proxy middleware
app.use('', apiProxy);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});

module.exports = app;
