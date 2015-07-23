"use strict";

/**
 * 定义一个控制器类
 **/
function CheckBirthDay() {
	
}

CheckBirthDay.prototype = {
		/**
	     * 检查出生日期
	     * 统一格式为YYYY-MM-DD 或 yyyyMMdd,介于1900-01-01与录入当日
	     * @param birthday
	     * @returns {Boolean}
	     */
	    check: function (birthday) {
	        var msg = "";

	        //去除出生日期两端的空格
	        var bir = birthday.replace(/(^\s*)|(\s*$)/g, "");

	        if (null == bir || "" == bir) {
	            msg = "请输入出生日期";
	            return msg;
	        }

	        var reg3 = /\d/g;
	        if (!reg3.test(bir)) {
	            msg = "出生日期只允许包含半角数字字符";
	            return msg;
	        }

	        //获得录入所在日期的年、月、日
	        var today = new Date();
	        var todayYear = today.getFullYear();
	        var todayMonth = today.getMonth() + 1;
	        var todayDay = today.getDate();
	        var tmpToday = new Date(todayYear, todayMonth, todayDay);

	        //获得录入出生日期的年、月、日，用户输入6位时，自动添加19

	        if (bir.indexOf("-") >= 0) {
	            if (!this.checkDate3(bir)) {
	                msg = "出生日期输入不正确，正确格式为YYYY-MM-DD";
	                return msg;
	            }
	            bir = bir.replace('-', '').replace('-', '');
	        }

	        var tmpYear = bir.substr(0, 4);
	        var tmpMonth = bir.substr(4, 2);
	        var tmpDay = bir.substr(6, 2);
	        var tmpDate = new Date(tmpYear, tmpMonth, tmpDay);


	        if (tmpYear < 1900 || tmpDate > tmpToday) {
	            msg = "出生日期只能再当前日期之前";	          	         
	        }
	        
	        return msg;
	    },
	    /**
	     * 10C  检查输入参数是否为合法的日期 :
	     * 支持闰年平年日期，格式为YYYY-MM-DD
	     */
	    checkDate3 : function(tm){
	    	 var a=/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/; 
	    		return tm.match(a);
	    }
		
};

module.exports = CheckBirthDay;