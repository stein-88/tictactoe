const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const dotenv = require('dotenv')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const manifest = require(path.join(__dirname, 'public/manifest.json'))
const SOURCE_DIR = path.join(__dirname, 'src')
const OUTPUT_DIR = path.join(__dirname, 'build')
const { env } = process
const newEnv = dotenv.config().parsed || {}
const envKeys = Object.fromEntries(Object.entries(newEnv).map(([key, val]) => [`process.env.${key}`, JSON.stringify(val)]))

const common = {
    mode: env.NODE_ENV,
    entry: {
        index: ['babel-polyfill', './src/index.jsx']
    },
    output: {
        path: OUTPUT_DIR,
        publicPath: '/',
        filename: 'scripts/bundle-[fullhash].js'
    },
    resolve: {
        extensions: ['.mjs', '.jsx', '.js'],
    },
    performance: false,
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: SOURCE_DIR,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|ico|svg|jpg|jpeg|gif|pdf|mp4)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new HtmlWebpackPlugin({
            dev: true,
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['index'],
            hash: true
        })
    ]
}

if (env.NODE_ENV === 'development') {
    module.exports = merge(common, {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: path.join(__dirname, 'src'),
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]'
                                },
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new FaviconsWebpackPlugin({
                logo: path.join(__dirname, 'public/favicon.png'),
                mode: 'light',
                manifest: manifest
            })
        ],
        devtool: 'cheap-module-source-map',
        devServer: {
            open: true,
            hot: true,
            client: {
                overlay: true
            },
            port: 4000,
            compress: true,
            historyApiFallback: true
        }
    })
} else {
    module.exports = merge(common, {
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: path.join(__dirname, 'src'),
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]'
                                },
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[fullhash]-global-styles.css',
                chunkFilename: '[id].[fullhash]-global-styles.css'
            }),
            new FaviconsWebpackPlugin({
                logo: path.join(__dirname, 'public/favicon.png'),
                mode: 'webapp',
                manifest: manifest,
                favicons: {
                    appName: 'Ragnarok',
                    appShortName: 'Ragnarok',
                    appDescription: 'Ragnarok studies',
                    developerName: 'Wanderson Santos',
                    developerURL: "https://github.com/stein-88",
                    dir: 'auto',
                    lang: 'en-US',
                    background: '#FFF',
                    theme_color: '#FFF',
                    display: "standalone",
                    appleStatusBarStyle: 'black-translucent',
                    orientation: 'portrait',
                    start_url: "/",
                    version: "1.0.0",
                    logging: false,
                    icons: {
                        android: true,
                        appleIcon: true,
                        favicons: true,
                        firefox: true,
                        windows: true
                    }
                }
            })
        ]
    })
}
