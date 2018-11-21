
import os,time


#997  1840 
#adb shell input tap 250 250

def dianzan():
    os.system("d:/adb/adb shell input tap 997 1840")
    time.sleep(0.06)


if __name__ == '__main__':
    while (1):
        dianzan()