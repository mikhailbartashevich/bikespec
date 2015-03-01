'use strict';

define({

    baseUrl : '/js',

    paths : {

        'jquery'                    : 'libs/jquery/dist/jquery',
        'bootstrap'                 : 'libs/bootstrap/dist/js/bootstrap',
        'ember'                     : 'libs/ember/ember',
        'ember_template_compiler'   : 'libs/ember/ember-template-compiler',
        'ember_data'                : 'libs/ember-data/ember-data',
        'text'                      : 'libs/requirejs-text/text',
        'handlebars'                : 'libs/handlebars/handlebars'

    },

    shim : {

        'bootstrap':  {
            deps: ['jquery'],
            exports: 'bootstrap'
        },

        'ember':  {
            deps: ['jquery', 'handlebars', 'ember_template_compiler'],
            exports: 'Ember'
        },

        'ember_data':  {
            deps: ['ember'],
            exports: 'DS'
        }

    }

});





