for (i = 1; i < selldata.data.length; i++) {
    for (x = i + 1; x < selldata.data.length; x++) {
        if ((selldata.data[x].field_1 == selldata.data[i].field_1) && (selldata.data[x].field_2 == selldata.data[i].field_2) && (selldata.data[x].field_3 == selldata.data[i].field_3)) {
            //如果进来的话就是一条重复数据
            selldata.data.splice(x, 1);
            x--;
        }
    }
}
//这个 方法是判断两个date格式的年月日是相等的
function dateSame(date1, date2) {
    if (date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate()) {
        return true
    } else {
        return false
    }
}
//获取最近三天的时间
var today = new Date();
today.setHours(8)
var yestday = new Date(new Date().getTime() - (1000 * 60 * 60 * 24))
var beforeYestay = new Date(new Date().getTime() - (1000 * 60 * 60 * 48))
//下边是整合昨天和前天的数据
var yestdayData = [];
var beforeYestdayData = [];
//筛选所有数据整合昨天和前天的数据
for (i = 0; i < selldata.data.length; i++) {
    if (dateSame(yestday, new Date(selldata.data[i].field_1))) {
        yestdayData.push(selldata.data[i])
    }
    else if (dateSame(beforeYestay, new Date(selldata.data[i].field_1))) {
        beforeYestdayData.push(selldata.data[i])
    }
}
//这是生成选择列表
function makeYestDayList() {
    for (i = 0; i < yestdayData.length; i++) {
        $("#selectNameList").append("<div onclick=makeDataToPage(" + yestdayData[i].serial_number + ")  class='weui-actionsheet__cell'>" + yestdayData[i].field_3 + "的" + yestdayData[i].field_2 + "</div>")
    }
}
$(function () {
    //选项卡监听
    $('.weui-navbar__item').on('click', function () {
        $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
    });
    //当点击个人选项
    $('#personData').on('click', function () {

        $(".weui-tab__panel").empty();
        $(".weui-tab__panel").append('<div class="weui-skin_android" id="androidActionsheet" style="display: none;"><div class="weui-mask"></div><div class="weui-actionsheet"><div id="selectNameList" class="weui-actionsheet__menu"></div></div></div>');
        $(".weui-tab__panel").append('<div class="page__hd" id="DataTitle"></div>');
        $(".weui-tab__panel").append('<div class="page__bd page__bd_spacing" id="DataContent"></div>');
        //重新生成列表
        makeYestDayList();
        //展示列表
        var $androidActionSheet = $('#androidActionsheet');
        var $androidMask = $androidActionSheet.find('.weui-mask');
        $androidActionSheet.fadeIn(200);
        $androidMask.on('click', function () {
            $androidActionSheet.fadeOut(200);
        });
    });
    //当点击整体选项
    $('#AllData').on('click', function () {
        $(".weui-tab__panel").empty();
        $(".weui-tab__panel").append('<div class="page__hd"><h1 class="page__title">waiting</h1><p class="page__desc">ing</p></div>');
    });
});
//
//getid之后整理数据发送到页面
function makeDataToPage(id) {
    //根据id找到对象和昨天的对象
    var YestoneSellData, beforeYestOneSellData;
    for (i = 0; i < selldata.data.length; i++) {
        if (selldata.data[i].serial_number == id) {
            YestoneSellData = selldata.data[i];
            break;
        }
    }
    for (i = 0; i < beforeYestdayData.length; i++) {
        if (YestoneSellData.field_3 == beforeYestdayData[i].field_3 && YestoneSellData.field_2 == beforeYestdayData[i].field_2) {
            beforeYestOneSellData = beforeYestdayData[i]
            break;
        }
    }
    //设置标题 先清空上一次的数据
    $("#DataTitle").empty()
    $("#DataTitle").append("<h1 class='page__title'>" + YestoneSellData.field_3 + "的" + YestoneSellData.field_2 + "</h1><p class='page__desc'>数据日期" + YestoneSellData.field_1 + "</p>")
    if (beforeYestOneSellData == null) { $("#DataTitle").append(" <p class='page__desc'>系统没有查询到前天的数据无法进行匹对</p>") }
    function makeChangeData(yd, byd) {
        if (yd - byd > 0) {
            //是增加的话
            return "" + yd + "<a style='color:green' >&nbsp;↑" + (yd - byd) + "</a>"
        } else if (yd - byd < 0) {
            //是减少的话
            return "" + yd + "<a style='color:red' >&nbsp;↓" + (byd - yd) + "</a>"
        } else if (yd - byd == 0) {
            //是没变化的话
            return "" + yd + "-"
        } else {
            alert("这条数据出现了严重问题。")
        }
    }
    //设置内容数据
    $("#DataContent").empty()
    //生成标题行
    $("#DataTitle").append('<table class="gridtable" id= "contentTable"><tr><th>类别</th><th>总金额</th><th>单数</th><th>访客</th></tr></table>')
    if (beforeYestOneSellData == null) {
        //生成自然数据行
        $("#contentTable").append('<tr><td>自然</th><td>' + YestoneSellData.field_4[0].dimensions.总金额 + '</th><td>' + YestoneSellData.field_4[0].dimensions.单数 + '</th><td>' + YestoneSellData.field_4[0].dimensions.访客 + '</th></tr>')
        //生成干预数据行
        $("#contentTable").append('<tr><td>干预</th><td>' + YestoneSellData.field_4[1].dimensions.总金额 + '</th><td>' + YestoneSellData.field_4[1].dimensions.单数 + '</th><td>' + YestoneSellData.field_4[1].dimensions.访客 + '</th></tr>')
        //生成推广数据
        $("#contentTable").append('<tr><td>推广</th><td>' + YestoneSellData.field_4[2].dimensions.总金额 + '</th><td>' + YestoneSellData.field_4[2].dimensions.单数 + '</th><td>' + YestoneSellData.field_4[2].dimensions.访客 + '</th></tr>')

    } else {
        //生成自然数据行
        $("#contentTable").append('<tr><td>自然</th><td>' + makeChangeData(YestoneSellData.field_4[0].dimensions.总金额, beforeYestOneSellData.field_4[0].dimensions.总金额) + '</th><td>' + makeChangeData(YestoneSellData.field_4[0].dimensions.单数, beforeYestOneSellData.field_4[0].dimensions.单数) + '</th><td>' + makeChangeData(YestoneSellData.field_4[0].dimensions.访客, beforeYestOneSellData.field_4[0].dimensions.访客) + '</th></tr>')
        //生成干预数据行
        $("#contentTable").append('<tr><td>干预</th><td>' + makeChangeData(YestoneSellData.field_4[1].dimensions.总金额, beforeYestOneSellData.field_4[1].dimensions.总金额) + '</th><td>' + makeChangeData(YestoneSellData.field_4[1].dimensions.单数, beforeYestOneSellData.field_4[1].dimensions.单数) + '</th><td>' + makeChangeData(YestoneSellData.field_4[1].dimensions.访客, beforeYestOneSellData.field_4[1].dimensions.访客) + '</th></tr>')
        //生成推广数据
        $("#contentTable").append('<tr><td>推广</th><td>' + makeChangeData(YestoneSellData.field_4[2].dimensions.总金额, beforeYestOneSellData.field_4[2].dimensions.总金额) + '</th><td>' + makeChangeData(YestoneSellData.field_4[2].dimensions.单数, beforeYestOneSellData.field_4[2].dimensions.单数) + '</th><td>' + makeChangeData(YestoneSellData.field_4[2].dimensions.访客, beforeYestOneSellData.field_4[2].dimensions.访客) + '</th></tr>')
    }
    //生成转化表
    $("#DataTitle").append('<br><table class="gridtable" id = "zhuanhuaTable"><tr><th></th><th>总转化率</th><th>询单转化率</th><th>自然转化率</th></tr></table>')
    if (beforeYestOneSellData == null) {
        $("#zhuanhuaTable").append('<tr><td>转化</td><td>' + YestoneSellData.field_5[0].dimensions.总转化率 + '</td><td>' + YestoneSellData.field_5[0].dimensions.询单转化率 + '</td><td>' + YestoneSellData.field_5[0].dimensions.自然转化率 + '</td></tr></table>')
    } else {
        $("#zhuanhuaTable").append('<tr><td>转化</td><td>' + makeChangeData(YestoneSellData.field_5[0].dimensions.总转化率, beforeYestOneSellData.field_5[0].dimensions.总转化率) + '</td><td>' + makeChangeData(YestoneSellData.field_5[0].dimensions.询单转化率, beforeYestOneSellData.field_5[0].dimensions.询单转化率) + '</td><td>' + makeChangeData(YestoneSellData.field_5[0].dimensions.自然转化率, beforeYestOneSellData.field_5[0].dimensions.自然转化率) + '</td></tr></table>')
    }
    //生成推广数据
    $("#DataTitle").append('<br><table class="gridtable" id = "tuiguangTable"><tr><th></th><th>费用</th><th>投产</th></tr></table>')
    if (beforeYestOneSellData == null) {
        $("#tuiguangTable").append('<tr><td>推广</td><td>' + YestoneSellData.field_6[0].dimensions.消耗费用 + '</td><td>' + YestoneSellData.field_6[0].dimensions.投产比 + '</td></tr></table>')
    } else {
        $("#tuiguangTable").append('<tr><td>推广</td><td>' + makeChangeData(YestoneSellData.field_6[0].dimensions.消耗费用, beforeYestOneSellData.field_6[0].dimensions.消耗费用) + '</td><td>' + makeChangeData(YestoneSellData.field_6[0].dimensions.投产比, beforeYestOneSellData.field_6[0].dimensions.投产比) + '</td></tr></table>')
    }
}