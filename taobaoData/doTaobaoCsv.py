# -*- coding: UTF-8 -*-
import os,re,csv,sys
from orderVO import orderVO
from decimal import Decimal

csvAddress = "c:\\csvCache\\taobaoWeb\\"#web导出表格地址
csvFileList = []#这是存放文件路径的list
orderVOList =[]#这是产品对象的列表
reWeixin = re.compile(r'(G-){1}[A-Z]{2,4}-{1}([A-Z]{1,5}\*{0,1}\d{0,2}\+{0,1})+\({1}\d{1,3}\+{1}\d{1,3}\){1}')
reWangzhan = re.compile(r'(V-){1}[A-Z]{2,4}-{1}([A-Z]{1,5}\*?\d{0,2}\+?)+')
reZhengchang = re.compile(r'[A-Z]{2,4}-{1}([A-Z]{1,5}\*?\d{0,2}\+?)+')
optputFile = "c:\\csvCache\\result.txt"

#这个方法是读取csv数据并且对数据进行分析
def readcsv():
    global csvFileList , orderVOList
    for filelink in csvFileList:
        with open(filelink) as f:
            f_csv = csv.reader(f)
            headers = next(f_csv)
            for row in f_csv:
                if (row[10].find('已')>-1):
                    doTitle(row[19])
                    for ov in orderVOList:
                        if (ov.babyName == row[19]):
                            analysis(ov,row[23],row[8],row[0])

def doTitle(title):
    global orderVOList
    for ov in orderVOList:
        if(ov.babyName == title):
            return
    else:
        orderVOList.append(orderVO(title))
#获取该文件夹下边的所有csv文件名称放入list
def getfile():
    global csvAddress,csvFileList
    for file in os.listdir(csvAddress):
        csvFileList.append(csvAddress+file)

    #G-GWZ-MJ*1(100+5)-ST   这些是标记范例
    #GWZ-PJW*1+JCF*2-BS
    #V-GWZ-PJW*1-YD
def analysis(ov,shellReadmark,money,sellID):
    shellReadmark = shellReadmark.lstrip("'")
    if(shellReadmark.find('null')!=-1):#判断是不是没有填写备注
        ov.noInformation(money)
    elif(reWeixin.match(shellReadmark)):#判断是不是微信刷单  
        weixinre = shellReadmark.split('(')[1].split(')')[0].split('+')
        ov.weixin(money,weixinre[0],weixinre[1])
    elif(reWangzhan.match(shellReadmark)):#判断是不是网站刷单  
        ov.web(money)
    elif(reZhengchang.match(shellReadmark)):#判断是真实单子
        ov.trueSell(money)
    else:
        ov.wrongr(money,sellID)


def output():#输出文本文档
    global optputFile ,orderVOList
    allsellMoney = 0.0
    allWebMoney = 0.0
    allWeixinMoney = 0.0
    allNoRemark = 0.0
    allWrongMoney = 0.0
    with open(optputFile,"w") as f:
        for ov in orderVOList:
            f.write(
            """
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~华丽的分割线~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
            产品标题:"""+str(ov.babyName)+"""\n
            真实销量:"""+str(ov.babysellMoney)+"""总数量:"""+str(ov.babysellNum)+"""\n
            网站刷单:"""+str(ov.babyWebMoney)+"""总数量:"""+str(ov.babyWebNum)+"""\n
            微信刷单:"""+str(ov.babyWeixinMoney)+"""总数量:"""+str(ov.babyWeixinNum)+"""微信备注总额:"""+str(ov.weixinRemarkMoney)+"""佣金总额:"""+str(ov.weixinRemarkMoney2)+"""\n
            没有备注:"""+str(ov.noRemarkMoney)+"""总数量:"""+str(ov.noRemarkNum)+"""\n
            备注不对:"""+str(ov.unknowRemarkMoney)+"""总数量:"""+str(ov.unknowRemarkNum)+"""\n
            备注错误单号:"""+str(ov.worongSellId)+"""
            """
            )
            allsellMoney = Decimal(str(allsellMoney)) + Decimal(str(ov.babysellMoney))
            allWebMoney = Decimal(str(allWebMoney)) + Decimal(str(ov.babyWebMoney))
            allWeixinMoney = Decimal(str(allWeixinMoney)) + Decimal(str(ov.babyWeixinMoney))
            allNoRemark = Decimal(str(allNoRemark)) + Decimal(str(ov.noRemarkMoney))
            allWrongMoney = Decimal(str(allWrongMoney)) + Decimal(str(ov.unknowRemarkMoney))
        f.write("""
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~华丽的总结线~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n
            总共真实销售:"""+str(allsellMoney)+"""
            总共网站放单:"""+str(allWebMoney)+"""
            总共微信刷单:"""+str(allWeixinMoney)+"""
            总共标记错误:"""+str(allWrongMoney)+"""
            总共没有标记:"""+str(allNoRemark)+"""
        """)

if __name__ == '__main__':
    getfile()
    readcsv()
    output()



