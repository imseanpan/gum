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
            },
            fastClick : {
                files : {
                    'bower_components/fastclick/lib/fastclick.min.js' : [
                        'bower_components/fastclick/lib/fastclick.js'
                    ]
                }
            },
            moduleA   : {
                files : {
                    './client/modules/moduleA/bb.min.js' : [
                        './client/modules/moduleA/bb.js'
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
        browserify : {
            dist    : {
                files : {
                    './client/modules/moduleA/bb.js' : ['./client/modules/moduleA/moduleA.main.js']
                }
            },
            moduleA : {
                files : {
                    './client/modules/moduleA/bb.js' : ['./client/modules/moduleA/moduleA.main.js']
                }
            },
            tests   : {
                files   : {
                    './client/modules/moduleA/bb.js' : ['./client/modules/moduleA/moduleA.main.js']
                },
                options : {
                    bundleOptions : {
                        debug : true
                    }
                }
                //src: [ './client/modules/moduleA/bb.js' ],
                //dest: './client/modules/moduleA/bb_tests.js',
                //options: {
                //    external: [ './moduleA.js' ],
                //    // Embed source map for tests
                //    debug: true
                //}
            }
        },
        karma      : {
            unit : {
                configFile : "karma.conf.js"
            }
        },
        watch      : {
            template : {
                files   : './client/modules/moduleA/views/templates/*.html',
                tasks   : ['tmod'],
                options : {
                    spawn : false
                }
            },
            build    : {
                files : './client/modules/moduleA/{,*/}*.js',
                tasks : ['browserify:moduleA']
            },
            jsmin    : {
                files : './client/modules/moduleA/bb.js',
                tasks : ['uglify:moduleA']
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

    //grunt.registerTask('fastClick',[
    //    'uglify:fastClick'
    //]);
    //
    //grunt.registerTask('fastClick',[
    //    'uglify:fastClick'
    //]);
    //grunt.registerTask('bb',[
    //    'uglify:bb'
    //]);

    //cssmin     : {
    //    dist  : {
    //        files : {
    //            '<%= config.dist %>/styles/main.css' : [
    //                '.tmp/styles/{,*/}*.css',
    //                '<%= config.app %>/styles/{,*/}*.css'
    //            ]
    //        }
    //    },
    //    sweet : {
    //        files : {
    //            './views/alert/alert.min.css' : [
    //                './views/alert/alert.min.css'
    //            ]
    //        }
    //    }
    //
    //},
    //grunt.registerTask('alertcss',[
    //    'cssmin:sweet'
    //]);


}