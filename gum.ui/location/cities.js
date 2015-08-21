"use strict";

// 引用模块
var _groupBy  = require('lodash/collection/groupBy'),
    _filter   = require('lodash/collection/filter'),
    _includes = require('lodash/collection/includes');

/**
 * @description {array} 城市 的数据
 * @field
 */
var cities = [
    {
        id       : 1,
        type     : 'city',
        property : '110000',
        code     : '110000',
        display  : '北京市',
        group    : 'b',
        py       : ['beijing','bj']
    },
    {
        id       : 2,
        type     : 'city',
        property : '120000',
        code     : '120000',
        display  : '天津市',
        group    : 't',
        py       : ['tianjin','tj']
    },
    {
        id       : 3,
        type     : 'city',
        property : '130000',
        code     : '130100',
        display  : '石家庄市',
        group    : 's',
        py       : ['shijiazhuang','sjz']
    },
    {
        id       : 4,
        type     : 'city',
        property : '130000',
        code     : '130200',
        display  : '唐山市',
        group    : 't',
        py       : ['tangshan','ts']
    },
    {
        id       : 5,
        type     : 'city',
        property : '130000',
        code     : '130300',
        display  : '秦皇岛市',
        group    : 'q',
        py       : ['qinhuangdao','qhd']
    },
    {
        id       : 6,
        type     : 'city',
        property : '130000',
        code     : '130400',
        display  : '邯郸市',
        group    : 'h',
        py       : ['handan','hd']
    },
    {
        id       : 7,
        type     : 'city',
        property : '130000',
        code     : '130500',
        display  : '邢台市',
        group    : 'x',
        py       : ['xingtai','xt']
    },
    {
        id       : 8,
        type     : 'city',
        property : '130000',
        code     : '130600',
        display  : '保定市',
        group    : 'b',
        py       : ['baoding','bd']
    },
    {
        id       : 9,
        type     : 'city',
        property : '130000',
        code     : '130700',
        display  : '张家口市',
        group    : 'z',
        py       : ['zhangjiakou','zjk']
    },
    {
        id       : 10,
        type     : 'city',
        property : '130000',
        code     : '130800',
        display  : '承德市',
        group    : 'c',
        py       : ['chengde','cd']
    },
    {
        id       : 11,
        type     : 'city',
        property : '130000',
        code     : '130900',
        display  : '沧州市',
        group    : 'c',
        py       : ['cangzhou','cz']
    },
    {
        id       : 12,
        type     : 'city',
        property : '130000',
        code     : '131000',
        display  : '廊坊市',
        group    : 'l',
        py       : ['langfang','lf']
    },
    {
        id       : 13,
        type     : 'city',
        property : '130000',
        code     : '131100',
        display  : '衡水市',
        group    : 'h',
        py       : ['hengshui','hs']
    },
    {
        id       : 14,
        type     : 'city',
        property : '140000',
        code     : '140100',
        display  : '太原市',
        group    : 't',
        py       : ['taiyuan','ty']
    },
    {
        id       : 15,
        type     : 'city',
        property : '140000',
        code     : '140200',
        display  : '大同市',
        group    : 'd',
        py       : ['datong','dt']
    },
    {
        id       : 16,
        type     : 'city',
        property : '140000',
        code     : '140300',
        display  : '阳泉市',
        group    : 'y',
        py       : ['yangquan','yq']
    },
    {
        id       : 17,
        type     : 'city',
        property : '140000',
        code     : '140400',
        display  : '长治市',
        group    : 'c',
        py       : ['changzhi','cz']
    },
    {
        id       : 18,
        type     : 'city',
        property : '140000',
        code     : '140500',
        display  : '晋城市',
        group    : 'j',
        py       : ['jincheng','jc']
    },
    {
        id       : 19,
        type     : 'city',
        property : '140000',
        code     : '140600',
        display  : '朔州市',
        group    : 's',
        py       : ['shuozhou','sz']
    },
    {
        id       : 20,
        type     : 'city',
        property : '140000',
        code     : '140700',
        display  : '晋中市',
        group    : 'j',
        py       : ['jinzhong','jz']
    },
    {
        id       : 21,
        type     : 'city',
        property : '140000',
        code     : '140800',
        display  : '运城市',
        group    : 'y',
        py       : ['yuncheng','yc']
    },
    {
        id       : 22,
        type     : 'city',
        property : '140000',
        code     : '140900',
        display  : '忻州市',
        group    : 'x',
        py       : ['xinzhou','xz']
    },
    {
        id       : 23,
        type     : 'city',
        property : '140000',
        code     : '141000',
        display  : '临汾市',
        group    : 'l',
        py       : ['linfen','lf']
    },
    {
        id       : 24,
        type     : 'city',
        property : '140000',
        code     : '141100',
        display  : '吕梁市',
        group    : 'l',
        py       : ['lvliang','ll']
    },
    {
        id       : 25,
        type     : 'city',
        property : '150000',
        code     : '150100',
        display  : '呼和浩特市',
        group    : 'h',
        py       : ['huhehaote','hhht']
    },
    {
        id       : 26,
        type     : 'city',
        property : '150000',
        code     : '150200',
        display  : '包头市',
        group    : 'b',
        py       : ['baotou','bt']
    },
    {
        id       : 27,
        type     : 'city',
        property : '150000',
        code     : '150300',
        display  : '乌海市',
        group    : 'w',
        py       : ['wuhai','wh']
    },
    {
        id       : 28,
        type     : 'city',
        property : '150000',
        code     : '150400',
        display  : '赤峰市',
        group    : 'c',
        py       : ['chifeng','cf']
    },
    {
        id       : 29,
        type     : 'city',
        property : '150000',
        code     : '150500',
        display  : '通辽市',
        group    : 't',
        py       : ['tongliao','tl']
    },
    {
        id       : 30,
        type     : 'city',
        property : '150000',
        code     : '150600',
        display  : '鄂尔多斯市',
        group    : 'e',
        py       : ['eerduosi','eeds']
    },
    {
        id       : 31,
        type     : 'city',
        property : '150000',
        code     : '150700',
        display  : '呼伦贝尔市',
        group    : 'h',
        py       : ['hulunbeier','hlbe']
    },
    {
        id       : 32,
        type     : 'city',
        property : '150000',
        code     : '150800',
        display  : '巴彦淖尔市',
        group    : 'b',
        py       : ['bayannaoer','byne']
    },
    {
        id       : 33,
        type     : 'city',
        property : '150000',
        code     : '150900',
        display  : '乌兰察布市',
        group    : 'w',
        py       : ['wulanchabu','wlcb']
    },
    {
        id       : 34,
        type     : 'city',
        property : '150000',
        code     : '152200',
        display  : '兴安盟',
        group    : 'x',
        py       : ['xinganmeng','xam']
    },
    {
        id       : 35,
        type     : 'city',
        property : '150000',
        code     : '152500',
        display  : '锡林郭勒盟',
        group    : 'x',
        py       : ['xilinguolemeng','xlglm']
    },
    {
        id       : 36,
        type     : 'city',
        property : '150000',
        code     : '152900',
        display  : '阿拉善盟',
        group    : 'a',
        py       : ['alashanmeng','alsm']
    },
    {
        id       : 37,
        type     : 'city',
        property : '210000',
        code     : '210100',
        display  : '沈阳市',
        group    : 's',
        py       : ['shenyang','sy']
    },
    {
        id       : 38,
        type     : 'city',
        property : '210000',
        code     : '210200',
        display  : '大连市',
        group    : 'd',
        py       : ['dalian','dl']
    },
    {
        id       : 39,
        type     : 'city',
        property : '210000',
        code     : '210300',
        display  : '鞍山市',
        group    : 'a',
        py       : ['anshan','as']
    },
    {
        id       : 40,
        type     : 'city',
        property : '210000',
        code     : '210400',
        display  : '抚顺市',
        group    : 'f',
        py       : ['fushun','fs']
    },
    {
        id       : 41,
        type     : 'city',
        property : '210000',
        code     : '210500',
        display  : '本溪市',
        group    : 'b',
        py       : ['benxi','bx']
    },
    {
        id       : 42,
        type     : 'city',
        property : '210000',
        code     : '210600',
        display  : '丹东市',
        group    : 'd',
        py       : ['dandong','dd']
    },
    {
        id       : 43,
        type     : 'city',
        property : '210000',
        code     : '210700',
        display  : '锦州市',
        group    : 'j',
        py       : ['jinzhou','jz']
    },
    {
        id       : 44,
        type     : 'city',
        property : '210000',
        code     : '210800',
        display  : '营口市',
        group    : 'y',
        py       : ['yingkou','yk']
    },
    {
        id       : 45,
        type     : 'city',
        property : '210000',
        code     : '210900',
        display  : '阜新市',
        group    : 'f',
        py       : ['fuxin','fx']
    },
    {
        id       : 46,
        type     : 'city',
        property : '210000',
        code     : '211000',
        display  : '辽阳市',
        group    : 'l',
        py       : ['liaoyang','ly']
    },
    {
        id       : 47,
        type     : 'city',
        property : '210000',
        code     : '211100',
        display  : '盘锦市',
        group    : 'p',
        py       : ['panjin','pj']
    },
    {
        id       : 48,
        type     : 'city',
        property : '210000',
        code     : '211200',
        display  : '铁岭市',
        group    : 't',
        py       : ['tieling','tl']
    },
    {
        id       : 49,
        type     : 'city',
        property : '210000',
        code     : '211300',
        display  : '朝阳市',
        group    : 'z',
        py       : ['zhaoyang','zy']
    },
    {
        id       : 50,
        type     : 'city',
        property : '210000',
        code     : '211400',
        display  : '葫芦岛市',
        group    : 'h',
        py       : ['huludao','hld']
    },
    {
        id       : 51,
        type     : 'city',
        property : '220000',
        code     : '220100',
        display  : '长春市',
        group    : 'c',
        py       : ['changchun','cc']
    },
    {
        id       : 52,
        type     : 'city',
        property : '220000',
        code     : '220200',
        display  : '吉林市',
        group    : 'j',
        py       : ['jilin','jl']
    },
    {
        id       : 53,
        type     : 'city',
        property : '220000',
        code     : '220300',
        display  : '四平市',
        group    : 's',
        py       : ['siping','sp']
    },
    {
        id       : 54,
        type     : 'city',
        property : '220000',
        code     : '220400',
        display  : '辽源市',
        group    : 'l',
        py       : ['liaoyuan','ly']
    },
    {
        id       : 55,
        type     : 'city',
        property : '220000',
        code     : '220500',
        display  : '通化市',
        group    : 't',
        py       : ['tonghua','th']
    },
    {
        id       : 56,
        type     : 'city',
        property : '220000',
        code     : '220600',
        display  : '白山市',
        group    : 'b',
        py       : ['baishan','bs']
    },
    {
        id       : 57,
        type     : 'city',
        property : '220000',
        code     : '220700',
        display  : '松原市',
        group    : 's',
        py       : ['songyuan','sy']
    },
    {
        id       : 58,
        type     : 'city',
        property : '220000',
        code     : '220800',
        display  : '白城市',
        group    : 'b',
        py       : ['baicheng','bc']
    },
    {
        id       : 59,
        type     : 'city',
        property : '220000',
        code     : '222400',
        display  : '延边自治州',
        group    : 'y',
        py       : ['yanbianzizhizhou','ybzzz']
    },
    {
        id       : 60,
        type     : 'city',
        property : '230000',
        code     : '230100',
        display  : '哈尔滨市',
        group    : 'h',
        py       : ['haerbin','heb']
    },
    {
        id       : 61,
        type     : 'city',
        property : '230000',
        code     : '230200',
        display  : '齐齐哈尔市',
        group    : 'q',
        py       : ['qiqihaer','qqhe']
    },
    {
        id       : 62,
        type     : 'city',
        property : '230000',
        code     : '230300',
        display  : '鸡西市',
        group    : 'j',
        py       : ['jixi','jx']
    },
    {
        id       : 63,
        type     : 'city',
        property : '230000',
        code     : '230400',
        display  : '鹤岗市',
        group    : 'h',
        py       : ['hegang','hg']
    },
    {
        id       : 64,
        type     : 'city',
        property : '230000',
        code     : '230500',
        display  : '双鸭山市',
        group    : 's',
        py       : ['shuangyashan','sys']
    },
    {
        id       : 65,
        type     : 'city',
        property : '230000',
        code     : '230600',
        display  : '大庆市',
        group    : 'd',
        py       : ['daqing','dq']
    },
    {
        id       : 66,
        type     : 'city',
        property : '230000',
        code     : '230700',
        display  : '伊春市',
        group    : 'y',
        py       : ['yichun','yc']
    },
    {
        id       : 67,
        type     : 'city',
        property : '230000',
        code     : '230800',
        display  : '佳木斯市',
        group    : 'j',
        py       : ['jiamusi','jms']
    },
    {
        id       : 68,
        type     : 'city',
        property : '230000',
        code     : '230900',
        display  : '七台河市',
        group    : 'q',
        py       : ['qitaihe','qth']
    },
    {
        id       : 69,
        type     : 'city',
        property : '230000',
        code     : '231000',
        display  : '牡丹江市',
        group    : 'm',
        py       : ['mudanjiang','mdj']
    },
    {
        id       : 70,
        type     : 'city',
        property : '230000',
        code     : '231100',
        display  : '黑河市',
        group    : 'h',
        py       : ['heihe','hh']
    },
    {
        id       : 71,
        type     : 'city',
        property : '230000',
        code     : '231200',
        display  : '绥化市',
        group    : 's',
        py       : ['suihua','sh']
    },
    {
        id       : 72,
        type     : 'city',
        property : '230000',
        code     : '232700',
        display  : '大兴安岭地区',
        group    : 'd',
        py       : ['daxinganlingdiqu','dxaldq']
    },
    {
        id       : 73,
        type     : 'city',
        property : '310000',
        code     : '310000',
        display  : '上海市',
        group    : 's',
        py       : ['shanghai','sh']
    },
    {
        id       : 74,
        type     : 'city',
        property : '320000',
        code     : '320100',
        display  : '南京市',
        group    : 'n',
        py       : ['nanjing','nj']
    },
    {
        id       : 75,
        type     : 'city',
        property : '320000',
        code     : '320200',
        display  : '无锡市',
        group    : 'w',
        py       : ['wuxi','wx']
    },
    {
        id       : 76,
        type     : 'city',
        property : '320000',
        code     : '320300',
        display  : '徐州市',
        group    : 'x',
        py       : ['xuzhou','xz']
    },
    {
        id       : 77,
        type     : 'city',
        property : '320000',
        code     : '320400',
        display  : '常州市',
        group    : 'c',
        py       : ['changzhou','cz']
    },
    {
        id       : 78,
        type     : 'city',
        property : '320000',
        code     : '320500',
        display  : '苏州市',
        group    : 's',
        py       : ['suzhou','sz']
    },
    {
        id       : 79,
        type     : 'city',
        property : '320000',
        code     : '320600',
        display  : '南通市',
        group    : 'n',
        py       : ['nantong','nt']
    },
    {
        id       : 80,
        type     : 'city',
        property : '320000',
        code     : '320700',
        display  : '连云港市',
        group    : 'l',
        py       : ['lianyungang','lyg']
    },
    {
        id       : 81,
        type     : 'city',
        property : '320000',
        code     : '320800',
        display  : '淮安市',
        group    : 'h',
        py       : ['huaian','ha']
    },
    {
        id       : 82,
        type     : 'city',
        property : '320000',
        code     : '320900',
        display  : '盐城市',
        group    : 'y',
        py       : ['yancheng','yc']
    },
    {
        id       : 83,
        type     : 'city',
        property : '320000',
        code     : '321000',
        display  : '扬州市',
        group    : 'y',
        py       : ['yangzhou','yz']
    },
    {
        id       : 84,
        type     : 'city',
        property : '320000',
        code     : '321100',
        display  : '镇江市',
        group    : 'z',
        py       : ['zhenjiang','zj']
    },
    {
        id       : 85,
        type     : 'city',
        property : '320000',
        code     : '321200',
        display  : '泰州市',
        group    : 't',
        py       : ['taizhou','tz']
    },
    {
        id       : 86,
        type     : 'city',
        property : '320000',
        code     : '321300',
        display  : '宿迁市',
        group    : 's',
        py       : ['suqian','sq']
    },
    {
        id       : 87,
        type     : 'city',
        property : '330000',
        code     : '330100',
        display  : '杭州市',
        group    : 'h',
        py       : ['hangzhou','hz']
    },
    {
        id       : 88,
        type     : 'city',
        property : '330000',
        code     : '330200',
        display  : '宁波市',
        group    : 'n',
        py       : ['ningbo','nb']
    },
    {
        id       : 89,
        type     : 'city',
        property : '330000',
        code     : '330300',
        display  : '温州市',
        group    : 'w',
        py       : ['wenzhou','wz']
    },
    {
        id       : 90,
        type     : 'city',
        property : '330000',
        code     : '330400',
        display  : '嘉兴市',
        group    : 'j',
        py       : ['jiaxing','jx']
    },
    {
        id       : 91,
        type     : 'city',
        property : '330000',
        code     : '330500',
        display  : '湖州市',
        group    : 'h',
        py       : ['huzhou','hz']
    },
    {
        id       : 92,
        type     : 'city',
        property : '330000',
        code     : '330600',
        display  : '绍兴市',
        group    : 's',
        py       : ['shaoxing','sx']
    },
    {
        id       : 93,
        type     : 'city',
        property : '330000',
        code     : '330700',
        display  : '金华市',
        group    : 'j',
        py       : ['jinhua','jh']
    },
    {
        id       : 94,
        type     : 'city',
        property : '330000',
        code     : '330800',
        display  : '衢州市',
        group    : 'q',
        py       : ['quzhou','qz']
    },
    {
        id       : 95,
        type     : 'city',
        property : '330000',
        code     : '330900',
        display  : '舟山市',
        group    : 'z',
        py       : ['zhoushan','zs']
    },
    {
        id       : 96,
        type     : 'city',
        property : '330000',
        code     : '331000',
        display  : '台州市',
        group    : 't',
        py       : ['taizhou','tz']
    },
    {
        id       : 97,
        type     : 'city',
        property : '330000',
        code     : '331100',
        display  : '丽水市',
        group    : 'l',
        py       : ['lishui','ls']
    },
    {
        id       : 98,
        type     : 'city',
        property : '340000',
        code     : '340100',
        display  : '合肥市',
        group    : 'h',
        py       : ['hefei','hf']
    },
    {
        id       : 99,
        type     : 'city',
        property : '340000',
        code     : '340200',
        display  : '芜湖市',
        group    : 'w',
        py       : ['wuhu','wh']
    },
    {
        id       : 100,
        type     : 'city',
        property : '340000',
        code     : '340300',
        display  : '蚌埠市',
        group    : 'b',
        py       : ['bangbu','bb']
    },
    {
        id       : 101,
        type     : 'city',
        property : '340000',
        code     : '340400',
        display  : '淮南市',
        group    : 'h',
        py       : ['huainan','hn']
    },
    {
        id       : 102,
        type     : 'city',
        property : '340000',
        code     : '340500',
        display  : '马鞍山市',
        group    : 'm',
        py       : ['maanshan','mas']
    },
    {
        id       : 103,
        type     : 'city',
        property : '340000',
        code     : '340600',
        display  : '淮北市',
        group    : 'h',
        py       : ['huaibei','hb']
    },
    {
        id       : 104,
        type     : 'city',
        property : '340000',
        code     : '340700',
        display  : '铜陵市',
        group    : 't',
        py       : ['tongling','tl']
    },
    {
        id       : 105,
        type     : 'city',
        property : '340000',
        code     : '340800',
        display  : '安庆市',
        group    : 'a',
        py       : ['anqing','aq']
    },
    {
        id       : 106,
        type     : 'city',
        property : '340000',
        code     : '341000',
        display  : '黄山市',
        group    : 'h',
        py       : ['huangshan','hs']
    },
    {
        id       : 107,
        type     : 'city',
        property : '340000',
        code     : '341100',
        display  : '滁州市',
        group    : 'c',
        py       : ['chuzhou','cz']
    },
    {
        id       : 108,
        type     : 'city',
        property : '340000',
        code     : '341200',
        display  : '阜阳市',
        group    : 'f',
        py       : ['fuyang','fy']
    },
    {
        id       : 109,
        type     : 'city',
        property : '340000',
        code     : '341300',
        display  : '宿州市',
        group    : 's',
        py       : ['suzhou','sz']
    },
    {
        id       : 110,
        type     : 'city',
        property : '340000',
        code     : '341400',
        display  : '巢湖市',
        group    : 'c',
        py       : ['chaohu','ch']
    },
    {
        id       : 111,
        type     : 'city',
        property : '340000',
        code     : '341500',
        display  : '六安市',
        group    : 'l',
        py       : ['liuan','la']
    },
    {
        id       : 112,
        type     : 'city',
        property : '340000',
        code     : '341600',
        display  : '亳州市',
        group    : 'b',
        py       : ['bozhou','bz']
    },
    {
        id       : 113,
        type     : 'city',
        property : '340000',
        code     : '341700',
        display  : '池州市',
        group    : 'c',
        py       : ['chizhou','cz']
    },
    {
        id       : 114,
        type     : 'city',
        property : '340000',
        code     : '341800',
        display  : '宣城市',
        group    : 'x',
        py       : ['xuancheng','xc']
    },
    {
        id       : 115,
        type     : 'city',
        property : '350000',
        code     : '350100',
        display  : '福州市',
        group    : 'f',
        py       : ['fuzhou','fz']
    },
    {
        id       : 116,
        type     : 'city',
        property : '350000',
        code     : '350200',
        display  : '厦门市',
        group    : 's',
        py       : ['shamen','sm']
    },
    {
        id       : 117,
        type     : 'city',
        property : '350000',
        code     : '350300',
        display  : '莆田市',
        group    : 'p',
        py       : ['putian','pt']
    },
    {
        id       : 118,
        type     : 'city',
        property : '350000',
        code     : '350400',
        display  : '三明市',
        group    : 's',
        py       : ['sanming','sm']
    },
    {
        id       : 119,
        type     : 'city',
        property : '350000',
        code     : '350500',
        display  : '泉州市',
        group    : 'q',
        py       : ['quanzhou','qz']
    },
    {
        id       : 120,
        type     : 'city',
        property : '350000',
        code     : '350600',
        display  : '漳州市',
        group    : 'z',
        py       : ['zhangzhou','zz']
    },
    {
        id       : 121,
        type     : 'city',
        property : '350000',
        code     : '350700',
        display  : '南平市',
        group    : 'n',
        py       : ['nanping','np']
    },
    {
        id       : 122,
        type     : 'city',
        property : '350000',
        code     : '350800',
        display  : '龙岩市',
        group    : 'l',
        py       : ['longyan','ly']
    },
    {
        id       : 123,
        type     : 'city',
        property : '350000',
        code     : '350900',
        display  : '宁德市',
        group    : 'n',
        py       : ['ningde','nd']
    },
    {
        id       : 124,
        type     : 'city',
        property : '360000',
        code     : '360100',
        display  : '南昌市',
        group    : 'n',
        py       : ['nanchang','nc']
    },
    {
        id       : 125,
        type     : 'city',
        property : '360000',
        code     : '360200',
        display  : '景德镇市',
        group    : 'j',
        py       : ['jingdezhen','jdz']
    },
    {
        id       : 126,
        type     : 'city',
        property : '360000',
        code     : '360300',
        display  : '萍乡市',
        group    : 'p',
        py       : ['pingxiang','px']
    },
    {
        id       : 127,
        type     : 'city',
        property : '360000',
        code     : '360400',
        display  : '九江市',
        group    : 'j',
        py       : ['jiujiang','jj']
    },
    {
        id       : 128,
        type     : 'city',
        property : '360000',
        code     : '360500',
        display  : '新余市',
        group    : 'x',
        py       : ['xinyu','xy']
    },
    {
        id       : 129,
        type     : 'city',
        property : '360000',
        code     : '360600',
        display  : '鹰潭市',
        group    : 'y',
        py       : ['yingtan','yt']
    },
    {
        id       : 130,
        type     : 'city',
        property : '360000',
        code     : '360700',
        display  : '赣州市',
        group    : 'g',
        py       : ['ganzhou','gz']
    },
    {
        id       : 131,
        type     : 'city',
        property : '360000',
        code     : '360800',
        display  : '吉安市',
        group    : 'j',
        py       : ['jian','ja']
    },
    {
        id       : 132,
        type     : 'city',
        property : '360000',
        code     : '360900',
        display  : '宜春市',
        group    : 'y',
        py       : ['yichun','yc']
    },
    {
        id       : 133,
        type     : 'city',
        property : '360000',
        code     : '361000',
        display  : '抚州市',
        group    : 'f',
        py       : ['fuzhou','fz']
    },
    {
        id       : 134,
        type     : 'city',
        property : '360000',
        code     : '361100',
        display  : '上饶市',
        group    : 's',
        py       : ['shangrao','sr']
    },
    {
        id       : 135,
        type     : 'city',
        property : '370000',
        code     : '370100',
        display  : '济南市',
        group    : 'j',
        py       : ['jinan','jn']
    },
    {
        id       : 136,
        type     : 'city',
        property : '370000',
        code     : '370200',
        display  : '青岛市',
        group    : 'q',
        py       : ['qingdao','qd']
    },
    {
        id       : 137,
        type     : 'city',
        property : '370000',
        code     : '370300',
        display  : '淄博市',
        group    : 'z',
        py       : ['zibo','zb']
    },
    {
        id       : 138,
        type     : 'city',
        property : '370000',
        code     : '370400',
        display  : '枣庄市',
        group    : 'z',
        py       : ['zaozhuang','zz']
    },
    {
        id       : 139,
        type     : 'city',
        property : '370000',
        code     : '370500',
        display  : '东营市',
        group    : 'd',
        py       : ['dongying','dy']
    },
    {
        id       : 140,
        type     : 'city',
        property : '370000',
        code     : '370600',
        display  : '烟台市',
        group    : 'y',
        py       : ['yantai','yt']
    },
    {
        id       : 141,
        type     : 'city',
        property : '370000',
        code     : '370700',
        display  : '潍坊市',
        group    : 'w',
        py       : ['weifang','wf']
    },
    {
        id       : 142,
        type     : 'city',
        property : '370000',
        code     : '370800',
        display  : '济宁市',
        group    : 'j',
        py       : ['jining','jn']
    },
    {
        id       : 143,
        type     : 'city',
        property : '370000',
        code     : '370900',
        display  : '泰安市',
        group    : 't',
        py       : ['taian','ta']
    },
    {
        id       : 144,
        type     : 'city',
        property : '370000',
        code     : '371000',
        display  : '威海市',
        group    : 'w',
        py       : ['weihai','wh']
    },
    {
        id       : 145,
        type     : 'city',
        property : '370000',
        code     : '371100',
        display  : '日照市',
        group    : 'r',
        py       : ['rizhao','rz']
    },
    {
        id       : 146,
        type     : 'city',
        property : '370000',
        code     : '371200',
        display  : '莱芜市',
        group    : 'l',
        py       : ['laiwu','lw']
    },
    {
        id       : 147,
        type     : 'city',
        property : '370000',
        code     : '371300',
        display  : '临沂市',
        group    : 'l',
        py       : ['linyi','ly']
    },
    {
        id       : 148,
        type     : 'city',
        property : '370000',
        code     : '371400',
        display  : '德州市',
        group    : 'd',
        py       : ['dezhou','dz']
    },
    {
        id       : 149,
        type     : 'city',
        property : '370000',
        code     : '371500',
        display  : '聊城市',
        group    : 'l',
        py       : ['liaocheng','lc']
    },
    {
        id       : 150,
        type     : 'city',
        property : '370000',
        code     : '371600',
        display  : '滨州市',
        group    : 'b',
        py       : ['binzhou','bz']
    },
    {
        id       : 151,
        type     : 'city',
        property : '370000',
        code     : '371700',
        display  : '菏泽市',
        group    : 'h',
        py       : ['heze','hz']
    },
    {
        id       : 152,
        type     : 'city',
        property : '410000',
        code     : '410100',
        display  : '郑州市',
        group    : 'z',
        py       : ['zhengzhou','zz']
    },
    {
        id       : 153,
        type     : 'city',
        property : '410000',
        code     : '410200',
        display  : '开封市',
        group    : 'k',
        py       : ['kaifeng','kf']
    },
    {
        id       : 154,
        type     : 'city',
        property : '410000',
        code     : '410300',
        display  : '洛阳市',
        group    : 'l',
        py       : ['luoyang','ly']
    },
    {
        id       : 155,
        type     : 'city',
        property : '410000',
        code     : '410400',
        display  : '平顶山市',
        group    : 'p',
        py       : ['pingdingshan','pds']
    },
    {
        id       : 156,
        type     : 'city',
        property : '410000',
        code     : '410500',
        display  : '安阳市',
        group    : 'a',
        py       : ['anyang','ay']
    },
    {
        id       : 157,
        type     : 'city',
        property : '410000',
        code     : '410600',
        display  : '鹤壁市',
        group    : 'h',
        py       : ['hebi','hb']
    },
    {
        id       : 158,
        type     : 'city',
        property : '410000',
        code     : '410700',
        display  : '新乡市',
        group    : 'x',
        py       : ['xinxiang','xx']
    },
    {
        id       : 159,
        type     : 'city',
        property : '410000',
        code     : '410800',
        display  : '焦作市',
        group    : 'j',
        py       : ['jiaozuo','jz']
    },
    {
        id       : 160,
        type     : 'city',
        property : '410000',
        code     : '410900',
        display  : '濮阳市',
        group    : 'p',
        py       : ['puyang','py']
    },
    {
        id       : 161,
        type     : 'city',
        property : '410000',
        code     : '411000',
        display  : '许昌市',
        group    : 'x',
        py       : ['xuchang','xc']
    },
    {
        id       : 162,
        type     : 'city',
        property : '410000',
        code     : '411100',
        display  : '漯河市',
        group    : 'l',
        py       : ['luohe','lh']
    },
    {
        id       : 163,
        type     : 'city',
        property : '410000',
        code     : '411200',
        display  : '三门峡市',
        group    : 's',
        py       : ['sanmenxia','smx']
    },
    {
        id       : 164,
        type     : 'city',
        property : '410000',
        code     : '411300',
        display  : '南阳市',
        group    : 'n',
        py       : ['nanyang','ny']
    },
    {
        id       : 165,
        type     : 'city',
        property : '410000',
        code     : '411400',
        display  : '商丘市',
        group    : 's',
        py       : ['shangqiu','sq']
    },
    {
        id       : 166,
        type     : 'city',
        property : '410000',
        code     : '411500',
        display  : '信阳市',
        group    : 'x',
        py       : ['xinyang','xy']
    },
    {
        id       : 167,
        type     : 'city',
        property : '410000',
        code     : '411600',
        display  : '周口市',
        group    : 'z',
        py       : ['zhoukou','zk']
    },
    {
        id       : 168,
        type     : 'city',
        property : '410000',
        code     : '411700',
        display  : '驻马店市',
        group    : 'z',
        py       : ['zhumadian','zmd']
    },
    {
        id       : 169,
        type     : 'city',
        property : '420000',
        code     : '420100',
        display  : '武汉市',
        group    : 'w',
        py       : ['wuhan','wh']
    },
    {
        id       : 170,
        type     : 'city',
        property : '420000',
        code     : '420200',
        display  : '黄石市',
        group    : 'h',
        py       : ['huangshi','hs']
    },
    {
        id       : 171,
        type     : 'city',
        property : '420000',
        code     : '420300',
        display  : '十堰市',
        group    : 's',
        py       : ['shiyan','sy']
    },
    {
        id       : 172,
        type     : 'city',
        property : '420000',
        code     : '420500',
        display  : '宜昌市',
        group    : 'y',
        py       : ['yichang','yc']
    },
    {
        id       : 173,
        type     : 'city',
        property : '420000',
        code     : '420600',
        display  : '襄阳市',
        group    : 'x',
        py       : ['xiangyang','xy']
    },
    {
        id       : 174,
        type     : 'city',
        property : '420000',
        code     : '420700',
        display  : '鄂州市',
        group    : 'e',
        py       : ['ezhou','ez']
    },
    {
        id       : 175,
        type     : 'city',
        property : '420000',
        code     : '420800',
        display  : '荆门市',
        group    : 'j',
        py       : ['jingmen','jm']
    },
    {
        id       : 176,
        type     : 'city',
        property : '420000',
        code     : '420900',
        display  : '孝感市',
        group    : 'x',
        py       : ['xiaogan','xg']
    },
    {
        id       : 177,
        type     : 'city',
        property : '420000',
        code     : '421000',
        display  : '荆州市',
        group    : 'j',
        py       : ['jingzhou','jz']
    },
    {
        id       : 178,
        type     : 'city',
        property : '420000',
        code     : '421100',
        display  : '黄冈市',
        group    : 'h',
        py       : ['huanggang','hg']
    },
    {
        id       : 179,
        type     : 'city',
        property : '420000',
        code     : '421200',
        display  : '咸宁市',
        group    : 'x',
        py       : ['xianning','xn']
    },
    {
        id       : 180,
        type     : 'city',
        property : '420000',
        code     : '421300',
        display  : '随州市',
        group    : 's',
        py       : ['suizhou','sz']
    },
    {
        id       : 181,
        type     : 'city',
        property : '420000',
        code     : '422800',
        display  : '恩施自治州',
        group    : 'e',
        py       : ['enshizizhizhou','eszzz']
    },
    {
        id       : 182,
        type     : 'city',
        property : '430000',
        code     : '430100',
        display  : '长沙市',
        group    : 'c',
        py       : ['changsha','cs']
    },
    {
        id       : 183,
        type     : 'city',
        property : '430000',
        code     : '430200',
        display  : '株洲市',
        group    : 'z',
        py       : ['zhuzhou','zz']
    },
    {
        id       : 184,
        type     : 'city',
        property : '430000',
        code     : '430300',
        display  : '湘潭市',
        group    : 'x',
        py       : ['xiangtan','xt']
    },
    {
        id       : 185,
        type     : 'city',
        property : '430000',
        code     : '430400',
        display  : '衡阳市',
        group    : 'h',
        py       : ['hengyang','hy']
    },
    {
        id       : 186,
        type     : 'city',
        property : '430000',
        code     : '430500',
        display  : '邵阳市',
        group    : 's',
        py       : ['shaoyang','sy']
    },
    {
        id       : 187,
        type     : 'city',
        property : '430000',
        code     : '430600',
        display  : '岳阳市',
        group    : 'y',
        py       : ['yueyang','yy']
    },
    {
        id       : 188,
        type     : 'city',
        property : '430000',
        code     : '430700',
        display  : '常德市',
        group    : 'c',
        py       : ['changde','cd']
    },
    {
        id       : 189,
        type     : 'city',
        property : '430000',
        code     : '430800',
        display  : '张家界市',
        group    : 'z',
        py       : ['zhangjiajie','zjj']
    },
    {
        id       : 190,
        type     : 'city',
        property : '430000',
        code     : '430900',
        display  : '益阳市',
        group    : 'y',
        py       : ['yiyang','yy']
    },
    {
        id       : 191,
        type     : 'city',
        property : '430000',
        code     : '431000',
        display  : '郴州市',
        group    : 'c',
        py       : ['chenzhou','cz']
    },
    {
        id       : 192,
        type     : 'city',
        property : '430000',
        code     : '431100',
        display  : '永州市',
        group    : 'y',
        py       : ['yongzhou','yz']
    },
    {
        id       : 193,
        type     : 'city',
        property : '430000',
        code     : '431200',
        display  : '怀化市',
        group    : 'h',
        py       : ['huaihua','hh']
    },
    {
        id       : 194,
        type     : 'city',
        property : '430000',
        code     : '431300',
        display  : '娄底市',
        group    : 'l',
        py       : ['loudi','ld']
    },
    {
        id       : 195,
        type     : 'city',
        property : '430000',
        code     : '433100',
        display  : '湘西自治州',
        group    : 'x',
        py       : ['xiangxizizhizhou','xxzzz']
    },
    {
        id       : 196,
        type     : 'city',
        property : '440000',
        code     : '440100',
        display  : '广州市',
        group    : 'g',
        py       : ['guangzhou','gz']
    },
    {
        id       : 197,
        type     : 'city',
        property : '440000',
        code     : '440200',
        display  : '韶关市',
        group    : 's',
        py       : ['shaoguan','sg']
    },
    {
        id       : 198,
        type     : 'city',
        property : '440000',
        code     : '440300',
        display  : '深圳市',
        group    : 's',
        py       : ['shenzhen','sz']
    },
    {
        id       : 199,
        type     : 'city',
        property : '440000',
        code     : '440400',
        display  : '珠海市',
        group    : 'z',
        py       : ['zhuhai','zh']
    },
    {
        id       : 200,
        type     : 'city',
        property : '440000',
        code     : '440500',
        display  : '汕头市',
        group    : 's',
        py       : ['shantou','st']
    },
    {
        id       : 201,
        type     : 'city',
        property : '440000',
        code     : '440600',
        display  : '佛山市',
        group    : 'f',
        py       : ['foshan','fs']
    },
    {
        id       : 202,
        type     : 'city',
        property : '440000',
        code     : '440700',
        display  : '江门市',
        group    : 'j',
        py       : ['jiangmen','jm']
    },
    {
        id       : 203,
        type     : 'city',
        property : '440000',
        code     : '440800',
        display  : '湛江市',
        group    : 'z',
        py       : ['zhanjiang','zj']
    },
    {
        id       : 204,
        type     : 'city',
        property : '440000',
        code     : '440900',
        display  : '茂名市',
        group    : 'm',
        py       : ['maoming','mm']
    },
    {
        id       : 205,
        type     : 'city',
        property : '440000',
        code     : '441200',
        display  : '肇庆市',
        group    : 'z',
        py       : ['zhaoqing','zq']
    },
    {
        id       : 206,
        type     : 'city',
        property : '440000',
        code     : '441300',
        display  : '惠州市',
        group    : 'h',
        py       : ['huizhou','hz']
    },
    {
        id       : 207,
        type     : 'city',
        property : '440000',
        code     : '441400',
        display  : '梅州市',
        group    : 'm',
        py       : ['meizhou','mz']
    },
    {
        id       : 208,
        type     : 'city',
        property : '440000',
        code     : '441500',
        display  : '汕尾市',
        group    : 's',
        py       : ['shanwei','sw']
    },
    {
        id       : 209,
        type     : 'city',
        property : '440000',
        code     : '441600',
        display  : '河源市',
        group    : 'h',
        py       : ['heyuan','hy']
    },
    {
        id       : 210,
        type     : 'city',
        property : '440000',
        code     : '441700',
        display  : '阳江市',
        group    : 'y',
        py       : ['yangjiang','yj']
    },
    {
        id       : 211,
        type     : 'city',
        property : '440000',
        code     : '441800',
        display  : '清远市',
        group    : 'q',
        py       : ['qingyuan','qy']
    },
    {
        id       : 212,
        type     : 'city',
        property : '440000',
        code     : '441900',
        display  : '东莞市',
        group    : 'd',
        py       : ['dongguan','dg']
    },
    {
        id       : 213,
        type     : 'city',
        property : '440000',
        code     : '442000',
        display  : '中山市',
        group    : 'z',
        py       : ['zhongshan','zs']
    },
    {
        id       : 214,
        type     : 'city',
        property : '440000',
        code     : '445100',
        display  : '潮州市',
        group    : 'c',
        py       : ['chaozhou','cz']
    },
    {
        id       : 215,
        type     : 'city',
        property : '440000',
        code     : '445200',
        display  : '揭阳市',
        group    : 'j',
        py       : ['jieyang','jy']
    },
    {
        id       : 216,
        type     : 'city',
        property : '440000',
        code     : '445300',
        display  : '云浮市',
        group    : 'y',
        py       : ['yunfu','yf']
    },
    {
        id       : 217,
        type     : 'city',
        property : '450000',
        code     : '450100',
        display  : '南宁市',
        group    : 'n',
        py       : ['nanning','nn']
    },
    {
        id       : 218,
        type     : 'city',
        property : '450000',
        code     : '450200',
        display  : '柳州市',
        group    : 'l',
        py       : ['liuzhou','lz']
    },
    {
        id       : 219,
        type     : 'city',
        property : '450000',
        code     : '450300',
        display  : '桂林市',
        group    : 'g',
        py       : ['guilin','gl']
    },
    {
        id       : 220,
        type     : 'city',
        property : '450000',
        code     : '450400',
        display  : '梧州市',
        group    : 'w',
        py       : ['wuzhou','wz']
    },
    {
        id       : 221,
        type     : 'city',
        property : '450000',
        code     : '450500',
        display  : '北海市',
        group    : 'b',
        py       : ['beihai','bh']
    },
    {
        id       : 222,
        type     : 'city',
        property : '450000',
        code     : '450600',
        display  : '防城港市',
        group    : 'f',
        py       : ['fangchenggang','fcg']
    },
    {
        id       : 223,
        type     : 'city',
        property : '450000',
        code     : '450700',
        display  : '钦州市',
        group    : 'q',
        py       : ['qinzhou','qz']
    },
    {
        id       : 224,
        type     : 'city',
        property : '450000',
        code     : '450800',
        display  : '贵港市',
        group    : 'g',
        py       : ['guigang','gg']
    },
    {
        id       : 225,
        type     : 'city',
        property : '450000',
        code     : '450900',
        display  : '玉林市',
        group    : 'y',
        py       : ['yulin','yl']
    },
    {
        id       : 226,
        type     : 'city',
        property : '450000',
        code     : '451000',
        display  : '百色市',
        group    : 'b',
        py       : ['baise','bs']
    },
    {
        id       : 227,
        type     : 'city',
        property : '450000',
        code     : '451100',
        display  : '贺州市',
        group    : 'h',
        py       : ['hezhou','hz']
    },
    {
        id       : 228,
        type     : 'city',
        property : '450000',
        code     : '451200',
        display  : '河池市',
        group    : 'h',
        py       : ['hechi','hc']
    },
    {
        id       : 229,
        type     : 'city',
        property : '450000',
        code     : '451300',
        display  : '来宾市',
        group    : 'l',
        py       : ['laibin','lb']
    },
    {
        id       : 230,
        type     : 'city',
        property : '450000',
        code     : '451400',
        display  : '崇左市',
        group    : 'c',
        py       : ['chongzuo','cz']
    },
    {
        id       : 231,
        type     : 'city',
        property : '460000',
        code     : '460100',
        display  : '海口市',
        group    : 'h',
        py       : ['haikou','hk']
    },
    {
        id       : 232,
        type     : 'city',
        property : '460000',
        code     : '460200',
        display  : '三亚市',
        group    : 's',
        py       : ['sanya','sy']
    },
    {
        id       : 233,
        type     : 'city',
        property : '500000',
        code     : '500000',
        display  : '重庆市',
        group    : 'z',
        py       : ['zhongqing','zq']
    },
    {
        id       : 234,
        type     : 'city',
        property : '510000',
        code     : '510100',
        display  : '成都市',
        group    : 'c',
        py       : ['chengdu','cd']
    },
    {
        id       : 235,
        type     : 'city',
        property : '510000',
        code     : '510300',
        display  : '自贡市',
        group    : 'z',
        py       : ['zigong','zg']
    },
    {
        id       : 236,
        type     : 'city',
        property : '510000',
        code     : '510400',
        display  : '攀枝花市',
        group    : 'p',
        py       : ['panzhihua','pzh']
    },
    {
        id       : 237,
        type     : 'city',
        property : '510000',
        code     : '510500',
        display  : '泸州市',
        group    : 'l',
        py       : ['luzhou','lz']
    },
    {
        id       : 238,
        type     : 'city',
        property : '510000',
        code     : '510600',
        display  : '德阳市',
        group    : 'd',
        py       : ['deyang','dy']
    },
    {
        id       : 239,
        type     : 'city',
        property : '510000',
        code     : '510700',
        display  : '绵阳市',
        group    : 'm',
        py       : ['mianyang','my']
    },
    {
        id       : 240,
        type     : 'city',
        property : '510000',
        code     : '510800',
        display  : '广元市',
        group    : 'g',
        py       : ['guangyuan','gy']
    },
    {
        id       : 241,
        type     : 'city',
        property : '510000',
        code     : '510900',
        display  : '遂宁市',
        group    : 's',
        py       : ['suining','sn']
    },
    {
        id       : 242,
        type     : 'city',
        property : '510000',
        code     : '511000',
        display  : '内江市',
        group    : 'n',
        py       : ['neijiang','nj']
    },
    {
        id       : 243,
        type     : 'city',
        property : '510000',
        code     : '511100',
        display  : '乐山市',
        group    : 'l',
        py       : ['leshan','ls']
    },
    {
        id       : 244,
        type     : 'city',
        property : '510000',
        code     : '511300',
        display  : '南充市',
        group    : 'n',
        py       : ['nanchong','nc']
    },
    {
        id       : 245,
        type     : 'city',
        property : '510000',
        code     : '511400',
        display  : '眉山市',
        group    : 'm',
        py       : ['meishan','ms']
    },
    {
        id       : 246,
        type     : 'city',
        property : '510000',
        code     : '511500',
        display  : '宜宾市',
        group    : 'y',
        py       : ['yibin','yb']
    },
    {
        id       : 247,
        type     : 'city',
        property : '510000',
        code     : '511600',
        display  : '广安市',
        group    : 'g',
        py       : ['guangan','ga']
    },
    {
        id       : 248,
        type     : 'city',
        property : '510000',
        code     : '511700',
        display  : '达州市',
        group    : 'd',
        py       : ['dazhou','dz']
    },
    {
        id       : 249,
        type     : 'city',
        property : '510000',
        code     : '511800',
        display  : '雅安市',
        group    : 'y',
        py       : ['yaan','ya']
    },
    {
        id       : 250,
        type     : 'city',
        property : '510000',
        code     : '511900',
        display  : '巴中市',
        group    : 'b',
        py       : ['bazhong','bz']
    },
    {
        id       : 251,
        type     : 'city',
        property : '510000',
        code     : '512000',
        display  : '资阳市',
        group    : 'z',
        py       : ['ziyang','zy']
    },
    {
        id       : 252,
        type     : 'city',
        property : '510000',
        code     : '513200',
        display  : '阿坝自治州',
        group    : 'a',
        py       : ['abazizhizhou','abzzz']
    },
    {
        id       : 253,
        type     : 'city',
        property : '510000',
        code     : '513300',
        display  : '甘孜自治州',
        group    : 'g',
        py       : ['ganzizizhizhou','gzzzz']
    },
    {
        id       : 254,
        type     : 'city',
        property : '510000',
        code     : '513400',
        display  : '凉山自治州',
        group    : 'l',
        py       : ['liangshanzizhizhou','lszzz']
    },
    {
        id       : 255,
        type     : 'city',
        property : '520000',
        code     : '520100',
        display  : '贵阳市',
        group    : 'g',
        py       : ['guiyang','gy']
    },
    {
        id       : 256,
        type     : 'city',
        property : '520000',
        code     : '520200',
        display  : '六盘水市',
        group    : 'l',
        py       : ['liupanshui','lps']
    },
    {
        id       : 257,
        type     : 'city',
        property : '520000',
        code     : '520300',
        display  : '遵义市',
        group    : 'z',
        py       : ['zunyi','zy']
    },
    {
        id       : 258,
        type     : 'city',
        property : '520000',
        code     : '520400',
        display  : '安顺市',
        group    : 'a',
        py       : ['anshun','as']
    },
    {
        id       : 259,
        type     : 'city',
        property : '520000',
        code     : '522200',
        display  : '铜仁地区',
        group    : 't',
        py       : ['tongrendiqu','trdq']
    },
    {
        id       : 260,
        type     : 'city',
        property : '520000',
        code     : '522300',
        display  : '黔西南自治州',
        group    : 'q',
        py       : ['qianxinanzizhizhou','qxnzzz']
    },
    {
        id       : 261,
        type     : 'city',
        property : '520000',
        code     : '522400',
        display  : '毕节地区',
        group    : 'b',
        py       : ['bijiediqu','bjdq']
    },
    {
        id       : 262,
        type     : 'city',
        property : '520000',
        code     : '522600',
        display  : '黔东南自治州',
        group    : 'q',
        py       : ['qiandongnanzizhizhou','qdnzzz']
    },
    {
        id       : 263,
        type     : 'city',
        property : '520000',
        code     : '522700',
        display  : '黔南自治州',
        group    : 'q',
        py       : ['qiannanzizhizhou','qnzzz']
    },
    {
        id       : 264,
        type     : 'city',
        property : '530000',
        code     : '530100',
        display  : '昆明市',
        group    : 'k',
        py       : ['kunming','km']
    },
    {
        id       : 265,
        type     : 'city',
        property : '530000',
        code     : '530300',
        display  : '曲靖市',
        group    : 'q',
        py       : ['qujing','qj']
    },
    {
        id       : 266,
        type     : 'city',
        property : '530000',
        code     : '530400',
        display  : '玉溪市',
        group    : 'y',
        py       : ['yuxi','yx']
    },
    {
        id       : 267,
        type     : 'city',
        property : '530000',
        code     : '530500',
        display  : '保山市',
        group    : 'b',
        py       : ['baoshan','bs']
    },
    {
        id       : 268,
        type     : 'city',
        property : '530000',
        code     : '530600',
        display  : '昭通市',
        group    : 'z',
        py       : ['zhaotong','zt']
    },
    {
        id       : 269,
        type     : 'city',
        property : '530000',
        code     : '530700',
        display  : '丽江市',
        group    : 'l',
        py       : ['lijiang','lj']
    },
    {
        id       : 270,
        type     : 'city',
        property : '530000',
        code     : '530900',
        display  : '临沧市',
        group    : 'l',
        py       : ['lincang','lc']
    },
    {
        id       : 271,
        type     : 'city',
        property : '530000',
        code     : '532300',
        display  : '楚雄自治州',
        group    : 'c',
        py       : ['chuxiongzizhizhou','cxzzz']
    },
    {
        id       : 272,
        type     : 'city',
        property : '530000',
        code     : '532500',
        display  : '红河自治州',
        group    : 'h',
        py       : ['honghezizhizhou','hhzzz']
    },
    {
        id       : 273,
        type     : 'city',
        property : '530000',
        code     : '532600',
        display  : '文山自治州',
        group    : 'w',
        py       : ['wenshanzizhizhou','wszzz']
    },
    {
        id       : 274,
        type     : 'city',
        property : '530000',
        code     : '532700',
        display  : '思茅市',
        group    : 's',
        py       : ['simao','sm']
    },
    {
        id       : 275,
        type     : 'city',
        property : '530000',
        code     : '532800',
        display  : '西双版纳自治州',
        group    : 'x',
        py       : ['xishuangbannazizhizhou','xsbnzzz']
    },
    {
        id       : 276,
        type     : 'city',
        property : '530000',
        code     : '532900',
        display  : '大理自治州',
        group    : 'd',
        py       : ['dalizizhizhou','dlzzz']
    },
    {
        id       : 277,
        type     : 'city',
        property : '530000',
        code     : '533100',
        display  : '德宏自治州',
        group    : 'd',
        py       : ['dehongzizhizhou','dhzzz']
    },
    {
        id       : 278,
        type     : 'city',
        property : '530000',
        code     : '533300',
        display  : '怒江自治州',
        group    : 'n',
        py       : ['nujiangzizhizhou','njzzz']
    },
    {
        id       : 279,
        type     : 'city',
        property : '530000',
        code     : '533400',
        display  : '迪庆自治州',
        group    : 'd',
        py       : ['diqingzizhizhou','dqzzz']
    },
    {
        id       : 280,
        type     : 'city',
        property : '540000',
        code     : '540100',
        display  : '拉萨市',
        group    : 'l',
        py       : ['lasa','ls']
    },
    {
        id       : 281,
        type     : 'city',
        property : '540000',
        code     : '542100',
        display  : '昌都地区',
        group    : 'c',
        py       : ['changdudiqu','cddq']
    },
    {
        id       : 282,
        type     : 'city',
        property : '540000',
        code     : '542200',
        display  : '山南地区',
        group    : 's',
        py       : ['shannandiqu','sndq']
    },
    {
        id       : 283,
        type     : 'city',
        property : '540000',
        code     : '542300',
        display  : '日喀则地区',
        group    : 'r',
        py       : ['rikazediqu','rkzdq']
    },
    {
        id       : 284,
        type     : 'city',
        property : '540000',
        code     : '542400',
        display  : '那曲地区',
        group    : 'n',
        py       : ['naqudiqu','nqdq']
    },
    {
        id       : 285,
        type     : 'city',
        property : '540000',
        code     : '542500',
        display  : '阿里地区',
        group    : 'a',
        py       : ['alidiqu','aldq']
    },
    {
        id       : 286,
        type     : 'city',
        property : '540000',
        code     : '542600',
        display  : '林芝地区',
        group    : 'l',
        py       : ['linzhidiqu','lzdq']
    },
    {
        id       : 287,
        type     : 'city',
        property : '610000',
        code     : '610100',
        display  : '西安市',
        group    : 'x',
        py       : ['xian','xa']
    },
    {
        id       : 288,
        type     : 'city',
        property : '610000',
        code     : '610200',
        display  : '铜川市',
        group    : 't',
        py       : ['tongchuan','tc']
    },
    {
        id       : 289,
        type     : 'city',
        property : '610000',
        code     : '610300',
        display  : '宝鸡市',
        group    : 'b',
        py       : ['baoji','bj']
    },
    {
        id       : 290,
        type     : 'city',
        property : '610000',
        code     : '610400',
        display  : '咸阳市',
        group    : 'x',
        py       : ['xianyang','xy']
    },
    {
        id       : 291,
        type     : 'city',
        property : '610000',
        code     : '610500',
        display  : '渭南市',
        group    : 'w',
        py       : ['weinan','wn']
    },
    {
        id       : 292,
        type     : 'city',
        property : '610000',
        code     : '610600',
        display  : '延安市',
        group    : 'y',
        py       : ['yanan','ya']
    },
    {
        id       : 293,
        type     : 'city',
        property : '610000',
        code     : '610700',
        display  : '汉中市',
        group    : 'h',
        py       : ['hanzhong','hz']
    },
    {
        id       : 294,
        type     : 'city',
        property : '610000',
        code     : '610800',
        display  : '榆林市',
        group    : 'y',
        py       : ['yulin','yl']
    },
    {
        id       : 295,
        type     : 'city',
        property : '610000',
        code     : '610900',
        display  : '安康市',
        group    : 'a',
        py       : ['ankang','ak']
    },
    {
        id       : 296,
        type     : 'city',
        property : '610000',
        code     : '611000',
        display  : '商洛市',
        group    : 's',
        py       : ['shangluo','sl']
    },
    {
        id       : 297,
        type     : 'city',
        property : '620000',
        code     : '620100',
        display  : '兰州市',
        group    : 'l',
        py       : ['lanzhou','lz']
    },
    {
        id       : 298,
        type     : 'city',
        property : '620000',
        code     : '620200',
        display  : '嘉峪关市',
        group    : 'j',
        py       : ['jiayuguan','jyg']
    },
    {
        id       : 299,
        type     : 'city',
        property : '620000',
        code     : '620300',
        display  : '金昌市',
        group    : 'j',
        py       : ['jinchang','jc']
    },
    {
        id       : 300,
        type     : 'city',
        property : '620000',
        code     : '620400',
        display  : '白银市',
        group    : 'b',
        py       : ['baiyin','by']
    },
    {
        id       : 301,
        type     : 'city',
        property : '620000',
        code     : '620500',
        display  : '天水市',
        group    : 't',
        py       : ['tianshui','ts']
    },
    {
        id       : 302,
        type     : 'city',
        property : '620000',
        code     : '620600',
        display  : '武威市',
        group    : 'w',
        py       : ['wuwei','ww']
    },
    {
        id       : 303,
        type     : 'city',
        property : '620000',
        code     : '620700',
        display  : '张掖市',
        group    : 'z',
        py       : ['zhangye','zy']
    },
    {
        id       : 304,
        type     : 'city',
        property : '620000',
        code     : '620800',
        display  : '平凉市',
        group    : 'p',
        py       : ['pingliang','pl']
    },
    {
        id       : 305,
        type     : 'city',
        property : '620000',
        code     : '620900',
        display  : '酒泉市',
        group    : 'j',
        py       : ['jiuquan','jq']
    },
    {
        id       : 306,
        type     : 'city',
        property : '620000',
        code     : '621000',
        display  : '庆阳市',
        group    : 'q',
        py       : ['qingyang','qy']
    },
    {
        id       : 307,
        type     : 'city',
        property : '620000',
        code     : '621100',
        display  : '定西市',
        group    : 'd',
        py       : ['dingxi','dx']
    },
    {
        id       : 308,
        type     : 'city',
        property : '620000',
        code     : '622600',
        display  : '陇南地区',
        group    : 'l',
        py       : ['longnandiqu','lndq']
    },
    {
        id       : 309,
        type     : 'city',
        property : '620000',
        code     : '622900',
        display  : '临夏自治州',
        group    : 'l',
        py       : ['linxiazizhizhou','lxzzz']
    },
    {
        id       : 310,
        type     : 'city',
        property : '620000',
        code     : '623000',
        display  : '甘南自治州',
        group    : 'g',
        py       : ['gannanzizhizhou','gnzzz']
    },
    {
        id       : 311,
        type     : 'city',
        property : '630000',
        code     : '630100',
        display  : '西宁市',
        group    : 'x',
        py       : ['xining','xn']
    },
    {
        id       : 312,
        type     : 'city',
        property : '630000',
        code     : '632100',
        display  : '海东地区',
        group    : 'h',
        py       : ['haidongdiqu','hddq']
    },
    {
        id       : 313,
        type     : 'city',
        property : '630000',
        code     : '632200',
        display  : '海北自治州',
        group    : 'h',
        py       : ['haibeizizhizhou','hbzzz']
    },
    {
        id       : 314,
        type     : 'city',
        property : '630000',
        code     : '632300',
        display  : '黄南自治州',
        group    : 'h',
        py       : ['huangnanzizhizhou','hnzzz']
    },
    {
        id       : 315,
        type     : 'city',
        property : '630000',
        code     : '632500',
        display  : '海南自治州',
        group    : 'h',
        py       : ['hainanzizhizhou','hnzzz']
    },
    {
        id       : 316,
        type     : 'city',
        property : '630000',
        code     : '632600',
        display  : '果洛自治州',
        group    : 'g',
        py       : ['guoluozizhizhou','glzzz']
    },
    {
        id       : 317,
        type     : 'city',
        property : '630000',
        code     : '632700',
        display  : '玉树自治州',
        group    : 'y',
        py       : ['yushuzizhizhou','yszzz']
    },
    {
        id       : 318,
        type     : 'city',
        property : '630000',
        code     : '632800',
        display  : '海西自治州',
        group    : 'h',
        py       : ['haixizizhizhou','hxzzz']
    },
    {
        id       : 319,
        type     : 'city',
        property : '640000',
        code     : '640100',
        display  : '银川市',
        group    : 'y',
        py       : ['yinchuan','yc']
    },
    {
        id       : 320,
        type     : 'city',
        property : '640000',
        code     : '640200',
        display  : '石嘴山市',
        group    : 's',
        py       : ['shizuishan','szs']
    },
    {
        id       : 321,
        type     : 'city',
        property : '640000',
        code     : '640300',
        display  : '吴忠市',
        group    : 'w',
        py       : ['wuzhong','wz']
    },
    {
        id       : 322,
        type     : 'city',
        property : '640000',
        code     : '640400',
        display  : '固原市',
        group    : 'g',
        py       : ['guyuan','gy']
    },
    {
        id       : 323,
        type     : 'city',
        property : '640000',
        code     : '640500',
        display  : '中卫市',
        group    : 'z',
        py       : ['zhongwei','zw']
    },
    {
        id       : 324,
        type     : 'city',
        property : '650000',
        code     : '650100',
        display  : '乌鲁木齐市',
        group    : 'w',
        py       : ['wulumuqi','wlmq']
    },
    {
        id       : 325,
        type     : 'city',
        property : '650000',
        code     : '650200',
        display  : '克拉玛依市',
        group    : 'k',
        py       : ['kelamayi','klmy']
    },
    {
        id       : 326,
        type     : 'city',
        property : '650000',
        code     : '652100',
        display  : '吐鲁番地区',
        group    : 't',
        py       : ['tulufandiqu','tlfdq']
    },
    {
        id       : 327,
        type     : 'city',
        property : '650000',
        code     : '652200',
        display  : '哈密地区',
        group    : 'h',
        py       : ['hamidiqu','hmdq']
    },
    {
        id       : 328,
        type     : 'city',
        property : '650000',
        code     : '652300',
        display  : '昌吉回族自治州',
        group    : 'c',
        py       : ['changjihuizuzizhizhou','cjhzzzz']
    },
    {
        id       : 329,
        type     : 'city',
        property : '650000',
        code     : '652700',
        display  : '博尔塔拉蒙古自治州',
        group    : 'b',
        py       : ['boertalamengguzizhizhou','betlmgzzz']
    },
    {
        id       : 330,
        type     : 'city',
        property : '650000',
        code     : '652800',
        display  : '巴音郭楞蒙古自治州',
        group    : 'b',
        py       : ['bayinguolengmengguzizhizhou','byglmgzzz']
    },
    {
        id       : 331,
        type     : 'city',
        property : '650000',
        code     : '652900',
        display  : '阿克苏地区',
        group    : 'a',
        py       : ['akesudiqu','aksdq']
    },
    {
        id       : 332,
        type     : 'city',
        property : '650000',
        code     : '653000',
        display  : '克孜勒苏柯尔克孜自治州',
        group    : 'k',
        py       : ['kezilesukeerkezizizhizhou','kzlskekzzzz']
    },
    {
        id       : 333,
        type     : 'city',
        property : '650000',
        code     : '653100',
        display  : '喀什地区',
        group    : 'k',
        py       : ['kashidiqu','ksdq']
    },
    {
        id       : 334,
        type     : 'city',
        property : '650000',
        code     : '653200',
        display  : '和田地区',
        group    : 'h',
        py       : ['hetiandiqu','htdq']
    },
    {
        id       : 335,
        type     : 'city',
        property : '650000',
        code     : '654000',
        display  : '伊犁哈萨克自治州',
        group    : 'y',
        py       : ['yilihasakezizhizhou','ylhskzzz']
    },
    {
        id       : 336,
        type     : 'city',
        property : '650000',
        code     : '654200',
        display  : '塔城地区',
        group    : 't',
        py       : ['tachengdiqu','tcdq']
    },
    {
        id       : 337,
        type     : 'city',
        property : '650000',
        code     : '654300',
        display  : '阿勒泰地区',
        group    : 'a',
        py       : ['aletaidiqu','altdq']
    },
    {
        id       : 338,
        type     : 'city',
        property : '710000',
        code     : '710000',
        display  : '台湾省',
        group    : 't',
        py       : ['taiwan','tw']
    },
    {
        id       : 339,
        type     : 'city',
        property : '810000',
        code     : '810000',
        display  : '香港特别行政区',
        group    : 'x',
        py       : ['xianggangtebiehangzhengqu','xgtbhzq']
    },
    {
        id       : 340,
        type     : 'city',
        property : '820000',
        code     : '820000',
        display  : '澳门特别行政区',
        group    : 'a',
        py       : ['aomentebiehangzhengqu','amtbhzq']
    }];


