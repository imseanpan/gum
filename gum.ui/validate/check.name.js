"use strict";

/**
 * 定义一个控制器类
 **/
function CheckName() {
	
}

CheckName.prototype = {
		/**
	     * 检查中文姓名
	     */
	    check: function (chiName) {
	        var tmpChiName = chiName.replace(/(^\s*)|(\s*$)/g, "");
	        //先判断是否是非法字符，再判断是否是由汉字或者半角英文字母组成，最后判断长度
	        //只能输入汉字或者半角英文字母
	        var reg1 = /^[A-Za-z\u4e00-\u9fa5·.]+$/g;
	        var msg = "";
	        //中文姓名不能为空
	        if (null == tmpChiName || "" == tmpChiName) {
	            msg = "请输入姓名";
	            return msg;
	        } else if (tmpChiName != chiName) {
	            msg = "姓名开始和结束不能有空格";
	            return msg;
	        } else if (!reg1.test(tmpChiName)) {
	            msg = "姓名只允许包含汉字、半角英文字母、· 和 . ";
	            return msg;
	        } else if (this.calculate_byte(tmpChiName) > 38 || this.calculate_byte(tmpChiName) < 4) {
	            msg = "姓名只能由2-19位中文或4-38位英文组成，请正确填写";
	            return msg;
	        } else if (tmpChiName == "不详" || tmpChiName == "不祥" || tmpChiName == "未知" || tmpChiName == "不知道") {
	            msg = "姓名不能为不详、不祥、未知或不知道";
	            return msg;
	        } else if (tmpChiName == "ABCD" || tmpChiName == "ABCDE") {
	            msg = "姓名只能由2-19位中文或4-38位英文组成，请正确填写";
	            return msg;
	        }
	        return msg;
	    },
	    /**
	     * 1B 计算字符长度,中文占两个字节

	     * @param sTargetStr
	     * @returns {Number}
	     */
	    calculate_byte  : function(sTargetStr) {
	        var sTmpStr, sTmpChar;
	        var nOriginLen = 0;
	        var nStrLength = 0;
	        sTmpStr = String(sTargetStr);
	        nOriginLen = sTmpStr.length;
	        for ( var i=0 ; i < nOriginLen ; i++ ) {
	                sTmpChar = sTmpStr.charAt(i);
	                if (escape(sTmpChar).length > 4) {
	                        nStrLength += 2;
	                } else if (sTmpChar!='/r') {
	                        nStrLength ++;
	                }
	        }
	        return nStrLength; 
	    }
		
};

module.exports = CheckName;