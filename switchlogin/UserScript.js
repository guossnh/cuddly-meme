// ==UserScript==
// @name         SwitchLogin
// @namespace    http://guossnh.github.io/quickmark/userscript.js
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @updateURL  http://guossnh.com/switchlogin/userscript.js
// @downloadURL http://guossnh.com/switchlogin/userscript.js
// @include    https://login.taobao.com/member/login.jhtml?*
// ==/UserScript==
//下边是帐号密码
var pw00 = "";
var pw01 = "";
(function() {
    var ShopNum = "pw"+window.location.href.substr(window.location.href.length-2);//js截取参数之后分析是要登录那一个店铺
    document.getElementById("TPL_username_1").value = eval(ShopNum).split('&')[0];//设置登录帐号
    document.getElementById("TPL_password_1").value = eval(ShopNum).split('&')[1];//这是登录密码
    document.getElementById("J_SubmitStatic").click();//开始登录
})();

//login.taobao.com/member/login.jhtml?from=sycm&full_redirect=true&style=minisimple&minititle=&minipara=0,0,0&sub=true&redirect_url=https://sycm.taobao.com/portal/home.htm