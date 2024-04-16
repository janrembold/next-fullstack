/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')
const path = require('path')

const nextConfig = {
    //   trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'styles')],
    },
    reactStrictMode: true,
}

module.exports = nextTranslate(nextConfig)
