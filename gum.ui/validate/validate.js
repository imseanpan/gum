"use strict";



/**
 * 定义一个校验控制器类
 **/
function Validate() {

}

Validate.prototype = {
	 /**
	  * 校验方法
	  */
     check: function(event,value) {
        return event.call(this, value);
     }
};

/**
 * 输出校验控制器类
 **/
module.exports = Validate;
		
