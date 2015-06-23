'use strict';

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        app  : 'app',
        dist : 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({
        uglify     : {
            dist      : {
                files : {
                    '<%= config.dist %>/scripts/scripts.js' : [
                        '<%= config.bootstrap %>/scripts/scripts.js'
                    ]
                }
            }
        },
        tmod       : {
            template : {
                src     : './client/modules/moduleA/views/templates/*.html',
                dest    : './client/modules/',
                options : {
                    "base"     : './client/modules/',
                    "output"   : "./dest",
                    "charset"  : "utf-8",
                    "syntax"   : "native",
                    "helpers"  : null,
                    "escape"   : true,
                    "compress" : true,
                    "type"     : "commonjs",
                    "runtime"  : "template.js",
                    "combo"    : true,
                    "minify"   : true,
                    "cache"    : false
                }
            }
        },
        karma      : {
            unit : {
                configFile : "karma.conf.js"
            }
        }
    });


    grunt.registerTask('dev',[
        'tmod',
        'browserify:moduleA',
        'uglify:moduleA'
    ]);


    grunt.registerTask('dev-watch',[
        'tmod',
        'browserify:moduleA',
        'uglify:moduleA',
        'watch'
    ]);
};