function Cities() {

}

/**
 * 城市
 * @constructor
 */
Cities.prototype = {
    /**
     * 取得城市数据
     * @function
     * @name getCites
     * @return {array}
     */
    getCites           : function () {
        return cities;
    },
    /**
     * 取得某个省的所有市
     * @function
     * @name getCitesByProperty
     * @param {string} property - 过滤字段名称
     * @return {array} 取得某个省的所有市
     */
    getCitesByProperty : function (property) {
        return _filter(cities,property);
    },
    /**
     * 取得根据拼音分组后的数据
     * @function
     * @name getCitesDic
     * @param {string} property - 分组的字段名称
     * @return {hash} 返回分组数据(这里多数以拼音分组)
     */
    getCitesDic        : function (property) {
        return _groupBy(cities,property);
    },

    /**
     * 根据过滤项取得过滤后的数据
     * @function
     * @name getFilterCites
     * @param {array} property - 过滤字段名称默认是display和py
     * @param {string} values - 过滤的值
     * @return {hash} 返回分组数据(这里多数以拼音分组)
     */
    getFilterCites      : function (property,values) {
        return _.filter(cities,function (item) {
            return !!(_.includes(item[property[0]][0],values) === true
            || _.includes(item[property[0]][1],values) === true
            || _.includes(item[property[1]],values) === true);
        });
    },
    /**
     * 根据过滤项取得过滤后的数据
     * @function
     * @name getFilterCites
     * @param {array} properties - 过滤字段名称默认是display和py
     * @param {string} values - 过滤的值
     * @param {array} collection - 过滤省后的数据集合,可以不传
     * @return {hash} 返回分组数据(这里多数以拼音分组)
     */
    getFilterCollection : function (properties,values,collection) {
        // 根据原始市 进行检索
        return _.filter(collection,function (item) {
            for (var property in properties) if (_.includes(item[property],values) === true) {
                return true;
            }

            return false;
        });
    }
};

/** @module Cities */
module.exports = Cities;

