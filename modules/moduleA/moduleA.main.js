'use strict';

var domReady       = require('domready'),
    //Director       = require('director'),
    JobController  = require('./controllers/job.client.controller'),
    UserController = require('./controllers/user.client.controller'),
    //Router = require('./controllers/moduleA.router'),
    Router        = require('router/router'),
    tipq           = require('common/toast');

/**
 * 函数模块的主入口
 */
domReady(function () {

    // 定义控制器敲不死
    var jobC = new JobController();

    // 定义控制器用户
    var userC = new UserController();
    //var low = new Router();
    var tips = new tipq();

    //// 定义路由参数
    //var routes = {
    //    '/user'       : userC.getUser.bind(userC),
    //    '/jobs'       : jobC.getYourJob,
    //    '/jobs/j/:id' : jobC.getJobs,
    //    '/jobs/:user' : jobC.getWeJob,
    //    '/userlist'   : userC.GetUserList.bind(userC)
    //};
    //
    //// 定义前端路由器
    //var router = new Director.Router(routes);
    //
    //// 初始化
    //router.init();

    var router = new Router();

    router
        .add('/user/',userC.getUser.bind(userC))
        .add('/jobs/',jobC.getYourJob)
        .add('/jobs/j/:id/',jobC.getJobs)
        .add('/jobs/:user',jobC.getWeJob)
        .add('/userlist/',userC.GetUserList);

    router.add('/animation1',userC.UserOne);

    router.add('/animation2',userC.UserTwo);

    router.listen();
    router.navigate('/jobs/miehehe');
    // configuration
    //router.config({mode : 'hash'});
    //
    //router.navigate();
    //


    // forwarding
    //router.navigate('/user');

});
