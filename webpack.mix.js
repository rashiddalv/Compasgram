const mix = require('laravel-mix');

mix.js('back/resources/js/app.js', 'public/js')
   .react() 
   .sass('back/resources/sass/app.scss', 'public/css');