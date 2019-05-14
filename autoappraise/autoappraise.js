// ==UserScript==
// @name         autoappraise
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://rate.taobao.com/remarkBuyer.jhtml*
// @grant        none
// ==/UserScript==

//定义提交方法，貌似不分开写的话总是不能提交
function summitbutton(){
    document.getElementsByClassName("J_btn_submit tb-rate-btn type-primary wide-xxl")[0].click()
}
//这是页面打开之后先要给点击好评，然后再延时2秒提交表单
(function() {
    document.getElementById("rate-good-all").click();
    document.getElementsByClassName("good-rate")[0].click()
    setTimeout(summitbutton(), 2000);
})();
//这个再chrome里边没法关闭页面 想想通过按下x按键可以试试



