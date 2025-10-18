const express = require('express');
require('dotenv').config({ path: 'env.env' });
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.UI_SERVER_PORT || 3000;
const apiProxyTarget = process.env.API_PROXY_TARGET || 'http://localhost:4000/graphql';

app.use(express.static(path.join(__dirname, 'public')));

// Proxy for API requests
app.use('/graphql', createProxyMiddleware({
  target: apiProxyTarget,
  changeOrigin: true,
  pathRewrite: { '^/graphql': '' },
}));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));   
});

app.listen(PORT, () => {
  console.log(`EMS UI Server running at http://localhost:${PORT}`);
});