// ==UserScript==
// @name         findBadMan
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @include    https://trade.taobao.com/trade/itemlist/*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==

(function() {
    setTimeout(function(){
        //$("a:contains('详情')").html("wocoa");
        console.log($("a:contains('详情')").length);
        console.log($("a:contains('详情')").attr("href"));
        alert($("a:contains('详情')").get()[1]);
    },1000);
})();
//全局变量区域

//获取所有的连接并且找到订单号码放入map
    function doList(){
        return true;
    }
//根据订单修改连接判断这个的连接的页面是否出现差评时的特征返回Ture或者False
    function findBadManKeyWorld(link){
        return true;
    }
//新建list存入值为Ture的订单号,并且清空map的值
    function getTheList(){

    }
//通过list里边的值来渲染页面的订单内容
    function doSomeThing(){

    }
