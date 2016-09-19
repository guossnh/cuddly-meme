// ==UserScript==
// @name         sell_all_add
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @grant        none
// @include    https://trade.taobao.com/trade/itemlist/*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==

//这是页面列表元素
var listdate = document.getElementsByClassName("item-mod__trade-order___2LnGB");
var title = 


function check_and_change() {
    for (var i = 0; i < listdate.length; i++) {
        $(listdate[i]).children(".ml-mod__container___1zaKJ.production-mod__production___3ZePJ.suborder-mod__production___1eyM1").children("div:last").children("p:first").children("a").children("span:eq(1)").html()
    }
}


check_and_change();
$(".pagination-item").click(function() {
    //check_and_change();
    setTimeout(check_and_change, 1000);
});
$(".pagination-options-go").click(function() {
    //check_and_change();
    setTimeout(check_and_change, 1000);
});


//$(".ml-mod__container___1zaKJ.production-mod__production___3ZePJ.suborder-mod__production___1eyM1:first").children("div:last").children("p:first").children("a").children("span:eq(1)").html()
//$(document.getElementsByClassName("item-mod__trade-order___2LnGB")[0]).children(".ml-mod__container___1zaKJ.production-mod__production___3ZePJ.suborder-mod__production___1eyM1").children("div:last").children("p:first").children("a").children("span:eq(1)").html()


$(document.getElementsByClassName("item-mod__trade-order___2LnGB")[0]).children(".ml-mod__container___1zaKJ.production-mod__production___3ZePJ.suborder-mod__production___1eyM1").children("div:last").children("p:first").children("a").children("span:eq(1)").html()