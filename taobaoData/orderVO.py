# -*- coding: UTF-8 -*-

from decimal import Decimal
#这是产品对象的实体类,因为是根据交易信息的标题标识的,所以可能有出错的地方.暂时的解决方法

class orderVO(object):
    babyName = ""#产品名称
    worongSellId = []#交易ID
    babyWeixinMoney = '0'#微信销售金额
    babyWeixinNum = 0#微信刷单数量
    weixinRemarkMoney ='0'#微信刷单总金额
    weixinRemarkMoney2 = '0'#微信刷单总佣金
    babysellMoney = '0'#真实销售
    babysellNum = 0#真实销售数量
    babyWebMoney = '0'#网站放单金额
    babyWebNum =0#网站放单数量
    noRemarkMoney ='0'#没有标记的总金额
    noRemarkNum =0#没有标记的总数量
    unknowRemarkMoney ='0'#没有识别标记的总金额
    unknowRemarkNum =0#没有识别标记的总数量

    def __init__(self,name):
        self.babyName = name
        self.worongSellId=[]

    def weixin(self,money,rmoney,rmoney2):#微信
        self.babyWeixinMoney = Decimal(str(self.babyWeixinMoney)) + Decimal(str(money))
        self.babyWeixinNum = self.babyWeixinNum + 1
        self.weixinRemarkMoney = Decimal(str(self.weixinRemarkMoney)) + Decimal(str(rmoney))
        self.weixinRemarkMoney2 = Decimal(str(self.weixinRemarkMoney2)) + Decimal(str(rmoney2))

    def noInformation(self,money):#没有备注
        self.noRemarkMoney = Decimal(str(self.noRemarkMoney)) + Decimal(str(money))
        self.noRemarkNum = self.noRemarkNum + 1
        
    def web(self,money):#网站放单
        self.babyWebMoney = Decimal(str(self.babyWebMoney)) + Decimal(str(money))
        self.babyWebNum = self.babyWebNum + 1
        
    def wrongr(self,money,sellID):#错误标记
        self.unknowRemarkMoney = Decimal(str(self.unknowRemarkMoney)) + Decimal(str(money))
        self.unknowRemarkNum = self.unknowRemarkNum + 1
        self.worongSellId.append(sellID)

    def trueSell(self,money):#真实销量
        self.babysellMoney = Decimal(str(self.babysellMoney)) + Decimal(str(money))
        self.babysellNum = self.babysellNum + 1