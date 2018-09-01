#-*- coding: utf-8 -*-
import requests
import re
import time
import hashlib
import base64
import struct

URL = "http://api.xfyun.cn/v1/service/v1/tts"
AUE = "raw"
APPID = "5b7e161e"
API_KEY = "05e8486c8815f3f64b01c284f125d418"

def getHeader():
        curTime = str(int(time.time()))
        param = "{\"aue\":\""+AUE+"\",\"auf\":\"audio/L16;rate=16000\",\"voice_name\":\"xiaoyan\",\"engine_type\":\"intp65\"}"
        paramBase64 = base64.b64encode(param)
        m2 = hashlib.md5()
        m2.update(API_KEY + curTime + paramBase64)
        checkSum = m2.hexdigest()
        header ={
                'X-CurTime':curTime,
                'X-Param':paramBase64,
                'X-Appid':APPID,+
                'X-CheckSum':checkSum,
                'X-Real-Ip':'127.0.0.1',
                'Content-Type':'application/x-www-form-urlencoded; charset=utf-8',
        }
        return header

def getBody(text):
        data = {'text':text}
        return data

def writeFile(file, content):
    with open(file, 'wb') as f:
        f.write(content)
    f.close()

r = requests.post(URL,headers=getHeader(),data=getBody("贝虫克体外驱虫喷剂，适用于猫、狗等动物，可有效驱除跳蚤、虱子、蜱虫、虫卵、体外寄生虫等，安全有效，使用时，拨开宠物的被毛，逆毛喷洒，注意不要喷洒到宠物的眼睛、耳道、嘴里，如意外溅入，应立即用清水冲洗，或及时就医，喷洒后应及时佩戴脖圈，防止舔舐，等到风干后取下脖套即可，也可以用吹风机吹干被毛"))
contentType = r.headers['Content-Type']
if contentType == "audio/mpeg":
    sid = r.headers['sid']
    if AUE == "raw":
        writeFile("audio/"+sid+".wav", r.content)
    else :
        writeFile("audio/"+sid+".mp3", r.content)
    print ("success, sid = " + sid)
else :
    print (r.text )