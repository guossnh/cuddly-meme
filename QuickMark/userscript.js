// ==UserScript==
// @name         quickmark
// @namespace    http://guossnh.github.io/quickmark/userscript.js
// @version      0.2
// @description  try to take over the world!
// @author       tlk
// @updateURL  http://guossnh.com/taobao/quickmark/userscript.js
// @downloadURL http://guossnh.com/taobao/quickmark/userscript.js
// @include    https://trade.taobao.com/trade/memo/update_sell_memo.htm*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==


//获取需要的变量
var babyNum,babyMoney,babyTitle;
//创建选择礼品礼品
function creatSelect(){
    //增加礼品选择
    var lipinul = document.createElement("ul");
    var maojin = document.createElement("li");
    var maojinvalue = document.createElement("input");
    maojinvalue.name="lipin";maojinvalue.type="radio";maojinvalue.value="MJ";maojinvalue.checked=true;
    maojin.appendChild(maojinvalue);
    maojin.appendChild(document.createTextNode("毛巾"));
    lipinul.appendChild(maojin);
    var lajidai = document.createElement("li");
    var lajidaivalue = document.createElement("input");
    lajidaivalue.name="lipin";lajidaivalue.type="radio";lajidaivalue.value="LJD";
    lajidai.appendChild(lajidaivalue);
    lajidai.appendChild(document.createTextNode("垃圾袋"));
    lipinul.appendChild(lajidai);
    var chouzhi = document.createElement("li");
    var chouzhivalue = document.createElement("input");
    chouzhivalue.name="lipin";chouzhivalue.type="radio";chouzhivalue.value="CZ";
    chouzhi.appendChild(chouzhivalue);
    chouzhi.appendChild(document.createTextNode("抽纸"));
    lipinul.appendChild(chouzhi);
    document.getElementsByClassName("flag-options")[0].appendChild(lipinul);
}

function getRadioCheckedValue(tagNameAttr){
    var radio_tag = document.getElementsByName(tagNameAttr);
    for(var i=0;i<radio_tag.length;i++){
        if(radio_tag[i].checked){
            var checkvalue = radio_tag[i].value;            
            return checkvalue;
        }
    }
}

$(function(){
    creatSelect();
    //下边是更改提交按钮的程序
    document.getElementsByClassName("btn")[0].onclick=function(){document.getElementById("form1").submit();};
    //下边是获取这些变量;
    babyNum = Number(document.getElementsByClassName("num")[1].innerText);
    babyMoney = document.getElementsByClassName("J_OrderPrice")[0].firstChild.nodeValue.split("￥")[1];
    if(Number(babyMoney)<50){
        babyReturnMoney = 3;
    }else if(Number(babyMoney)<100){
        babyReturnMoney = 5;
    }else{
        babyReturnMoney = 7;
    }
    babyTitle = document.getElementsByClassName("name")[1].getElementsByTagName("a")[0].innerText;
    babyRemark = document.getElementById("memo").innerHTML;
    if(babyRemark.indexOf("GWZ")==-1){
        if(babyTitle.indexOf("治疗感染脚气")>=0||babyTitle.indexOf("喷脚王止痒")>=0||babyTitle.indexOf("脚臭脚汗")>=0){
            //判断是不是脚臭的产品
            document.getElementById("memo").innerHTML="GWZ-PJW*"+babyNum+"+JCF*"+babyNum*2+"";
        }
    }
});
document.getElementById("flag5").onclick=function(){
    document.getElementById("memo").innerHTML="V-GWZ-PJW*"+babyNum+"";
};
document.getElementById("flag3").onclick=function(){
    document.getElementById("memo").innerHTML="G-GWZ-"+getRadioCheckedValue('lipin')+"("+Number(babyMoney)+"+"+babyReturnMoney+")";
};
