requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'jquery-ui': '../lib/bower_components/jquery-ui/jquery-ui.min',
    'q': '../lib/bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
        exports: 'Firebase'
    }
  }
});

["favorites"], 
function (favorites) {
