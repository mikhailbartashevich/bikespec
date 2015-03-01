module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var config = {

        path: {
            src    : 'app/public',
            tmp    : 'app/tmp'
        }

    };

    grunt.initConfig({

        config : config,
  
        watch : {

            emberTemplates: {
                files: '<%= config.path.src %>/**/*.hbs',
                tasks: ['emberTemplates']
            }

        },
    
        clean : {
            prod : {
                files : [{
                    dot : true,
                    src : [
                        '<%= config.path.tmp %>'
                    ]
                }]
            },

            dev: '<%= config.path.tmp %>'
        },

        emberTemplates : {

            options: {
                templateName: function (sourceFile) {
                    var templatePath = config.path.src + '/js/modules/';
                    return sourceFile.replace(templatePath, '');
                }
            },

            compile : {
                 files : { 
                    "<%= config.path.src %>/js/templates/templates.js": ["<%= config.path.src %>/**/*.hbs"]
                }

            }
           
        }
    });

    grunt.registerTask('default', function (target) {
        grunt.task.run([
            'emberTemplates',
            'watch'
        ]);
    });
  

};