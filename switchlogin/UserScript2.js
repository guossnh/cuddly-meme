// ==UserScript==
// @name         SwitchLogin2
// @namespace    http://guossnh.github.io/quickmark/userscript.js
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @updateURL  http://guossnh.com/switchlogin/userscript2.js
// @downloadURL http://guossnh.com/switchlogin/userscript2.js
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// @include    https://trade.taobao.com*
// @include    https://sycm.taobao.com*
// ==/UserScript==
(function() { 
    $("body").append("<a id='sell_ifo_copy' class='sell_ifo_copy loginclass1' target='view_window' href = 'https://login.taobao.com/member/login.jhtml?style=minisimple&tlk=00'>qct1212</a>");
    $("body").append("<a id='sell_ifo_copy' class='sell_ifo_copy loginclass2' target='view_window' href = 'https://login.taobao.com/member/login.jhtml?style=minisimple&tlk=01'>牵草堂生物保健</a>");
    $("body").append("<style>.sell_ifo_copy {left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;    text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.sell_ifo_copy:hover {background-color:#5cbf2a;} .loginclass1{top:50px;}.loginclass2{top:15px;}</style>");
})();

//https://login.taobao.com/member/login.jhtml?spm=a1z09.1.0.0.9688addhTsFzg&style=minisimple&tlk=00
//https://login.taobao.com/member/login.jhtml?style=minisimple&tlk=00