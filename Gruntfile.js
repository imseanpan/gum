'use strict';

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        app                   : 'app',
        dist                  : 'dist',
        'gum-ui-css-distPath' : 'gum-ui-sass/dist/'

    };

    // Define the configuration for all the tasks
    grunt.initConfig({
        banner     : '/*!\n' +
        ' * =====================================================\n' +
        ' * Gum UI \n' +
        ' * Basic on ratchet & mui\n' +
        ' * Licensed MIT\n' +
        ' *\n' +
        ' * Designed by Sean Pan.\n' +
        ' * =====================================================\n' +
        ' */\n',
        uglify     : {
            dist        : {
                files : {
                    './client/modules/*/*.min.js' : [
                        './client/modules/*/*.js'
                    ]
                }
            },
            fastClick   : {
                files : {
                    'bower_components/fastclick/lib/fastclick.min.js' : [
                        'bower_components/fastclick/lib/fastclick.js'
                    ]
                }
            },
            moduleA     : {
                files : {
                    './client/modules/moduleA/bb.min.js' : [
                        './client/modules/moduleA/bb.js'
                    ]
                }
            },
            integration : {
                files : {
                    './client/modules/integration/integ.min.js' : [
                        './client/modules/integration/integ.js'
                    ]
                }
            },
            policy      : {
                files : {
                    './wechat/modules/policy/policy.min.js' : [
                        './wechat/modules/policy/policy.js'
                    ]
                }

            }
        },
        tmod       : {
            gum_ui   : {
                src     : './gum.ui/alerts/*.html',
                dest    : './gum.ui/alerts/',
                options : {
                    "base"     : './gum.ui/alerts/',
                    "output"   : "./gum.ui/alerts/",
                    "charset"  : "utf-8",
                    "syntax"   : "native",
                    "helpers"  : null,
                    "escape"   : true,
                    "compress" : true,
                    "type"     : "commonjs",
                    "runtime"  : "template.js",
                    "combo"    : true,
                    "minify"   : true,
                    "cache"    : false,
                    "alias"    : 'template'
                }
            },
            template : {
                src     : './client/modules/*/views/templates/*.html',
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
                    "cache"    : false,
                    "alias"    : 'template'
                }
            },
            ui       : {
                src     : './gum.ui/**/*.html',
                dest    : './gum.ui/dest/',
                options : {
                    "base"     : './gum.ui',
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
                    "cache"    : false,
                    "alias"    : 'template'
                }
            }
        },
        browserify : {
            options     : {
                browserifyOptions : {
                    debug : false
                }
            },
            wechatSDK   : {
                files   : {
                    './gum.ui/wechatSDK/wechatSDK.js' : ['./gum.ui/wechatSDK/wechat.js']
                },
                options : {
                    browserifyOptions : {
                        standalone : 'wechatSDK'
                    }
                }
            },
            dist        : {
                files : {
                    './client/modules/*/module.js' : ['./client/modules/*/module.main.js']
                }
            },
            moduleA     : {
                files : {
                    './client/modules/moduleA/bb.js' : ['./client/modules/moduleA/moduleA.main.js']
                }
            },
            integration : {
                files   : {
                    './client/modules/integration/integ.js' : [
                        './client/modules/integration/integration.main.js'
                    ]
                },
                options : {
                    browserifyOptions : {
                        standalone : 'yamaha'
                    }
                }
            },policy    : {
                files : {
                    './wechat/modules/policy/policy.js' : [
                        './wechat/modules/policy/policy.main.js'
                    ]
                }
            },
            tests       : {
                files : {
                    './client/modules/moduleA/bb.js' : ['./client/modules/moduleA/moduleA.main.js']
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
        sass       : {
            options : {
                banner       : '<%= banner %>',
                style        : 'expanded',
                unixNewlines : true
            },
            dist    : {
                files : {
                    'gum.ui.sass/dist/css/gum.css' : 'gum.ui.sass/gum.scss'
                }
            }
        },
        cssmin     : {
            target : {
                files : [{
                    expand : true,
                    cwd    : 'gum.ui.sass',
                    src    : ['gum.css','!*.min.css'],
                    dest   : 'gum.ui.sass/dist/css',
                    ext    : '.min.css'
                }]
            },
            dist   : {
                files : [{
                    expand : true,
                    cwd    : 'wechat/modules/insurance/css/',
                    src    : ['*.css','!*.min.css'],
                    dest   : 'wechat/modules/insurance/css/',
                    ext    : '.min.css'
                },{
                    expand : true,
                    cwd    : 'wechat/modules/policy/css',
                    src    : ['*.css','!*.min.css'],
                    dest   : 'wechat/modules/policy/css',
                    ext    : '.min.css'
                }]
            }
        },
        jsdoc      : {
            scr     : ['client/*/*.js'],
            options : {
                destination : 'doc'
            }
        },
        imagemin   : {
            dist : {
                files : [{
                    expand : true,
                    cwd    : "public/images/",
                    src    : ["**/*.{jpg,png,gif}"],
                    dest   : "images/"
                }]
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
                files : [
                    './client/modules/moduleA/{,*/}*.js',
                    '!./client/modules/moduleA/bb.js',
                    '!./client/modules/moduleA/bb.min.js'],
                tasks : ['browserify:moduleA']
            },
            jsmin    : {
                files : './client/modules/moduleA/bb.js',
                tasks : ['uglify:moduleA']
            }
        }
    });

    grunt.registerTask('integration',[
        'cssmin',
        'tmod',
        'browserify:integration',
        'uglify:integration'
    ]);
    grunt.registerTask('policy',[
        'tmod',
        'browserify:policy',
        'uglify:policy'
    ]);
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


};