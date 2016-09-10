// ==UserScript==
// @name         copy to jiantieban
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @grant        none
// @include    https://trade.taobao.com/trade/detail/trade_item_detail.htm*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==
//这是复制需要的信息成json格式 然后 粘贴进剪贴板的脚本

//往页面添加检测元素
$("body").append("<a id='sell_ifo_copy' class='taobaojianceButton' >卖</a>");
$("body").append("<a id='taobaojiancefun' class='taobaojianceButton' >卖</a>");
//往页面添加检测元素的css
$("body").append("<style>.taobaojianceButton {top:50px;left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.taobaojianceButton:hover {background-color:#5cbf2a;}</style>");

