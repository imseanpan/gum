'use strict';
var istanbul = require('browserify-istanbul');

module.exports = function (config) {
    config.set({
        basePath         : '',
        frameworks       : ['browserify','jasmine'],
        files            : [
            { pattern: './client/test/moduleA/*.js', included: true, watched: true },
            ],
        exclude          : [],
        preprocessors    : {
            './client/test/moduleA/*.js' : ['browserify'],
        },
        reporters        : ['coverage','progress'],
        port             : 9876,
        colors           : true,
        logLevel         : config.LOG_INFO,
        autoWatch        : false,
        browsers         : ['PhantomJS'],
        browserify       : {
            debug     : true,
            transform : [istanbul({
                ignore: ['./client/test/moduleA/*.js']
            })]
        },
        plugins          : [
            'karma-phantomjs-launcher',
            'karma-jasmine','karma-bro','karma-coverage'],
        singleRun        : false,
        coverageReporter : {
            type : 'html',
            dir  : 'coverage/'
        }
    });
};
