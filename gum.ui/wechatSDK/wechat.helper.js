"use strict";

var ajax = require('reqwest');
var Q    = require('q');
var wechat = require('wechat');

/**
 * 微信SDK补助方法
 * 依赖reqwest.js和q.js,所以使用前请使用NPM安装这两个模块
 * @constructor
 */
function WeChatHelper() {

}

WeChatHelper.prototype = {
    /**
     * 取得微信Token
     * @function
     * @name getToken
     */
    getToken  : function () {
        return ajax({
            url    : 'https://eim.pingan.com.cn/egis/getSignature',
            data   : {openid : "123456",weappNo : "PAYLX95511_01"},
            method : 'get',
            type   : 'jsonp'
        });
    },
    /**
     * 取得微信Token
     * @function
     * @name setConfig
     * @param {json} jsData - 需要的微信接口方法
     * @param {array} funcNames - 需要的微信接口方法
     */
    setConfig : function (jsData,funcNames) {

        return wx.config({
            debug     : true,
            appId     : 'wx1e2d13308e457ed9',
            timestamp : jsData['timestamp'],
            nonceStr  : jsData['nonce'],
            signature : jsData['signature'],
            jsApiList : funcNames
        });
    }
};


/** @module 微信补助方法 */
module.exports = WeChatHelper;