"use strict";

/**
 * 前端路由组件
 * @constructor
 */
function Router() {


}

Router.prototype = {
    PATH_REPLACER : "([^\/\\?]+)",
    PATH_NAME_MATCHER : /:([\w\d]+)/g,
    PATH_EVERY_MATCHER : /\/\*(?!\*)/,
    PATH_EVERY_REPLACER : "\/([^\/\\?]+)",
    PATH_EVERY_GLOBAL_MATCHER : /\*{2}/,
    PATH_EVERY_GLOBAL_REPLACER : "(.*?)\\??",
    LEADING_BACKSLASHES_MATCH : /\/*$/,
    routes       : [],
    root         : '/',
    /**
     * 添加路由规则
     * @function
     * @name add
     * @param {string} path - 路由地址
     * @param {function} callback - 回调函数
     */
    add : function (path,callback) {

        var match,
            paramNames = [];

        if('string' == typeof path) {
            // 去除最后的斜杠
            path = path.replace(this.LEADING_BACKSLASHES_MATCH,'');

            // 查看是否有动态参数,格式为 :
            while(( match = this.PATH_NAME_MATCHER.exec(path)) !== null) {
                paramNames.push(match[1]);
            }

            path = new RegExp(path
                    .replace(this.PATH_NAME_MATCHER, this.PATH_REPLACER)
                    .replace(this.PATH_EVERY_MATCHER, this.PATH_EVERY_REPLACER)
                    .replace(this.PATH_EVERY_GLOBAL_MATCHER, this.PATH_EVERY_GLOBAL_REPLACER) + "(?:\\?.+)?$", 'i');
        }

        this.routes.push({
            'path' : path,
            'paramNames' : paramNames,
            'routeAction' : callback
        });

        return this;
    },
    /**
     * 路由匹配的方法
     * 此方法位核心方法
     * @function
     * @name check
     * @param {string} currentUrl - 路由地址
     */
    check : function (currentUrl) {

        var currentRoute, // 当前路由
            urlToTest,    // 测试路由
            match,        // 通配符
            params,       // 动态路由参数
            paramsArray;  // 动态路由参数

        if (currentUrl.length === 0) {
            return true;
        }

        // 转变当前url
        currentUrl = currentUrl.replace(this.LEADING_BACKSLASHES_MATCH,'');

        // 删除?后参数
        urlToTest = (currentUrl.split('?'))[0].replace(this.LEADING_BACKSLASHES_MATCH,'');

        // 删除url结束的反斜杠,检查所有匹配的路由索引
        for (var p in this.routes) {

            if (this.routes.hasOwnProperty(p)) {

                // 取得当前url
                currentRoute = this.routes[p];

                // 检查url是否正确
                if (currentRoute.path.test(urlToTest)) {
                    paramsArray = [];
                    params = {};
                    match  = currentUrl.match(currentRoute.path);

                    for (var i = 0,len = currentRoute.paramNames.length; i < len; i++) {
                        params[currentRoute.paramNames[i]] = match[i + 1];
                        paramsArray.push(match[i + 1]);
                    }

                    // 执行路由的回调函数
                    currentRoute.routeAction.call({},paramsArray);
                }
            }
        }

        return this;
    },
    /**
     * 监听方法
     * @function
     * @name listen
     */
    listen : function () {
        // 防呆
        var self = this;

        //回调函数
        var func = function(){
            // 取得变化后的路径
            var hashPath = location.hash.slice(1) || '/';

            self.check(hashPath);
        };

        // 执行这个方法
        window.onhashchange = func;

        return this;
    },
    /**
     * 导航事件
     * @function
     * @name navigate
     * @param {string} path - 路由地址
     */
    navigate : function (path) {

        path = path ? path : '';

        window.location.href.match(/#(.*)$/);
        window.location.href = window.location.href.replace(/#(.*)$/,'') + '#' + path;

        return this;
    }
};

/** @module Router */
module.exports = Router;

