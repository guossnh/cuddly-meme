# -*- coding: UTF-8 -*-

#这是产品对象的实体类,因为是根据交易信息的标题标识的,所以可能有出错的地方.暂时的解决方法

class orderVO():
    babyName = ""#产品名称
    sellId = ""#交易ID
    babyRemark = ""#卖家备注
    babyWeixinMoney = 0#微信销售金额
    babyWeixinNum = 0#微信销售数量
    weixinRemarkMoney =0#微信标记数量
    weixinReakNum =0#微信标记数量
    babysellMoney0 = 0#真实销售本金
    babysellMoney1 = 0#真实销售佣金
    babysellNum = 0#真实销售数量
    babyWebMoney = 0#网站放单金额
    babyWebNum =0#网站放单数量
    noRemarkMoney =0#没有标记的总金额
    noRemarkNum =0#没有标记的总数量
    unknowRemarkMoney =0#没有识别标记的总金额
    unknowRemarkNum =0#没有识别标记的总数量

    #G-GWZ-MJ*1(100+5)[STKD]   这些是标记范例
    #GWZ-PJW*1+JCF*2[BSKD]
    #V-GWZ-PJW*1[YDKD]
    def __init__(self,sellRemark,money,name,sellId):
        self.babyName = name
        self.sellId = sellId
        if(sellRemark.find('null')!=-1):
            pass
    def addOneData(self):
        pass