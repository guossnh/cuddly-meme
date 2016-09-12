// ==UserScript==
// @name         find my baobei by tlk
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @grant        none
// @include    https://trade.taobao.com/trade/itemlist/*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==
//这是关键词
var keyword = new Array("颈椎枕头治疗枕颈椎病专用枕 护颈枕蝶形磁疗修复劲椎保健护颈枕", "牵草堂颈椎枕头修复颈椎保健枕头健康护颈枕成人劲椎反弓记忆棉枕", "记忆枕头颈椎保健枕 修复颈椎 护颈枕成人曲度变直矫正劲椎专用枕");
//这是页面列表元素
var listdate = document.getElementsByClassName("item-mod__trade-order___2LnGB");


function check_and_change() {
    for (var i = 0; i < listdate.length; i++) {
        for (var j = 0; j < keyword.length; j++)
        //listdate[i].innerHTML.match(keyword[j]);
            if (listdate[i].innerHTML.match(keyword[j]) !== null) {
            if (j === 0) {
                listdate[i].style.border = "3px solid red"; //驱蚊枕
            } else if (j === 1) {
                listdate[i].style.border = "3px solid blue"; //颈椎枕
            } else {
                listdate[i].style.border = "3px solid green"; //记忆枕
            }
            if (listdate[i].innerHTML.match("visibility:visible;") !== null) {
                listdate[i].style.borderStyle = "dashed";
            }
        }
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



//$(".item-mod__trade-order___2LnGB").style.border="3px solid red";
//.pagination-options-go



//background: url(//img.alicdn.com/tps/i1/TB1heyGFVXXXXXpXXXXR3Ey7pXX-550-260.png) no-repeat -100px -207px;
//background: url(//img.alicdn.com/tps/i1/TB1heyGFVXXXXXpXXXXR3Ey7pXX-550-260.png) no-repeat -176px -176px;