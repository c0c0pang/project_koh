const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
module.exports = (app) => {
    app.use('/get',
        createProxyMiddleware(
            {
                target: "http://127.0.0.1:8000",
                changeOrigin: true,
            }
        )
    ),
        app.use('/api',
            createProxyMiddleware(
                {
                    target: "http://127.0.0.1:8000",
                    changeOrigin: true,
                }
            )

<<<<<<< HEAD
        ),
        app.use('/user',
            createProxyMiddleware(
                {
                    target: "http://127.0.0.1:8000",
                    changeOrigin: true,
                }
            )

=======
>>>>>>> 039a4455 (fix: api post 요청 충돌 해결)
        )

};