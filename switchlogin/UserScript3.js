// ==UserScript==
// @name         SwitchLogin
// @namespace    http://guossnh.github.io/quickmark/userscript.js
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @updateURL  http://guossnh.com/switchlogin/userscript2.js
// @downloadURL http://guossnh.com/switchlogin/userscript2.js
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// @include    https://myseller.taobao.com/home.htm*
// @include    https://sycm.taobao.com*
// @include    https://trade.taobao.com/trade/itemlist/list_sold_items.htm*
// ==/UserScript==
(function() {
    $("body").append("<a id='sell_ifo_copy' class='sell_ifo_copy loginclass1' href = 'https://login.taobao.com/member/login.jhtml?style=minisimple'>换店铺</a>");
    $("body").append("<style>.sell_ifo_copy {top:200px;left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;    text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.sell_ifo_copy:hover {background-color:#5cbf2a;} </style>");
})();