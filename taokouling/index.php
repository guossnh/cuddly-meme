<?php
    //引入文件
    include "./tbsdk/TopSdk.php";
    $appkey = "24813912";
    $secret = "60afb8c12e2e930d454422cadb09ab3f";


    $c = new TopClient;
    $c->appkey = $appkey;
    $c->secretKey = $secret;
    $req = new TbkTpwdCreateRequest;
    $req->setText("长度大于5个字符");
    $req->setUrl("https://uland.taobao.com/");
    $req->setLogo("https://uland.taobao.com/");
    $req->setExt("{}");
    $resp = $c->execute($req);
    echo $resp;
    echo gettype($resp);
?>