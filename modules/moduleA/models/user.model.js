"use strict";

//var ajax = require('reqwest');

/**
 * 定义一个控制器类
 **/
function UserModel() {

}

/**
 * 控制器类添加方法
 **/


UserModel.prototype.getList = function () {

    //ajax({
    //    url     : 'api/getList',
    //    method  : 'get',
    //    data    : {},
    //    success : function (resp) {
    //    }
    //});
};

UserModel.prototype.addOne = function () {
    //ajax({
    //    url     : 'api/add',
    //    method  : 'post',
    //    data    : {},
    //    success : function (resp) {
    //    }
    //});
};


/**
 * 输出控制器类
 **/
module.exports = UserModel;