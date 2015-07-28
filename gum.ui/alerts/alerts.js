"use strict";

var alertTpl = require('./alert.tpl');

/**
 * 提示框
 * @constructor
 */
function Alerts() {

}

Alerts.prototype = {
    /**
     * 显示提示框
     * @function
     * @name showAlerts
     * @param {string} title - 提示框标题
     * @param {string} message - 提示框文本信息
     * @param {function} fnOK - 点击正确按钮回调方法
     * @param {function} fnCancel - 点击正确按钮回调方法
     */
    showAlerts : function (title,message,fnOK,fnCancel) {

        // 初始化HTML模板
        var data = {'title' : title,message : message};
        var html = alertTpl(data);

        // 先定义蒙版
        var overlay = document.createElement('div');
        // 设置蒙版id
        overlay.id = 'divOverlay';
        // 定义蒙版css
        overlay.classList.add('alert-overlay');

        // 定义alert
        var alert = document.createElement('div');
        // 设置alert id
        alert.id = 'divAlert';
        // 定义alert css
        alert.classList.add('alert');

        // 添加文字信息
        alert.innerHTML = html;

        // 添加蒙版元素
        document.body.appendChild(overlay);
        // 添加alert元素
        document.body.appendChild(alert);

        // 取得按钮元素
        var btnCancel = document.getElementById('btnCancel');
        var btnOK = document.getElementById('btnOK');

        // 定义OK按钮回调事件
        btnOK.addEventListener('click',function (e) {
            fnOK(e);
        });

        // 定义Cancel按钮回调事件
        btnCancel.addEventListener('click',function (e) {
            fnCancel(e)
        });
    },
    /**
     * 关闭alert提示框
     * @function
     * @name hideAlerts
     */
    hideAlerts : function () {

        // 取得蒙版元素
        var overlay = document.getElementById('divOverlay');

        // 取得alert元素
        var alert = document.getElementById('divAlert');

        // 删除蒙版元素
        document.body.removeChild(overlay);

        // 删除alert元素
        document.body.removeChild(alert);
    }
};

/** @module Alerts */
module.exports = Alerts;