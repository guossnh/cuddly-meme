# -*- coding: UTF-8 -*-
import os

csvAddress = "c:\\csvCache\\taobaoWeb\\"#web导出表格地址
csvFileList = []#这是存放文件路径的list
productName = []#产品名称列表

class doTaobaoCsv(object):

    def __init__(self,csvAddress):
        pass
    #这个方法是读取csv数据并且对数据进行分析
    def readcsv(self):
        global csvFileList
        for filelink in csvFileList:
            print(filelink)
    #获取该文件夹下边的所有csv文件名称放入list
    def getfile(self):
        global csvAddress,csvFileList
        for file in os.listdir(csvAddress):
            csvFileList.append(csvAddress+file)
        print(csvFileList)

    if __name__ == '__main__':
        getfile(1)
        readcsv(1)