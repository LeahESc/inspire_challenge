// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        "/api/v1/parks?limit=510&api_key=hREloscdhIwvolviZMmxmhnpRlnuIEqOb3XvBu", 
        createProxyMiddleware({ 
            target: "https://developer.nps.gov",
            secure: false,
            changeOrigin: true
        })
    )

    app.use(
        "/api/json/v1/1/", 
        createProxyMiddleware({ 
            target: "https://www.thecocktaildb.com",
            secure: false,
            changeOrigin: true
        })
    )
}