"use strict";
//引入类
var Validate = require('./validate');
var CheckName = require('./check.name');
var CheckIdentityCard = require('./check.identity.card');
var CheckBirthDay = require('./check.birthday');
var CheckTelMobile = require('./check.telmobile');

//创建对象
var checkNameObj = new CheckName();
var checkIdentityCardObj = new CheckIdentityCard();
var checkBirthDayObj = new CheckBirthDay();
var checkTelMobileObj = new CheckTelMobile();



/**
 * 定义一个含所有校验的控制器类
 **/
function ValidateAll() {

}
//继承Validate类
ValidateAll.prototype = new Validate();

/**
 * 枚举所有校验对象
 */
ValidateAll.prototype.checkMenu = {
		"checkName" : checkNameObj.check,
		"checkIdentity" : checkIdentityCardObj.check,
		"checkBirthDay" : checkBirthDayObj.check,
		"checkTelMobile" : checkTelMobileObj.check
};

/**
 * 根据方法名称，调用相应校验方法
 */
ValidateAll.prototype.checkAll = function(eventName,value){
    var event = this.checkMenu[eventName];
    return this.check(event, value);
};

/**
 * 输出控制器类
 **/
module.exports = ValidateAll;
		
