// ==UserScript==
// @name         sell_all_add
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @include    https://trade.taobao.com/trade/itemlist/*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==

//这是页面列表元素
var listdate = document.getElementsByClassName("item-mod__trade-order___2LnGB");
var title = document.getElementsByClassName("ml-mod__container___1zaKJ production-mod__production___3ZePJ suborder-mod__production___1eyM1");
var list_date = [];
var titlevar = "";
var is_sell = ["买家已付款", "卖家已发货", "交易成功"];
var is_sellvar = "";

function creat_button() {
    //往页面添加个按钮用于开始计算
    $("body").append("<a id='sell_ifo_copy' class='sell_ifo_copy' >算</a>");
    $("body").append("<style>.sell_ifo_copy {top:50px;left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;    text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.sell_ifo_copy:hover {background-color:#5cbf2a;}</style>");
}

function get_list_title() { //获取总共的标题数并且去除重复  放在ist_date 里边
    for (var i = 0; i < listdate.length; i++) {
        //排除带有红旗标志的元素
        if (listdate[i].innerHTML.match("visibility:visible;") !== null) {
            break;
        }
        //选取状态值
        is_sellvar = $(listdate[i]).children("table:last").children("tbody").children("tr").children("td:eq(5)").children("div").children("p:first").children("span").html()
        //只选择买家已付款 卖家已发货 交易成功 的订单
        if (is_sell.indexOf(is_sellvar) == -1) {
            break;
        }

        titlevar = $(title[i]).children("div:last").children("p:first").children("a:first").children("span:eq(1)").html();
        if (list_date.indexOf(titlevar) == -1) {
            list_date.push(titlevar);
        }
    }
}








creat_button();

$("#sell_ifo_copy").click(function() {
    get_list_title();
    alert(list_date.length);
});