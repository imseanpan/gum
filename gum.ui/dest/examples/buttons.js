/*TMODJS:{"version":1,"md5":"e450005822659e3cf5bfd6029d4fc562"}*/
var template=require("../template");module.exports=template("examples/buttons",'<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <title>Gum.SASS template page</title>  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">  <meta name="apple-mobile-web-app-capable" content="yes"> <meta name="apple-mobile-web-app-status-bar-style" content="black">  <link href="../../gum.ui.sass/gum.css" rel="stylesheet"> </head>  <body ontouchstart="">  <header class="bar bar-nav"> <h1 class="title">\u6309\u94ae</h1> </header>  <div class="content"> <div style="height:40px;"></div> <button class="btn btn-negative btn-block">Block button</button> <div class="table-view-btn-block"> <button class="btn btn-negative btn-block">Block button</button> </div> <div class="table-view-btn-block"> <button class="btn btn-negative btn-block active">Block button click</button> </div> <div class="table-view-btn-block"> <button class="btn btn-negative btn-block disabled">Block button click</button> </div> <div class="table-view-pay grid"> <div class="grid-cell col-xs-6 left"> <span>\u5408\u8ba1</span> <span>\uffe59999999.00</span> </div> <div class="grid-cell col-xs-6 right"> <button class="btn btn-negative btn-block">\u7acb\u5373\u652f\u4ed8</button> </div> </div> <div class="table-view-choose grid"> <div class="grid-cell col-xs-6 left"> <a class="btn btn-negative btn-block btn-outlined">\u8df3\u8fc7</a> </div> <div class="grid-cell col-xs-6 right"> <a class="btn btn-negative btn-block">\u786e\u5b9a</a> </div> </div> </div> </body> </html>');