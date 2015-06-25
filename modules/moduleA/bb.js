(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * 定义一个控制器类
 **/
function JobController() {
    this.name1 = "12";
}

function aa() {
    console.log("aa");
}

/**
 * 控制器类添加方法
 **/
JobController.prototype = {
    getJobs    : function (bookId) {
        console.log("Jobs id is: " + bookId);
        aa();
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

},{}],2:[function(require,module,exports){
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
},{"../models/user.model":3,"../views/templates/user":5}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
'use strict';

var domReady       = require('domready'),
    //Director       = require('director'),
    JobController  = require('./controllers/job.client.controller'),
    UserController = require('./controllers/user.client.controller'),
    //Router = require('./controllers/moduleA.router'),
    Router        = require('router/router'),
    tipq           = require('common/toast');

/**
 * 函数模块的主入口
 */
domReady(function () {

    // 定义控制器敲不死
    var jobC = new JobController();

    // 定义控制器用户
    var userC = new UserController();
    //var low = new Router();
    var tips = new tipq();

    //// 定义路由参数
    //var routes = {
    //    '/user'       : userC.getUser.bind(userC),
    //    '/jobs'       : jobC.getYourJob,
    //    '/jobs/j/:id' : jobC.getJobs,
    //    '/jobs/:user' : jobC.getWeJob,
    //    '/userlist'   : userC.GetUserList.bind(userC)
    //};
    //
    //// 定义前端路由器
    //var router = new Director.Router(routes);
    //
    //// 初始化
    //router.init();

    var router = new Router();

    router
        .add('/user/',userC.getUser.bind(userC))
        .add('/jobs/',jobC.getYourJob)
        .add('/jobs/j/:id/',jobC.getJobs)
        .add('/jobs/:user',jobC.getWeJob)
        .add('/userlist/',userC.GetUserList);

    router.add('/animation1',userC.UserOne);

    router.add('/animation2',userC.UserTwo);

    router.listen();
    router.navigate('/jobs/miehehe');
    // configuration
    //router.config({mode : 'hash'});
    //
    //router.navigate();
    //


    // forwarding
    //router.navigate('/user');

});

},{"./controllers/job.client.controller":1,"./controllers/user.client.controller":2,"common/toast":8,"domready":9,"router/router":10}],5:[function(require,module,exports){
/*TMODJS:{"version":2,"md5":"d57cc823042d696279605f3168ee1e1f"}*/
var template=require("../../../template");require("./userlist"),module.exports=template("moduleA/views/templates/user",function(a,b){"use strict";var c=this,d=(c.$helpers,c.$escape),e=a.title,f=function(d,e){e=e||a;var f=c.$include(d,e,b);return g+=f},g="";return g+="<h1>\u7528\u62371: ",g+=d(e),g+="</h1> ",f("./userlist"),new String(g)});
},{"../../../template":7,"./userlist":6}],6:[function(require,module,exports){
/*TMODJS:{"version":2,"md5":"dcba606f50f2d56854ff66a338ce6f97"}*/
var template=require("../../../template");module.exports=template("moduleA/views/templates/userlist",function(a){"use strict";var b=this,c=(b.$helpers,a.i),d=a.list,e=b.$escape,f="";for(f+="<ul> ",c=0;c<d.length;c++)f+=" <li>\u5927\u5bb6\u7684\u5c5e\u6027 ",f+=e(c+1),f+=" \uff1a",f+=e(d[c]),f+="</li> ";return f+=" </ul>",new String(f)});
},{"../../../template":7}],7:[function(require,module,exports){
/*TMODJS:{}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^/]+\1\.\.\1/,d=("./"+a).replace(/[^/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},module.exports=a}();
},{}],8:[function(require,module,exports){
"use strict";

/**
 * 自动消失提示框
 * @constructor
 */
function Tip() {

}

Tip.prototype = {
    /**
     * 自动消失提示框
     * @function
     * @name Show
     * @param {string} message - 提示框文字内容
     * @param {int} timeout - 关闭时间毫秒,选填默认2000
     */
    Show : function (/* message, timeout */) {

        // 定义提示信息
        var message = arguments[0];

        // 定义延迟时间
        var timeOut = (arguments.length === 2) ? arguments[1] : 2000;

        // 定义一个提示框div
        var toast = document.createElement('div');

        // 定义css
        toast.classList.add('mui-toast-container');

        // 添加文字信息
        toast.innerHTML = '<div class="' + 'mui-toast-message' + '">' + message + '</div>';

        // 添加到窗体内
        document.body.appendChild(toast);

        // 自动关闭
        setTimeout(function () {
            document.body.removeChild(toast);
        },timeOut);
    }
};

/** @module Tip */
module.exports = Tip;
},{}],9:[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});

},{}],10:[function(require,module,exports){
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
     * @param {string} hashPath - 路由地址
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
},{}]},{},[4]);
