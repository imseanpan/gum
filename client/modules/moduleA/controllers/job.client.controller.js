"use strict";

/**
 * 定义一个控制器类
 **/
function JobController() {

}

/**
 * 控制器类添加方法
 **/
JobController.prototype = {
    getJobs    : function (bookId) {
        console.log("Jobs id is: " + bookId);

        if (bookId === 123) {
            return '哈哈';
        }
        return bookId;
    },
    getYourJob : function () {

        console.log("FFFF ");
    },
    getWeJob   : function (hehe) {
        console.log(hehe);

        if (hehe === 123) {
            return '哈哈';
        } else {
            hehe = "嘿嘿";
        }
        return hehe;
    }
};

/**
 * 输出控制器类
 **/
module.exports = JobController;
