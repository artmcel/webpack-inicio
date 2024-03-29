const path = require('path');
const glob = require('glob');
const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const PurgecssPlugin = require('purgecss-webpack-plugin')
// deprecate for wp5 const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// dev mode to load css, extract-css plugin and style-loader NEVER together...
//const webpack = require("webpack");
//const devMode = process.env.NODE_ENV !== "production";

/**
 * load plugins as a array
 */

const PATHS = {
  src: path.join(__dirname, 'src')
}


const plugins = [
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
        chunks : ['index']
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
];

/*
if(devMode) {
    // only enable hot in development
    plugins.push(new webpack.HotModuleReplacementPlugin());
}
*/


module.exports = {
    plugins,
    entry : {

        index: './src/index.js',

    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false 
                        }
                    }
                ]
            },
            {
                test : /\.(png|svg|jpe?g|gif|ico)$/,
                type : 'asset/resource',
                generator : {
                    filename : 'assets/img/[name][ext]'
                }

            }
            
        ]
    },
    output: {
        filename: '[name][contenthash].min.js',
        clean : true
    }   
    
    
    
    
}