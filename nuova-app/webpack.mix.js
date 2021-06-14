let mix = require('laravel-mix');

// .js(src, output)

mix.js('src/js/app.js', 'js')
.sass('src/css/app.scss', 'css')
.setPublicPath('dist');