// ==UserScript==
// @name         quickmark
// @namespace    http://guossnh.github.io/quickmark/userscript.js
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @updateURL  http://guossnh.com/taobao/quickmark/userscript.js
// @downloadURL http://guossnh.com/taobao/quickmark/userscript.js
// @include    https://trade.taobao.com/trade/memo/update_sell_memo.htm*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==


//获取需要的变量
var babyNum,babyMoney,babyTitle;
$(function(){
    //下边是更改提交按钮的程序
    document.getElementsByClassName("btn")[0].onclick=function(){document.getElementById("form1").submit();};
    //下边是获取这些变量;
    babyNum = Number(document.getElementsByClassName("num")[1].innerText);
    babyMoney = document.getElementsByClassName("J_OrderPrice")[0].firstChild.nodeValue.split("￥")[1];
    babyTitle = document.getElementsByClassName("name")[1].getElementsByTagName("a")[0].innerText;
    babyRemark = document.getElementById("memo").innerHTML;
    if(babyRemark.indexOf("GWZ")==-1){
        if(babyTitle.indexOf("治疗感染脚气")>=0||babyTitle.indexOf("喷脚王止痒")>=0){
            //判断是不是脚臭的产品
            document.getElementById("memo").innerHTML="GWZ-PJW*"+babyNum+"+JCF*"+babyNum*2+"";
        }
    }
});
document.getElementById("flag5").onclick=function(){
    document.getElementById("memo").innerHTML="V-GWZ-PJW*"+babyNum+"";
};
