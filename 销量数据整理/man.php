<?php
function getHTTPS($url) {   $ch = curl_init();   curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);   curl_setopt($ch, CURLOPT_HEADER, false);   curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);   curl_setopt($ch, CURLOPT_URL, $url);   curl_setopt($ch, CURLOPT_REFERER, $url);   curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);   $result = curl_exec($ch);   curl_close($ch);   return $result; }
?>
<html>

<head>
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/2.0.0/weui.min.css">
    <link rel="stylesheet" href="https://weui.io/example.css">
    <script type="text/javascript" src="https://res.wx.qq.com/open/libs/weuijs/1.1.4/weui.min.js"></script>
    <link rel="stylesheet" href="man.css">
</head>
<body ontouchstart>
<a href="https://jinshuju.net/f/eqbAZf" class="myButton">+</a>
    <div class="page navbar js_show">
        <div class="page__bd" style="height: 100%;">
            <div class="weui-tab">
                <div class="weui-navbar">
                    <div class="weui-navbar__item weui-bar__item_on" id="personData">
                        个人
                    </div>
                    <div class="weui-navbar__item" id="AllData">
                        整体
                    </div>
                </div>
                <div class="weui-tab__panel">
                </div>
            </div>
        </div>
    </div>
    <script>
        var selldata = <?php echo getHTTPS('https://Dre63QDX2ggUV4rK56TaeA:Wm0dn1MZjkt84UoQzOHd-g@jinshuju.net/api/v1/forms/eqbAZf/entries') ?>
    </script>
    <script type="text/javascript" src="man.js"></script>
</body>

</html>