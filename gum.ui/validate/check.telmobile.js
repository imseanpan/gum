"use strict";

/**
 * 定义一个控制器类
 **/
function CheckTelMobile() {
	
}

CheckTelMobile.prototype = {
		/**
	     * 校验手机号
	     * 校验规则 ：以13、14、15、18开头的11位数字
	     * @function
	     * @name Show
	     * @param {string} mobileNo - 提示框文字内容
	     */
	    check: function (mobileNo) {
	    	
	        var msg = "";
	        
	        if (null === mobileNo || "" === mobileNo) {
	            msg = "请填写您的手机号码";
	            return msg;
	        }
	      
	        // 去除通配符
	        var tmpMobileNo = mobileNo.replace(/(^\s*)|(\s*$)/g, "");
	        
	        // 正则表达式：以13、14、15、18开头的11位数字
	        var reg1 = /^(1[345678]\d{9})$/;
	        
	        if (!reg1.test(tmpMobileNo)) {
	            msg = "手机号码不符合规范";
	            return msg;
	        }
	        return msg;
	    }
};

module.exports = CheckTelMobile;