/**
 * Proxy config
 */

const PROXY_CONFIG = [
    {
        context: [
            '/users',
            '/artist',
            '/albums',
            '/data',
            '/genre'
        ],
        target: 'http://localhost:3000',
    },
    {
        context: [
            '/login'
        ],
        target: 'http://localhost:3000',
    }
].map(conf => ({
    ...conf,
    secure: false,
    changeOrigin: true
}))

module.exports = PROXY_CONFIG;
