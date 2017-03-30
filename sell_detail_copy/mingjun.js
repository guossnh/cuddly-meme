// ==UserScript==
// @name         copy to jiantieban
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @grant        none
// @include    https://trade.taobao.com/trade/detail/trade_order_detail.htm*
//@include    https://buyertrade.taobao.com/trade/detail/trade_order_detail.htm*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==
//明君用的版本,她是两种excle格式

//声明变量
var wwid, sell_num, money, add, phone_num, transport_num, date, username, filename, pay_date; //旺旺ID , 单号 , 钱 , 地址 , 电话 , 运单号码,下单日期 ,姓名,付款日期
var phone_num_exec = "^1[3|4|5|7|8][0-9]\d{8}$";
var transport_num_exec = "\d{8,20}";

function creat_button() {
    //往页面添加两个按钮用于复制两种信息
    $("body").append("<a id='sell_ifo_copy' class='sell_ifo_copy' >卖1</a>");
    $("body").append("<a id='sell_ifo_copy2' class='sell_ifo_copy2' >卖2</a>");
    //$("body").append("<a id='shua_ifo_copy' class='shua_ifo_copy' >刷</a>");
    //这是两个元素的css样式
    $("body").append("<style>.sell_ifo_copy {top:50px;left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;    text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.sell_ifo_copy:hover {background-color:#5cbf2a;}</style>");
    $("body").append("<style>.sell_ifo_copy2 {top:100px;left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;    text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.sell_ifo_copy2:hover {background-color:#5cbf2a;}</style>");
    //$("body").append("<style>.shua_ifo_copy {top:150px;left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;    text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.shua_ifo_copy:hover {background-color:#5cbf2a;}</style>");
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
    wwid = $("table").children("tb ody").children("tr").children("td").children("span").html();
    sell_num = $("div.misc-info-mod__misc-info___1iQ6Y").children("div:last").children("span:first").children("span:last").children("span").html();
    money = $("div.pay-info-mod__left___koLyN").children("strong").html();
    phone_num = $("table").children("tbody").children("tr:eq(1)").children("td:last").children("span").html();
    date = $("div.misc-info-mod__misc-info___1iQ6Y").children("div:last").children("span:eq(2)").children("span:last").children("span").html();
    pay_date = $("div.misc-info-mod__misc-info___1iQ6Y").children("div:last").children("span:eq(4)").children("span:last").children("span").html();
    //add = $("div.logistics-panel-mod__group-info___2Y6Dh").children("div:first").children("div:first").children("span:last").chileren("a").remove();
    add = $(".value:first").html();
    //因为没弄好正则表达式  就先这样弄了  真烂
    if ($(".value:last").prev("span").html() == "买家留言：") {
        $(".value:last").prev("span").parent("div").parent("div").remove();
    }
    transport_num = $(".value:last").html();
    username = add.slice(0, add.indexOf("，"));
    filename = $("table:last").children("tbody").children("tr:eq(1)").children("td:first").children("div:eq(1)").children("div").children("div:first").children("a").html();
    if (filename == "颈椎枕头治疗枕颈椎病专用枕 护颈枕蝶形磁疗修复劲椎保健护颈枕") {
        filename = "治疗枕";
    } else if (filename == "牵草堂颈椎枕头修复颈椎保健健康护颈枕成人劲椎专用反弓记忆棉枕") {
        filename = "颈椎枕";
    } else if (filename == "记忆枕头颈椎保健枕 修复颈椎 护颈枕成人曲度变直矫正劲椎专用枕") {
        filename = "驱蚊枕";
    } else {
        filename = filename;
    }
}



creat_button();

//购买日期/卖的盒数/空白/空白/空白/钱数/付款方式/邮件号/姓名地址电话都在一起/赠送的合数/旺旺号/
$("#sell_ifo_copy").click(function() {
    get_value2();
    //copyToClipboard("[" + date + ",'',1," + wwid + "]");
    $("body").append("<textarea style='font-family:Microsoft YaHei;font-size: 11px;text-align: center;' id = 'copy_text_id'><table><tr><td>" + pay_date + "</td><td>1</td><td></td><td></td><td></td><td>" + money + "</td><td>淘宝</td><td>" + transport_num + "</td><td>" + add + "</td><td></td><td>" + wwid + "</td></tr></table></textarea>");
    var copy_text_id = document.getElementById("copy_text_id");
    copy_text_id.focus();
    copy_text_id.select();
    document.execCommand('Copy', false, null);
});

//姓名/地址/卖的瓶数/电话/下单时间/空白/付款方式/空白/赠送/钱数/邮件好/旺旺名字
$("#sell_ifo_copy2").click(function() {
    get_value2();
    //copyToClipboard("[" + date + ",'',1," + wwid + "]");
    $("body").append("<textarea style='font-family:Microsoft YaHei;font-size: 11px;text-align: center;' id = 'copy_text_id'><table><tr><td>" + username + "</td><td>" + add + "</td><td>1</td><td>" + phone_num + "</td><td>" + pay_date + "</td><td></td><td>淘宝</td><td></td><td></td><td>" + money + "</td><td>" + transport_num + "</td><td>" + wwid + "</td></tr></table></textarea>");
    var copy_text_id = document.getElementById("copy_text_id");
    copy_text_id.focus();
    copy_text_id.select();
    document.execCommand('Copy', false, null);
});


//$("div.logistics-panel-mod__group-info___2Y6Dh").children("div:first").children("div:first").children("span:last")
//$("table").children("tbody").children("tr").children("td").children("span").html()



//wile add
//$("table:last").children("tbody").children("tr:eq(1)").children("td:first").children("div:eq(1)").children("div").children("div:first").children("a").html()