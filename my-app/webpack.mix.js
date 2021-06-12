
let mix = require('laravel-mix');

// .js(src, output)

mix.js('src/js/file.js', 'js')
.sass('src/css/file.scss', 'css')
.setPublicPath('dist');