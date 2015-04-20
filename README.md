> 微信页面在PC侧查看时，无法实现WeixinJSBridge接口，也无法正常体验流程，故pc版jsBridge登场了

使用方式
chrome打开任意页面，添加书签，标题写 JSBridge，内容写以下内容

    javascript:void((function(){var d=document.createElement('script');d.type='text/javascript';d.src='http://3glogo.gtimg.com/wxgame/rs/pcjsBridge.js?t=1420788186';document.body.appendChild(d);})())

当页面加载完成时，点刚刚添加的书签，此时WeixinJsBridge就可以正常调用了

如果已经填加了`document.addEventListener('WeixinJSBridgeReady',function abc(){ })`

此时abc函数就会被调用了

- 自定义返回值，以`WeixinJSBridge.invoke('getInstallState',{},function(res){})`为例 分两种方式：

```javascript
//传入参数ret为PC版特有，可选，用于调用PC侧模拟接口时用该值做为回调函数的返回值
WeixinJSBridge.invoke('getInstallState', {
        "packageUrl" : "XXXXX",
        "packageName" : "XXXXX",
        "ret" : "yes"
    },
    function (res) {
        if (res.err_msg.indexOf('yes') != -1) {
            alert("已安装");
        }
    }
);
- 所有接口统一返回 安装成功
`WeixinJSBridge.setReturn('getInstallState', 'yes');`
//通过传入参数来确定返回值，定义`window.getInstallState`为函数，并且让该函数直接返回对应`key`值
//@ param retObj 可以支持的返回状态对象，return 对应的值 ** 必须 ** 为retObj的key才会第一次
//@ param callParam 调用参数，正式接口的调用参数，如果 callParam中带有ret值
function getInstallState(retObj, callParam) {
    //console.log(retObj);
    //console.log(callParam);
    return 'yes'; // yes/no
}

- 回调函数调用优先级高于`setReturn`,同时设置`WeixinJSBridge.setReturn`和定义对应的接口函数时，`setReturn`的返回值不生效##
运行实例：

```javascript
function getInstallState(ret, gameinfo){ 
    if( (gameinfo.packageUrl && gameinfo.packageUrl.indexOf('7')!=-1)
      || (gameinfo.packageName && gameinfo.packageName.indexOf('7')!=-1)
    ){
        console.debug('no',gameinfo.packageUrl||gameinfo.packageName);
        return 'no';
    }else{
        console.debug('yes',gameinfo.packageUrl||gameinfo.packageName);
        return 'yes'
    }
}


- 返回消息具体实现

```javascript
function process(retObj, param, strFunc) {
    var rnd = [],
        idx = 0,
        msg = '';
    for (var i in retObj) {
        if (i != 'ret') {
            rnd.push(i);
        }
    }
    param = param || {};
    if (strFunc && strFunc in WeixinJSBridge.settings && WeixinJSBridge.settings[strFunc] in retObj) {
        param.ret = WeixinJSBridge.settings[strFunc];
    }
    if (typeof (window[strFunc]) == 'function') {
        var ret = window[strFunc].call(WeixinJSBridge, retObj, param);
        if (typeof (ret) == 'string' && ret in retObj) {
            param.ret = ret;
        }
    }
    idx = ('ret' in param && param.ret in retObj) ? param.ret : rnd[Math.floor(Math.random() * rnd.length)],
    msg = retObj[idx];
    return {
        err_code: idx,
        err_msg: msg
    };
}


运行结果：
