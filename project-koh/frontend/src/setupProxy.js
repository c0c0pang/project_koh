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
<<<<<<< HEAD
=======
>>>>>>> 809816b7 (feat: 개인 정보 post 요청 기능 구현)
        ),
        app.use('/user',
            createProxyMiddleware(
                {
                    target: "http://127.0.0.1:8000",
                    changeOrigin: true,
                }
            )

<<<<<<< HEAD
=======
>>>>>>> 039a4455 (fix: api post 요청 충돌 해결)
=======
>>>>>>> 809816b7 (feat: 개인 정보 post 요청 기능 구현)
        )

};