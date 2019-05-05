// ==UserScript==
// @name         quickmark
// @namespace    http://guossnh.github.io/quickmark/userscript.js
// @version      2
// @description  try to take over the world!
// @author       tlk
// @updateURL  http://guossnh.com/taobao/quickmark/userscript.js
// @downloadURL http://guossnh.com/taobao/quickmark/userscript.js
// @include    https://trade.taobao.com/trade/memo/update_sell_memo.htm*
// @require  http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js
// ==/UserScript==


//获取需要的变量
var babyNum,babyMoney,babyTitle,babyClass,babyReturnMoney,babyRemark;//babyClass 判断1是脚气2是皮肤用的产品
//创建选择礼品礼品

//这是一个新的onCreat办法只创建2个礼品的按钮会方便点
function creatSelect2(){
    var libtn = document.createElement("ul");
    //var maojinbtn = document.createElement("a");
    //maojinbtn.id="maojin";maojinbtn.innerHTML = "毛巾";maojinbtn.setAttribute("class","btn");
    //libtn.appendChild(maojinbtn);
    var wangzhanbtn = document.createElement("a");
    wangzhanbtn.id="wangzhan";wangzhanbtn.innerHTML = "网站";wangzhanbtn.setAttribute("class","btn");
    libtn.appendChild(wangzhanbtn);
    var chouzhibtn = document.createElement("a");
    chouzhibtn.id="chouzhi";chouzhibtn.innerHTML = "抽纸";chouzhibtn.setAttribute("class","btn");
    libtn.appendChild(chouzhibtn);
    document.getElementsByClassName("flag-options")[0].appendChild(libtn);
}



//这个 方法用于单项选择查找被选中的值
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
    creatSelect2();
    //下边是更改提交按钮的程序
    document.getElementsByClassName("btn")[1].onclick=function(){document.getElementById("form1").submit();};
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
    //增加判断宝贝类型的地方
    if(babyTitle.indexOf("糜爛水泡")>=0||babyTitle.indexOf("喷脚王止痒")>=0||babyTitle.indexOf("脚臭脚汗")>=0){
        //判断是不是脚臭的产品
        babyClass = 1;
    }
    else if(babyTitle.indexOf("外阴瘙痒")>=0||babyTitle.indexOf("阴囊潮湿")>=0||babyTitle.indexOf("珍珠疹 ")>=0){
        //判断是不是皮肤产品
        babyClass = 2;
    }else if(babyTitle.indexOf("颈椎富贵包消")>=0||babyTitle.indexOf("疏通颈部肩颈坐骨")>=0||babyTitle.indexOf("坐骨神经疼 ")>=0){
        //判断是不是皮肤产品
        babyClass = 3;
    }else if(babyTitle.indexOf("盛草仙芳")>=0||babyTitle.indexOf("膏正品网肘")>=0||babyTitle.indexOf("大拇指手腕鼓包")>=0){
        //判断是不是皮肤产品
        babyClass = 4;
    }
    if(babyRemark.indexOf("GWZ")==-1){
        var babyNum2=1;
        if(babyClass==1){
            //判断是不是脚臭的产品
            document.getElementById("memo").innerHTML="GWZ-PJW*"+babyNum+"+JCF*"+babyNum*2+"";
        }else if(babyClass==2){
            //判断是不是脚臭的产品
            if(babyNum==2){
                babyNum = 3;
            }else if(babyNum==3) {
                babyNum = 5;
            }
            document.getElementById("memo").innerHTML="GWZ-CB*"+babyNum+"";
        }else if(babyClass==3){
            //判断是不是脚臭的产品
            if(babyNum==2){
                babyNum = 3;
            }else if(babyNum==3) {
                babyNum = 5;
            }
            document.getElementById("memo").innerHTML="GWZ-LLT*"+babyNum+"";
        }else if(babyClass==4){
            //判断是不是脚臭的产品
            if(babyNum==2){
                babyNum2 = 3;
            }else if(babyNum==3) {
                babyNum2 = 5;
            }
            document.getElementById("memo").innerHTML="GWZ-JQT*"+babyNum2+"-HW*"+babyNum+"";
        }
    }
        //当毛巾被点击的时候
    //document.getElementById("maojin").onclick=function(){
    //    document.getElementById("flag3").checked = true;//选择绿色的旗子
    //    document.getElementById("memo").innerHTML="G-GWZ-MJ*1("+Number(babyMoney)+"+"+babyReturnMoney+")";
    //    document.getElementById("form1").submit();
    //};
    //当抽纸被点击的时候
    document.getElementById("chouzhi").onclick=function(){
        document.getElementById("flag3").checked = true;//选择绿色的旗子
        document.getElementById("memo").innerHTML="G-GWZ-CZ*1("+Number(babyMoney)+"+"+babyReturnMoney+")";
        document.getElementById("form1").submit();
    };
    //当网站被点击的时候
    document.getElementById("wangzhan").onclick=function(){
        document.getElementById("flag5").checked = true;//选择紫色的旗子
        document.getElementById("memo").innerHTML="V-GWZ-LLT*1";
        document.getElementById("form1").submit();
    };
    //
});
//当点击紫色旗子的时候
document.getElementById("flag5").onclick=function(){

    if(babyClass==1){
        //判断是不是脚臭的产品
        document.getElementById("memo").innerHTML="V-GWZ-PJW*"+babyNum+"";
    }
    if(babyClass==2){
        //判断是不是脚臭的产品
        if(babyNum==2){
            babyNum = 3;
        }else if(babyNum==3) {
            babyNum = 5;
        }
        document.getElementById("memo").innerHTML="V-GWZ-CB*"+babyNum+"";
    }
};


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~下边是暂时不用了的办法~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//创建礼品选择列表
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

//当点击绿色旗子的时候  暂时不用了
document.getElementById("flag3").onclick=function(){
    //document.getElementById("memo").innerHTML="G-GWZ-"+getRadioCheckedValue('lipin')+"*1("+Number(babyMoney)+"+"+babyReturnMoney+")";
};

