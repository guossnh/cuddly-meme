// ==UserScript==
// @name         copy to jiantieban2
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @grant        none
// @include    https://trade.taobao.com/trade/itemlist/list_sold_items.htm*
// @require  http://cdn.bootcss.com/jquery/2.1.0/jquery.js
// @updateURL  http://guossnh.github.io/copytojiantieban2/userscript.js
// @downloadURL http://guossnh.github.io/copytojiantieban2/userscript.js
// ==/UserScript==
// 这是第二个版本,准备在列表页面载入列表详情然后存入excle
//2017年8月10日    update  想了一下大约 这个 需求是一个伪需求  因为操作更多了所以 之前的想法肯定会更复杂, 我先做一个简单的版本  就是 可以从列表页面直接复制销量信息的东西不要限制格式了   这个想办法解决这个问题
//下边的公共变量部分
var contentText = "";//这是最终复制到剪贴板的内容
var urllist = new Array(0);

//下边的方法部分

//获取有用信息转化为json存入list 延迟0
function getIn (){
    setTimeout(function(){
        var data = $("a:contains('详情')");
        var datas;
        //console.log("dolist have dane");
        for(var i = 0;i<data.length;i++){
            datas = data.get()[i].href.toString();
            if (datas.indexOf("detail")===31){
                urllist.push(datas);
            }
        }
    },10);
    $.get(link, function(result){ });
}

//处理list 分析有用的信息转化成字符串
function doString(){

}

//创建按钮
function creat_button() {
    //往页面添加两个按钮用于复制两种信息
    $("body").append("<a id='sell_ifo_copy' class='sell_ifo_copy' >复制</a>");
    $("body").append("<style>.sell_ifo_copy {top:50px;left:10px;position:fixed;background-color:#44c767;-moz-border-radius:28px;-webkit-border-radius:28px;border-radius:28px;border:1px solid #18ab29;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;padding:16px 31px;    text-decoration:none;text-shadow:0px 1px 0px #2f6627;}.sell_ifo_copy:hover {background-color:#5cbf2a;}</style>");
}

//按钮点击之后 触发  生成最后 字符串  然后  放入文本域并且复制
$("#sell_ifo_copy").click(function() {

});


(function() {
    creat_button();//创建按钮
})();