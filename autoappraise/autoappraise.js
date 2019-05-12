// ==UserScript==
// @name         autoappraise
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://rate.taobao.com/remarkBuyer.jhtml*
// @grant        none
// ==/UserScript==

function summitbutton(){
    document.getElementsByClassName("J_btn_submit tb-rate-btn type-primary wide-xxl")[0].click()
}

(function() {
    document.getElementById("rate-good-all").click();
    document.getElementsByClassName("good-rate")[0].click()
    //document.getElementsByClassName("J_btn_submit tb-rate-btn type-primary wide-xxl")[0].click()
    setTimeout(summitbutton(), 2000);
})();



