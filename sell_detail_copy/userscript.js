// ==UserScript==
// @name         copy to jiantieban
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @grant        none
// @include    https://trade.taobao.com/trade/detail/trade_order_detail.htm*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==
//这是复制需要的信息成json格式 然后 粘贴进剪贴板的脚本

//声明变量
var wwid, sell_num, money, add, phone_num, transport_num, date, username; //旺旺ID , 单号 , 钱 , 地址 , 电话 , 运单号码 日期 ,姓名
var phone_num_exec = "^1[3|4|5|7|8][0-9]\d{8}$";
var transport_num_exec = "\d{8,20}";


function creat_button() {
    //往页面添加两个按钮用于复制两种信息
    $("body").append("<a id='sell_ifo_copy' class='sell_ifo_copy' >卖</a>");
    $("body").append("<a id='shua_ifo_copy' class='shua_ifo_copy' >刷</a>");
    //这是两个元素的css样式
    $("body").append("<style>.sell_ifo_copy {top:50px;left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;    text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.sell_ifo_copy:hover {background-color:#5cbf2a;}</style>");
    $("body").append("<style>.shua_ifo_copy {top:150px;left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;    text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.shua_ifo_copy:hover {background-color:#5cbf2a;}</style>");
}
//2016年9月12日弃用这个寻找值的办法   狗日的淘宝 改版了
function get_value1() {
    wwid = $(".nickname").html();
    sell_num = $(".order-num").html();
    money = $("div.get-money").children("strong").html();
    add = $(".block-item").html();
    phone_num = $("tbody.contact-info").children("tr:eq(2)").children("td:last").children("span").html();
    date = $("span.trade-time").html();
    //因为没弄好正则表达式  就先这样弄了  真烂
    if ($("table.simple-list").children("tbody").children("tr:last").children("th").html() == "买家留言：") {
        $("table.simple-list").children("tbody").children("tr:last").remove();
    }
    $('table.simple-list.logistics-info').children('tbody').children('tr:last').children('td').children('a').remove();
    transport_num = $('table.simple-list.logistics-info').children('tbody').children('tr:last').children('td').html();
}

function get_value2() {
    wwid = $("table").children("tbody").children("tr").children("td").children("span").html();
    sell_num = $("div.misc-info-mod__misc-info___1iQ6Y").children("div:last").children("span:first").children("span:last").children("span").html();
    money = $("div.pay-info-mod__left___koLyN").children("strong").html();
    phone_num = $("table").children("tbody").children("tr:eq(1)").children("td:last").children("span").html();
    date = $("div.misc-info-mod__misc-info___1iQ6Y").children("div:last").children("span:eq(2)").children("span:last").children("span").html();
    //add = $("div.logistics-panel-mod__group-info___2Y6Dh").children("div:first").children("div:first").children("span:last").chileren("a").remove();
    add = $(".value:first").html();
    //因为没弄好正则表达式  就先这样弄了  真烂
    if ($(".value:last").prev("span").html() == "买家留言：") {
        $(".value:last").prev("span").parent("div").parent("div").remove();
    }
    transport_num = $(".value:last").html();
    username = add.slice(0, add.indexOf("，"));
}



creat_button();

$("#sell_ifo_copy").click(function() {
    get_value2();
    //copyToClipboard("[" + date + ",'',1," + wwid + "]");
    $("body").append("<textarea style='font-family:Microsoft YaHei;font-size: 11px;text-align: center;' id = 'copy_text_id'><table><tr><td>" + date + "</td><td>" + username + "</td><td>1</td><td>" + wwid + "</td><td>" + phone_num + "</td><td>" + add + "</td><td>" + sell_num + "</td><td>" + transport_num + "</td><td>" + money + "</td><td>T</td></tr></table></textarea>");
    var copy_text_id = document.getElementById("copy_text_id");
    copy_text_id.focus();
    copy_text_id.select();
    document.execCommand('Copy', false, null);
});


//$("div.logistics-panel-mod__group-info___2Y6Dh").children("div:first").children("div:first").children("span:last")
//$("table").children("tbody").children("tr").children("td").children("span").html()