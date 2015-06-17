"use strict";

var UserModel = require('../models/user.model');
var UserView = require('../views/templates/user');


/**
 * 定义一个控制器类
 **/
function UserController() {
    this.decimalDigits = 2;
}

/**
 * 控制器类添加方法
 **/
UserController.prototype = {

    getUsers : function () {
        console.log("getUsers ");
    },

    getUser : function () {
        console.log(" panpan ");
    },

    GetUserList : function () {

        var data = {
            title: '标签',
            list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
        };

        var html = UserView(data);

        var userModel = new UserModel();
        var list = userModel.getList();

        document.getElementById('content').innerHTML = html;
        console.log("getuset ");
    }
};


/**
 * 输出控制器类
 **/
module.exports = UserController;