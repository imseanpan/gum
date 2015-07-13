"use strict";

/**
 * 自动消失提示框
 * @constructor
 */
function Toast() {

}

Toast.prototype = {
    /**
     * 自动消失提示框
     * @function
     * @name showToast
     * @param {string} message - 提示框文字内容
     * @param {int} timeout - 关闭时间毫秒,选填默认2000
     */
    showToast : function (/* message, timeout */) {

        // 定义提示信息
        var message = arguments[0];

        // 定义延迟时间
        var timeOut = (arguments.length === 2) ? arguments[1] : 2000;

        // 定义一个提示框div
        var toast = document.createElement('div');

        // 定义css
        toast.classList.add('toast-container');

        // 添加文字信息
        toast.innerHTML = '<div class="' + 'toast-message' + '">' + message + '</div>';

        // 添加到窗体内
        document.body.appendChild(toast);

        // 自动关闭
        setTimeout(function () {
            document.body.removeChild(toast);
        },timeOut);
    },
    /**
     * 带菊花的自动消失提示框
     * @function
     * @name showLoadingToast
     * @param {string} message - 提示框文字内容
     * @param {int} timeout - 关闭时间毫秒,选填默认2000
     */
    showLoadingToast :function(/* message, timeout */){
        // 定义提示信息
        var message = arguments[0];

        // 定义一个提示框div
        var toast = document.createElement('div');

        // 定义css
        toast.classList.add('toast-container');

        // 添加文字信息
        toast.innerHTML = "<div class='toast-message'><span class='spinner-white'></span>" + message + "</div>";

        // 添加到窗体内
        document.body.appendChild(toast);

        if (arguments.length === 2)
        {
            // 定义延迟时间
            var timeOut = arguments[1];

            // 自动关闭
            setTimeout(function () {
                document.body.removeChild(toast);
            },timeOut);
        }
    },
    hideLoadingToast :function(toast) {
        document.body.removeChild(toast);
    }
};

/** @module Tip */
module.exports = Toast;