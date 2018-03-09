<?php
    //引入文件
    include "./tbsdk/TopSdk.php";
    $appkey = "24813912";
    $secret = "60afb8c12e2e930d454422cadb09ab3f";

    $babyid = $_POST['babyid'];
    $babynum = $_POST['babynum'];



    $c = new TopClient;
    $c->appkey = $appkey;
    $c->secretKey = $secret;
    $c->format = "json";
    //$req = new TbkTpwdCreateRequest;
    //$req->setText("郭文卓真帅");
    //$req->setUrl("https://h5.m.taobao.com/awp/core/detail.htm?locate=guessitem-item&spm=a2141.1.guessitem.guessitem-$babynum&//scm=1007.12286.76309.110&id=$babyid");
    //$req->setLogo("https://uland.taobao.com/");
    //$req->setExt("{}");
    //$resp = $c->execute($req);
    //echo $resp->data->model;
    $req = new WirelessShareTpwdCreateRequest;
    $tpwd_param = new GenPwdIsvParamDto;
    $tpwd_param->ext="{\"xx\":\"xx\"}";
    $tpwd_param->logo="https://uland.taobao.com/";
    $tpwd_param->url="https://h5.m.taobao.com/awp/core/detail.htm?locate=guessitem-item&spm=a2141.1.guessitem.guessitem-$babynum&//scm=1007.12286.76309.110&id=$babyid";
    $tpwd_param->text="超值活动，惊喜活动多多";
    $tpwd_param->user_id="12312312";
    $req->setTpwdParam(json_encode($tpwd_param));
    $resp = $c->execute($req);
    echo $resp->model;
    //print_r($resp);
    

?>