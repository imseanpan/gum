"use strict";

// 引用模块
var _groupBy = require('lodash/collection/groupBy');

/**
 * @description {array} 省 的数据
 * @field
 */
var provinces = [
    {
        id      : 1,
        type    : 'area',
        code    : '110000',
        display : '北京市',
        group   : 'b',
        py      : ['beijing','bj']
    },
    {
        id      : 2,
        type    : 'area',
        code    : '120000',
        display : '天津市',
        group   : 't',
        py      : ['tianjin','tj']
    },
    {
        id      : 3,
        type    : 'area',
        code    : '130000',
        display : '河北省',
        group   : 'h',
        py      : ['hebei','hb']
    },
    {
        id      : 4,
        type    : 'area',
        code    : '140000',
        display : '山西省',
        group   : 's',
        py      : ['shanxi','sx']
    },
    {
        id      : 5,
        type    : 'area',
        code    : '150000',
        display : '内蒙古',
        group   : 'n',
        py      : ['neimenggu','nmg']
    },
    {
        id      : 6,
        type    : 'area',
        code    : '210000',
        display : '辽宁省',
        group   : 'l',
        py      : ['liaoning','ln']
    },
    {
        id      : 7,
        type    : 'area',
        code    : '220000',
        display : '吉林省',
        group   : 'j',
        py      : ['jilin','jl']
    },
    {
        id      : 8,
        type    : 'area',
        code    : '230000',
        display : '黑龙江',
        group   : 'h',
        py      : ['heilongjiang','hlj']
    },
    {
        id      : 9,
        type    : 'area',
        code    : '310000',
        display : '上海市',
        group   : 's',
        py      : ['shanghai','sh']
    },
    {
        id      : 10,
        type    : 'area',
        code    : '320000',
        display : '江苏省',
        group   : 'j',
        py      : ['jiangsu','js']
    },
    {
        id      : 11,
        type    : 'area',
        code    : '330000',
        display : '浙江省',
        group   : 'z',
        py      : ['zhejiang','zj']
    },
    {
        id      : 12,
        type    : 'area',
        code    : '340000',
        display : '安徽省',
        group   : 'a',
        py      : ['anhui','ah']
    },
    {
        id      : 13,
        type    : 'area',
        code    : '350000',
        display : '福建省',
        group   : 'f',
        py      : ['fujian','fj']
    },
    {
        id      : 14,
        type    : 'area',
        code    : '360000',
        display : '江西省',
        group   : 'j',
        py      : ['jiangxi','jx']
    },
    {
        id      : 15,
        type    : 'area',
        code    : '370000',
        display : '山东省',
        group   : 's',
        py      : ['shandong','sd']
    },
    {
        id      : 16,
        type    : 'area',
        code    : '410000',
        display : '河南省',
        group   : 'h',
        py      : ['henan','hn']
    },
    {
        id      : 17,
        type    : 'area',
        code    : '420000',
        display : '湖北省',
        group   : 'h',
        py      : ['hubei','hb']
    },
    {
        id      : 18,
        type    : 'area',
        code    : '430000',
        display : '湖南省',
        group   : 'h',
        py      : ['hunan','hn']
    },
    {
        id      : 19,
        type    : 'area',
        code    : '440000',
        display : '广东省',
        group   : 'g',
        py      : ['guangdong','gd']
    },
    {
        id      : 20,
        type    : 'area',
        code    : '450000',
        display : '广西',
        group   : 'g',
        py      : ['guangxi','gx']
    },
    {
        id      : 21,
        type    : 'area',
        code    : '460000',
        display : '海南省',
        group   : 'h',
        py      : ['hainan','hn']
    },
    {
        id      : 22,
        type    : 'area',
        code    : '500000',
        display : '重庆市',
        group   : 'z',
        py      : ['zhongqing','zq']
    },
    {
        id      : 23,
        type    : 'area',
        code    : '510000',
        display : '四川省',
        group   : 's',
        py      : ['sichuan','sc']
    },
    {
        id      : 24,
        type    : 'area',
        code    : '520000',
        display : '贵州省',
        group   : 'g',
        py      : ['guizhou','gz']
    },
    {
        id      : 25,
        type    : 'area',
        code    : '530000',
        display : '云南省',
        group   : 'y',
        py      : ['yunnan','yn']
    },
    {
        id      : 26,
        type    : 'area',
        code    : '540000',
        display : '西藏',
        group   : 'x',
        py      : ['xizang','xz']
    },
    {
        id      : 27,
        type    : 'area',
        code    : '610000',
        display : '陕西省',
        group   : 's',
        py      : ['shanxi','sx']
    },
    {
        id      : 28,
        type    : 'area',
        code    : '620000',
        display : '甘肃省',
        group   : 'g',
        py      : ['gansu','gs']
    },
    {
        id      : 29,
        type    : 'area',
        code    : '630000',
        display : '青海省',
        group   : 'q',
        py      : ['qinghai','qh']
    },
    {
        id      : 30,
        type    : 'area',
        code    : '640000',
        display : '宁夏',
        group   : 'n',
        py      : ['ningxia','nx']
    },
    {
        id      : 31,
        type    : 'area',
        code    : '650000',
        display : '新疆',
        group   : 'x',
        py      : ['xinjiang','xj']
    },
    {
        id      : 32,
        type    : 'area',
        code    : '710000',
        display : '台湾省',
        group   : 't',
        py      : ['taiwan','tw']
    },
    {
        id      : 33,
        type    : 'area',
        code    : '810000',
        display : '香港',
        group   : 'x',
        py      : ['xianggang','xg']
    },
    {
        id      : 34,
        type    : 'area',
        code    : '820000',
        display : '澳门',
        group   : 'a',
        py      : ['aomen','am']
    }];

/**
 * 中国 - 省
 * @constructor
 */
function Provinces() {

}

Provinces.prototype = {
    /**
     * 取得省的数据
     * @function
     * @name getProvinces
     * @return {array}
     */
    getProvinces    : function () {
        return provinces;
    },
    /**
     * 取得根据拼音分组后的数据
     * @function
     * @name getProvincesDic
     * @param {string} property - 分组的字段名称
     * @return {hash} 返回分组数据(这里多数以拼音分组)
     */
    getProvincesDic : function (property) {
        return _groupBy(provinces,property);
    }
};

/** @module Provinces */
module.exports = Provinces;