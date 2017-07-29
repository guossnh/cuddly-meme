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
var keyWorld = new Array("极限品牌2015","鹏哥到此一游","啥尼英伦会社","张恒","罗腾","18005651225","15375371225","15395511780","北干街道建设2路","红十燕七里桥","龙池办事处","麻城市","萧山区","贤武","唐倩","李杏桦");
var doUrlList = new Array(0);
//处理页面上边的详情连接并且放入urllist
    function doList (callback){
        setTimeout(function(){
            var data = $("a:contains('详情')");
            var datas;
            console.log("dolist have dane");
            for(var i = 0;i<data.length;i++){
                datas = data.get()[i].href.toString();
                if (datas.indexOf("detail")===31){
                    urllist.push(datas);
                }
            }
            callback();
        },10);
}
//根据订单修改连接判断这个的连接的页面是否出现差评时的特征返回Ture或者False
    function findBadManKeyWorld (link){
        $.get(link, function(result){
            for (var i = 0; i<keyWorld.length;i++){
                //console.log(result.indexOf(keyWorld[i]));
                if(result.indexOf(keyWorld[i])>0){
                    console.log("关键词"+keyWorld[i]);
                    doUrlList.push(link);
                    break;
                }
            }
          });
    }
//新建list存入值为Ture的订单号
    function getTheList(callback){
        setTimeout(function(){
            console.log("getTheList");
            for(var i = 0; i<urllist.length;i++){
                findBadManKeyWorld(urllist[i]);
            }
            callback();
        },200);
    }
//通过list里边的值来渲染页面的订单内容
    function doSomeThing(){
        setTimeout(function(){
            if(doUrlList.length!==0){
                for(var i =0; i<doUrlList.length;i++){
                    var buyNumber = doUrlList[i].split(/\=+/)[1];
                    console.log(buyNumber);
                    buyNumber = $("span:contains("+buyNumber+")").parent().parent().css('background-color', 'red');
                    console.log(buyNumber);

                }
            }
        },500);
    }
//中心控制
function head(){
    setTimeout(function(){
        doList(function(){
            getTheList(function(){
                doSomeThing();
            });
        });
    },1000);
}
//页面载入之后执行
(function() {head();})();
//点击换页之后执行
$(".pagination-item").click(function() {head();});
//点击跳转之后 执行
$(".pagination-options-go").click(function() {head();});