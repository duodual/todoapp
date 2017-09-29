let mix = require('laravel-mix');
const webpack = require('webpack');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    plugins: [
        // loading jquery as global dependency
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery', // loading because some library is looking for window.jQuery to see if defined

        })
    ]
})
.js('resources/assets/js/app.js', 'public/js')
.sass('resources/assets/sass/app.scss', 'public/css')
.copy('node_modules/semantic-ui-css/semantic.min.css','public/css/semantic.min.css')
.copy('node_modules/semantic-ui-css/semantic.min.js','public/js/semantic.min.js')


