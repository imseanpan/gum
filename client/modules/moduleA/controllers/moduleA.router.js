"use strict";

var UserController = require('./user.client.controller');

/**
 * 定义一个控制器类
 **/
function moduleARouter() {

}

/**
 * 控制器类添加方法
 **/
moduleARouter.prototype = {
    getUser : function () {
        var a = new UserController();
        a.getUser();
    }
};

/**
 * 输出控制器类
 **/
module.exports = moduleARouter;
