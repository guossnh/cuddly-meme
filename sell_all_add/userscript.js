// ==UserScript==
// @name         sell_all_add
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       tlk
// @include    https://trade.taobao.com/trade/itemlist/*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==
//这是页面列表元素
var listdate = "";
list_date = [];
money_list = [];
titlevar = "";
is_sell = ["买家已付款", "卖家已发货", "交易成功"];
is_sellvar = "";
money = 0;
time_shua = 0;
time_gui = 0;
time_use = 0;
add_place = $('#page');//添加列表的地方

function creat_button() {
    //往页面添加个按钮用于开始计算
    $("body").append("<a id='sell_ifo_copy' class='sell_ifo_copy' >算</a>");
    $("body").append("<style>.sell_ifo_copy {top:50px;left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;    text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.sell_ifo_copy:hover {background-color:#5cbf2a;}</style>");
}

function get_list_title() { //获取总共的标题数并且去除重复  放在ist_date 里边
    listdate = document.getElementsByClassName("item-mod__trade-order___2LnGB");
    /*
    如果这一块注释掉的话 那就是计算所有页面 的和  没有注释的话  每一页 都会有新的 统计
    time_shua = 0;
    time_gui = 0;
    time_use = 0;
    list_date = [];
    money_list = [];
    */ 
    for (var i = 0; i < listdate.length; i++) {
        //排除带有红旗标志的元素
        //if (listdate[i].innerHTML.match("visibility:visible;") !== null) {
        //    time_shua++;
        //    continue;
        //}
        //选取状态值
        is_sellvar = $(listdate[i]).children("table:last").children("tbody").children("tr").children("td:eq(5)").children("div").children("p:first").children("span").html();
        //只选择买家已付款 卖家已发货 交易成功 的订单   
        if (is_sell.indexOf(is_sellvar) == -1) {
            time_gui++;
            continue;
        }
        var flgColor = "";
        //添加旗帜颜色选择在标题的后边加上颜色字符
        if (listdate[i].innerHTML.match("-176px -176px;") !== null) {//这是灰色
            flgColor = "<span style = 'color:#888'>灰<span>";
        }else if(listdate[i].innerHTML.match("-120px -207px;") !== null){//这是绿色
            flgColor = "<span style = 'color:#0f0'>绿<span>";time_shua++;
        }else if(listdate[i].innerHTML.match("-80px -207px;") !== null){//这是紫色
            flgColor = "<span style = 'color:#f0f'>紫<span>";time_shua++;
        }else if(listdate[i].innerHTML.match("-100px -207px;") !== null){//这是红色
            flgColor = "<span style = 'color:#f00'>红<span>";
        }else if(listdate[i].innerHTML.match("-140px -207px;") !== null){//这是黄色
            flgColor = "<span style = 'color:#ff0'>黄<span>";
        }else if(listdate[i].innerHTML.match("-60px -207px;") !== null){//这是蓝色
            flgColor = "<span style = 'color:#00f'>蓝<span>";
        }else{
            flgColor = "<span style = 'color:#red'>出问题了,叫人吧<span>";
        }
        //下边的提取  金额 和  标题   标题 要 过滤   金额 要 想加
        titlevar = $(listdate[i]).children("table:last").children("tbody").children("tr").children("td:first").children("div").children("div:last").children("p:first").children("a").children("span:eq(1)").html();

        titlevar = titlevar + flgColor;//后边加上旗子颜色做判断

        money = parseFloat($(listdate[i]).children("table:last").children("tbody").children("tr").children("td:eq(6)").children("div").children("div:first").children("p").children("strong").children("span:last").html());
        time_use++;
        if (list_date.indexOf(titlevar) == -1) {
            list_date.push(titlevar);
            money_list.push(money);
        } else {
            money_list[list_date.indexOf(titlevar)] = money_list[list_date.indexOf(titlevar)] + money;
        }
    }
}
//创建 文本信息   填写 需要的值 
function creat_text() {
    content_value = "";
    for (var i = 0; i < list_date.length; i++) {
        content_value = content_value + "<tr><td>" + list_date[i] + "</td><td>" + money_list[i].toFixed(2) + "</td></tr>";
    }
    content_value = "<table id='add_table'><tbody><tr><td>刷单数:(绿色+紫色)</td><td>" + time_shua + "</td><td>不统计条目:</td><td>" + time_gui + "</td><td>统计条目:</td><td>" + time_use + "</td></tr>" + content_value + "</tbody></table>";
    $(add_place).before(content_value);
}

creat_button();

$("#sell_ifo_copy").click(function() {
    $("#add_table").remove();
    get_list_title();
    creat_text();
    //alert(list_date.length);
    //alert(list_date[0]);
    //alert(money_list.length);
    //alert(money_list[0]);
});



/*
-120px -207px;     绿色
-176px -176px;     灰色
-80px -207px;       紫色
-100px -207px;     红色
-140px -207px;     黄色
-60px -207px;       蓝色
*/