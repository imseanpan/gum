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
     */
    add : function (path,callback) {

        var match,
            //modifiers = (this._options.ignorecase ? 'i' : ''),
            paramNames = [];
        if('string' == typeof path) {
            /*Remove leading backslash from the end of the string*/
            path = path.replace(this.LEADING_BACKSLASHES_MATCH,'');
            /*Param Names are all the one defined as :param in the path*/
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
        //
        //
        //// 添加路由规则
        //this.routes.push({path : path,handler : handler});
        //
        //return this;
    },
    getFragment  : function () {

        // 取得路径
        var fragment = this.clearSlashes(decodeURI(location.pathname + location.search));

        // 替换任意字符
        fragment = fragment.replace(/\?(.*)$/,'');

        // 判断是否是根路径
        fragment = this.root != '/' ? fragment.replace(this.root,'') : fragment;

        // 清除多余的斜杠,返回路径
        return this.clearSlashes(fragment);
    },
    //
    check : function (hashPath) {

        var currentRoute        = '',
            matchedIndexes = [],
            currentUrl     = hashPath,
            urlToTest;

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
                    //matchedIndexes.push(p);
                    //currentRoute.routeAction();
                    currentRoute.routeAction.call({}, 'ha');
                }
            }
        }

        //if(matchedIndexes.length > 0) {
        //    //this._followRoute(fragmentUrl, url,  matchedIndexes);
        //
        //    var index = matchedIndexes.splice(0, 1),
        //        route = this.routes[index],
        //        params = {};
        //
        //        //request = this._buildRequestObject( fragmentUrl, params, splat, hasNext );
        //
        //}


        ////var hash_index = url.indexOf('#');
        ////return hash_index >= 0 ? url.substring(hash_index) : '#/';
        //
        //var keys,
        //    match,
        //    routeParams;
        //
        //for (var i = 0, max = this.routes.length; i < max; i++ ) {
        //
        //    routeParams = {}
        //
        //    keys = this.routes[i].path.match(/:([^\/]+)/g);
        //
        //    match = hashPath.match(new RegExp(this.routes[i].path.replace(/:([^\/]+)/g, "([^\/]*)")));
        //    if (match) {
        //        match.shift();
        //        match.forEach(function (value, i) {
        //            routeParams[keys[i].replace(":", "")] = value;
        //        });
        //        this.routes[i].handler.call({}, routeParams);
        //        return this;
        //    }
        //}
        //
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

            console.log("1:" + hashPath);
            console.log("2:" + self.clearSlashes(location.hash.slice(1)));
            self.check(hashPath);
        };

        // 执行这个方法
        window.onhashchange = func;

        return this;
    },
    /**
     * 去除斜杠符号的方法
     * @function
     * @name clearSlashes
     * @param {string} path - 路由地址
     */
    clearSlashes : function (path) {

        //History.prototype = {
        //    constructor: History,
        //    getFragment: function(fragment) {
        //        if (fragment == null) {
        //            if (this.monitorMode === "popstate") {
        //                fragment = this.getPath()
        //            } else {
        //                fragment = this.getHash()
        //            }
        //        }
        //        return fragment.replace(/^[#\/]|\s+$/g, "")
        //    },

        return path.toString().replace(/\/$/,'').replace(/^\//,'');
    },
    /**
     * 导航事件
     * @function
     * @name navigate
     * @param {string} path - 路由地址
     */
    navigate : function (path) {
        path = path ? path : '';
        if (this.mode === 'history') {
            history.pushState(null,null,this.root + this.clearSlashes(path));
        } else {
            window.location.href.match(/#(.*)$/);
            window.location.href = window.location.href.replace(/#(.*)$/,'') + '#' + path;
        }

        return this;
    }

};


var Router1     = {
    routes       : [],
    mode         : null,
    root         : '/',
    config       : function (options) {
        this.mode = options && options.mode && options.mode == 'history'
        && !!(history.pushState) ? 'history' : 'hash';
        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';
        return this;
    },
    getFragment  : function () {
        var fragment = '';
        if (this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
            fragment = fragment.replace(/\?(.*)$/,'');
            fragment = this.root != '/' ? fragment.replace(this.root,'') : fragment;
        } else {
            var match = window.location.href.match(/#(.*)$/);
            fragment  = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    },
    clearSlashes : function (path) {
        return path.toString().replace(/\/$/,'').replace(/^\//,'');
    },
    add          : function (re,handler) {
        if (typeof re == 'function') {
            handler = re;
            re      = '';
        }
        this.routes.push({re : re,handler : handler});
        return this;
    },
    check        : function (f) {
        var fragment = f || this.getFragment();
        for (var i = 0; i < this.routes.length; i++) {
            var match = fragment.match(this.routes[i].re);
            if (match) {
                match.shift();
                this.routes[i].handler.apply({},match);
                return this;
            }
        }
        return this;
    },
    listen       : function () {
        var self      = this;
        var current   = self.getFragment();
        var fn        = function () {
            if (current !== self.getFragment()) {
                current = self.getFragment();
                self.check(current);
            }
        }
        clearInterval(this.interval);
        this.interval = setInterval(fn,50);
        return this;
    },
    navigate     : function (path) {
        path = path ? path : '';
        if (this.mode === 'history') {
            history.pushState(null,null,this.root + this.clearSlashes(path));
        } else {
            window.location.href.match(/#(.*)$/);
            window.location.href = window.location.href.replace(/#(.*)$/,'') + '#' + path;
        }
        return this;
    }
}
/** @module Router */
module.exports = Router;
