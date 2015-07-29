"use strict";
/**
 * IOS滑块控件
 * @constructor
 */
function Toggles() {

}

var start     = {};
var touchMove = false;
var distanceX = false;
var values;
values = [];

Toggles.prototype = {
    /**
     * 初始化滑块
     * @function
     * @name initToggle
     * @param {string} name - 控件ID
     */
    initToggle  : function (name) {

        // 取得滑块的DIV元素
        var toggle = document.getElementById(name);

        // 判断是否位空
        if (!toggle) {
            return;
        }

        // 添加触屏开始事件
        toggle.addEventListener('touchstart',function (e) {
            e = e.originalEvent || e;

            var handle      = toggle.querySelector('.toggle-handle');
            var toggleWidth = toggle.clientWidth;
            var handleWidth = handle.clientWidth;
            var offset      = toggle.classList.contains('active') ? (toggleWidth - handleWidth) : 0;

            /** @namespace e.touches */
            start     = {pageX : e.touches[0].pageX - offset,pageY : e.touches[0].pageY};
            touchMove = false;
        });

        // 添加触屏移动事件
        toggle.addEventListener('touchmove',function (e) {
            e = e.originalEvent || e;

            if (e.touches.length > 1) {
                return; // Exit if a pinch
            }

            if (!toggle) {
                return;
            }

            var handle      = toggle.querySelector('.toggle-handle');
            var current     = e.touches[0];
            var toggleWidth = toggle.clientWidth;
            var handleWidth = handle.clientWidth;
            var offset      = toggleWidth - handleWidth;

            touchMove = true;
            distanceX = current.pageX - start.pageX;

            if (Math.abs(distanceX) < Math.abs(current.pageY - start.pageY)) {
                return;
            }

            e.preventDefault();

            if (distanceX < 0) {
                return (handle.style.webkitTransform = 'translate3d(0,0,0)');
            }
            if (distanceX > offset) {
                return (handle.style.webkitTransform = 'translate3d(' + offset + 'px,0,0)');
            }

            handle.style.webkitTransform = 'translate3d(' + distanceX + 'px,0,0)';

            toggle.classList[(distanceX > (toggleWidth / 2 - handleWidth / 2)) ? 'add' : 'remove']('active');
        });

        // 添加触屏结束事件
        toggle.addEventListener('touchend',function (e) {
            if (!toggle) {
                return;
            }

            var handle      = toggle.querySelector('.toggle-handle');
            var toggleWidth = toggle.clientWidth;
            var handleWidth = handle.clientWidth;
            var offset      = (toggleWidth - handleWidth);
            var slideOn     = (!touchMove && !toggle.classList.contains('active')) || (touchMove && (distanceX > (toggleWidth / 2 - handleWidth / 2)));

            handle.style.webkitTransform = slideOn ? 'translate3d(' + offset + 'px,0,0)' : 'translate3d(0,0,0)';

            toggle.classList[slideOn ? 'add' : 'remove']('active');

            e = new CustomEvent('toggle',{
                detail     : {isActive : slideOn},
                bubbles    : true,
                cancelable : true
            });

            toggle.dispatchEvent(e);

            touchMove    = false;
            values[name] = slideOn;
        });
    },
    /**
     * 初始化多个滑块
     * @function
     * @name initToggles
     * @param {Array} names - 多个控件ID
     */
    initToggles : function (names) {
        for (var i = 0; i < names.length; i++) {
            this.initToggle(names[i]);
        }
    },
    /**
     * 取得滑块值
     * @function
     * @name getValue
     * @param {string} name - 控件ID
     */
    getValue    : function (name) {
        return values[name];
    }
};

/** @module Toggles */
module.exports = Toggles;

