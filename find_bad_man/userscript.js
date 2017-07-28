// ==UserScript==
// @name         findBadMan
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       tlk
// @include    https://trade.taobao.com/trade/itemlist/*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==

//全局变量区域
var urllist = new Array(0);
var keyWorld = new Array("极限品牌2015","鹏哥到此一游","啥尼英伦会社","张恒","罗腾","18005651225","15375371225","15395511780","北干街道建设2路","红十燕七里桥","龙池办事处","麻城市","萧山区","贤武","唐倩");
var doUrlList = new Array(0);
//处理页面上边的详情连接并且放入urllist
    function doList (){
        var data = $("a:contains('详情')");
        var datas;
        console.log("dolist have dane");
        for(var i = 0;i<data.length;i++){
            datas = data.get()[i].href.toString();
            if (datas.indexOf("detail")===31){
                urllist.push(datas);
            }
        }
}
//根据订单修改连接判断这个的连接的页面是否出现差评时的特征返回Ture或者False
    function findBadManKeyWorld (link){
        $.get(link, function(result){
            for (var i = 0; i<keyWorld.length;i++){
                console.log("寻找关键词执行"+i+"次");
                //console.log(result.indexOf(keyWorld[i]));
                if(result.indexOf(keyWorld[i])>0){
                    console.log("我草一次");
                    doUrlList.push(link);
                    break;
                }
            }
          });
    }
//新建list存入值为Ture的订单号
    function getTheList(){
        console.log("getTheList");
        for(var i = 0; i<urllist.length;i++){
            findBadManKeyWorld(urllist[i]);
        }
    }
//通过list里边的值来渲染页面的订单内容
    function doSomeThing(){
        setTimeout(function(){
            console.log("dosomething"+doUrlList.length);
        });
    }
//页面载入之后执行
(function() {
    setTimeout(function(){
        
    },1000);
})();