# -*- coding: UTF-8 -*-
import os,re,csv,sys
from orderVO import orderVO

csvAddress = "c:\\csvCache\\taobaoWeb\\"#web导出表格地址
csvFileList = []#这是存放文件路径的list
orderVOList =[]#这是产品对象的列表
reWeixin = re.compile(r'(G-){1}[A-Z]{2,4}-{1}([A-Z]{1,5}\*{0,1}\d{0,2}\+{0,1})+\({1}\d{1,3}\+{1}\d{1,3}\){1}')
reWangzhan = re.compile(r'(V-){1}[A-Z]{2,4}-{1}([A-Z]{1,5}\*?\d{0,2}\+?)+')
reZhengchang = re.compile(r'[A-Z]{2,4}-{1}([A-Z]{1,5}\*?\d{0,2}\+?)+')



#这个方法是读取csv数据并且对数据进行分析
def readcsv():
    global csvFileList
    for filelink in csvFileList:
        with open(filelink) as f:
            f_csv = csv.reader(f)
            headers = next(f_csv)
            for row in f_csv:
                if (row[10].find('已')>-1):
                    doTitle(row[19],row[19],row[19])

def doTitle(title,remark,sellid):
    global orderVOList
    if(len(orderVOList)!=0):
        for ov in orderVOList:
            if(ov.babyName == title):
                pass
            else:
                orderVOList.append(orderVO(title , remark , sellid))
    else:
        orderVOList.append(orderVO(title , remark , sellid))
#获取该文件夹下边的所有csv文件名称放入list
def getfile():
    global csvAddress,csvFileList
    for file in os.listdir(csvAddress):
        csvFileList.append(csvAddress+file)
    print(csvFileList)

    #G-GWZ-MJ*1(100+5)-ST   这些是标记范例
    #GWZ-PJW*1+JCF*2-BS
    #V-GWZ-PJW*1-YD
def analysis(shellReadmark):
    if(shellReadmark.find('null')!=-1):#判断是不是没有填写备注
        print('这是空值')
    elif(reWeixin.match(shellReadmark)):#判断是不是微信刷单  
        print('微信刷单')
    elif(reWangzhan.match(shellReadmark)):#判断是不是网站刷单  
        print('网站刷单')
    elif(reZhengchang.match(shellReadmark)):#判断是真实刷单 
        print('正常单子')
    else:
        print('错误格式')

if __name__ == '__main__':
    getfile()
    readcsv()
    #analysis('GWZ-MJ*1+LJD*2')


