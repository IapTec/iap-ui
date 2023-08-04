/** @type {import('next').NextConfig} */

const path = require('path')
const Dotenv = require('dotenv-webpack')
const withImages = require('next-images')

const imagesConfig = {
    images: { disableStaticImages: true }
}

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })

        config.plugins.push(
            new Dotenv({
                path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
                systemvars: true
            })
        )

        return config
    }
}

module.exports = withImages({
    ...imagesConfig,
    ...nextConfig
})
