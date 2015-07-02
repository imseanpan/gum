'use strict';

/**
 * 虚拟模态窗口
 * @constructor
 */
function Modal() {

}

Modal.prototype = {
    findModals : function (target) {
        var i;
        var modals = document.querySelectorAll('a');

        for (; target && target !== document; target = target.parentNode) {
            for (i = modals.length; i--;) {
                if (modals[i] === target) {
                    return target;
                }
            }
        }
    },
    getModal   : function (event) {
        //var modalToggle = findModals(event.target);
        //if (modalToggle && modalToggle.hash) {
        //    return document.querySelector(modalToggle.hash);
        //}
        //event.classList.toggle('active');
        //return;
        var modelView = document.getElementById(event);
        if (modelView) {
            modelView.classList.toggle('active');
        }
    },
    hideModal  : function (event) {
        var modelView = document.getElementById(event);
        if (modelView) {
            modelView.classList.remove('active');
        }
    },
    init       : function () {

    }
}

/** @module Modal */
module.exports  = Modal;
//
//!(function () {
//    var findModals = function (target) {
//        var i;
//        var modals = document.querySelectorAll('a');
//
//        for (; target && target !== document; target = target.parentNode) {
//            for (i = modals.length; i--;) {
//                if (modals[i] === target) {
//                    return target;
//                }
//            }
//        }
//    };
//
//    var getModal = function (event) {
//        var modalToggle = findModals(event.target);
//        if (modalToggle && modalToggle.hash) {
//            return document.querySelector(modalToggle.hash);
//        }
//    };
//
//    window.addEventListener('touchend',function (event) {
//        var modal = getModal(event);
//        if (modal) {
//            if (modal && modal.classList.contains('modal')) {
//                modal.classList.toggle('active');
//            }
//            event.preventDefault(); // prevents rewriting url (apps can still use hash values in url)
//        }
//    });
//}());
