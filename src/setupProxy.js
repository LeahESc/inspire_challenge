// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        "/api/v1/parks?limit=510&api_key=hREloscdhIwvolviZMmxmhnpRlnuIEqOb3XvBuRI", 
        createProxyMiddleware({ 
            target: "https://developer.nps.gov",
            changeOrigin: true
        })
    )

}