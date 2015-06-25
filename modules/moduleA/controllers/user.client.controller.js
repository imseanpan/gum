"use strict";

var UserModel = require('../models/user.model');
var UserView  = require('../views/templates/user');


/**
 * 定义一个控制器类
 **/
function UserController() {

    this.decimalDigits = 2;

    this.doAlert = function () {
        alert(1);
    };
}
function aa() {
    console.log("bb");
}
/**
 * 控制器类添加方法
 **/
UserController.prototype = {

    getUsers : function () {
        this.doAlert();

        console.log("getUsers ");
    },

    getUser : function (req,res) {
        console.log( this.decimalDigits);
        console.log(" panpan ");
    },

    GetUserList : function () {

        var data = {
            title : '标签',
            list  : ['文艺','博客','摄影','电影','民谣','旅行','吉他']
        };

        var html = UserView(data);

        var userModel = new UserModel();
        var list      = userModel.getList();

        document.getElementById('content').innerHTML = html;
        console.log("getuset ");
    },
    UserOne : function () {

        var and1 = document.getElementById('animation1');
        var and2 = document.getElementById('animation2');

        and1.className ='animation1 ';
        and2.className ='animation2 noShow';

        console.log("UserOne");
    },
    UserTwo: function () {
        //document.getElementById('content').innerHTML = html;

        var and1 = document.getElementById('animation1');
        var and2 = document.getElementById('animation2');

        and1.className ='animation1 noShow';
        and2.className ='animation2';

        console.log("UserTwo");
    }
};


/**
 * 输出控制器类
 **/
module.exports = UserController;