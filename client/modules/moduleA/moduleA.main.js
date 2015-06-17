'use strict';

var domReady       = require('domready'),
    Director       = require('director'),
    //_              = require('lodash/array/chunk'),
    JobController  = require('./controllers/job.client.controller'),
    UserController = require('./controllers/user.client.controller');
var lodash = require('lodash');
/**
 * 函数模块的主入口
 */
domReady(function () {

    // 定义控制器敲不死
    var jobC = new JobController();

    // 定义控制器用户
    var userC = new UserController();

    // 定义路由参数
    var routes = {
        '/user'       : userC.getUser,
        '/jobs'       : jobC.getYourJob,
        '/jobs/j/:id' : jobC.getJobs,
        '/jobs/:user' : jobC.getWeJob,
        '/userlist'   : userC.GetUserList
    };

    // 定义前端路由器
    var router = new Director.Router(routes);

    // 初始化
    router.init();
});
