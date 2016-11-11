const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

var paths = {
        'jquery': './bower_components/jquery/',
        'bower': './bower_components/',
        'target': elixir.config.publicPath + '/'
}

elixir.config.versioning.buildFolder = './';

elixir((mix) => {
    mix.sass('app.scss')
        .webpack('app.js');

    mix.copy(paths.bower + 'bootstrap/dist/fonts/**', paths.target + 'fonts');
    mix.copy(paths.bower + 'font-awesome/fonts/**', paths.target + 'fonts');

    mix.styles([
        paths.bower + 'bootstrap/dist/css/bootstrap.min.css',
        paths.bower + 'bootstrap-social/bootstrap-social.css',
        paths.bower + 'metisMenu/dist/metisMenu.min.css',
        paths.bower + 'startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
        paths.bower + 'font-awesome/css/font-awesome.min.css',
        paths.bower + 'datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css',
        paths.bower + 'datatables-responsive/css/dataTables.responsive.css',
        paths.bower + 'morrisjs/morris.css'
   ], paths.target + 'css/admin.css', './');

    mix.scripts([
        paths.bower + 'jquery/dist/jquery.min.js',
        paths.bower + 'bootstrap/dist/js/bootstrap.min.js',
        paths.bower + 'metisMenu/dist/metisMenu.js',
        paths.bower + 'startbootstrap-sb-admin-2/dist/js/sb-admin-2.js',
        paths.bower + 'raphael/raphael.min.js',
        paths.bower + 'datatables/media/js/jquery.dataTables.min.js',
        paths.bower + 'datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js',
        paths.bower + 'datatables-responsive/js/dataTables.responsive.js',
        paths.bower + 'morrisjs/morris.min.js',
        paths.bower + 'flot/excanvas.min.js',
        paths.bower + 'flot/jquery.flot.js',
        paths.bower + 'flot/jquery.flot.pie.js',
        paths.bower + 'flot/jquery.flot.resize.js',
        paths.bower + 'flot/jquery.flot.time.js',
        paths.bower + 'flot.tooltip/js/jquery.flot.tooltip.min.js',
    ], paths.target + 'js/admin.js', './');

    mix.version([
        paths.target + 'css/admin.css',
        paths.target + 'js/admin.js'
    ])
});