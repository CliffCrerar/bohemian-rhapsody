/**
 * Proxy config
 */

const PROXY_CONFIG = [
    {
        context: [
            '/api/*'
        ],
        target: 'http://localhost:3000',
    },
    {
        context: [
            '/',
            'login'
        ],
        target: 'http://localhost:3000',
    }
].map(conf => ({
    ...conf,
    secure: false,
    pathRewrite: { '^/api/*': '/*' },
    changeOrigin: true
}))

module.exports = PROXY_CONFIG;
