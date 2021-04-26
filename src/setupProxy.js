// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        "/api/fruit/all", 
        createProxyMiddleware({ 
            target: "https://www.fruityvice.com",
            secure: false,
            changeOrigin: true
        })
    )
}


module.exports = function(app) {
    app.use(
        "/api/json/v1/1/", 
        createProxyMiddleware({ 
            target: "https://www.thecocktaildb.com",
            secure: false,
            changeOrigin: true
        })
    )
}