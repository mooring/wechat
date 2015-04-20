window.WeixinJSBridge = window.WeixinJSBridge || {
    _SPT: {
        hideToolbar: {
            fn: function () {
                console.log("hideToolbar called");
            }
        },
        showToolbar: {
            fn: function () {
                console.log("showToolbar called");
            }
        },
        hideOptionMenu: {
            fn: function () {
                console.log("hideOptionMenu called");
            }
        },
        showOptionMenu: {
            fn: function () {
                console.log("showOptionMenu called");
            }
        },
        closeWindow: {
            fn: function () {
                console.log("closeWindow called");
                window.close();
            }
        },
        getNetworkType: {
            fn: function (param, cbk) {
                if (typeof (cbk) == 'function') {
                    var retObj = {
                            fail: 'network_type:fail',
                            wifi: 'network_type:wifi',
                            wwan: 'network_type:wwan',
                            edge: 'network_type:edge'
                        },
                        msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'getNetworkType');
                    console.log("getNetworkType called");
                    if (WeixinJSBridge.isFunc(cbk)) {
                        cbk.call(WeixinJSBridge, msgObj);
                    }
                }
            }
        },
        imagePreview: {
            fn: function () {
                console.log("imagePreview called");
            }
        },
        scanQRCode: {
            fn: function (url) {
                console.log("scanQRCode called");
                if (/^https?:\/\//i.test(url)) {
                    location.href = url;
                }
            }
        },
        /*
		@param res{webtype: "1",username: 'gh_122a2ee67fae'}
		 */
        profile: {
            fn: function (param, cbk) {
                if (!param || !('username' in param)) {
                    WeixinJSBridge.notSupport('profile', cbk);
                } else {
                    var retObj = {
                            added: 'add_contact:added',
                            ok: 'add_contact:ok',
                            cancel: 'add_contact:cancel'
                        },
                        msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'profile');
                    console.log('profile called');
                    if (WeixinJSBridge.isFunc(cbk)) {
                        cbk.call(WeixinJSBridge, msgObj);
                    }
                }
            }
        },
        addContact: {
            fn: function (param, cbk) {
                if (!param || !('webtype' in param) || !('username' in param)) {
                    WeixinJSBridge.notSupport('profile', cbk);
                } else {
                    var retObj = {
                            added: 'add_contact:added',
                            ok: 'add_contact:ok',
                            cancel: 'add_contact:cancel'
                        },
                        msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'addContact');
                    console.log('addContact called');
                    if (WeixinJSBridge.isFunc(cbk)) {
                        cbk.call(WeixinJSBridge, msgObj);
                    }
                }
            }
        },
        sendAppMessage: {
            fn: function (param, cbk) {
                var retObj = {
                        cancel: "send_app_msg:cancel",
                        confirm: "send_app_msg:confirm",
                        ok: "send_app_msg:ok"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'sendAppMessage');
                console.log('sendAppMessage called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        shareTimeline: {
            fn: function (param, cbk) {
                var retObj = {
                        ok: "share_timeline:ok",
                        cancel: "share_timeline:cancel"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'shareTimeline');
                console.log('shareTimeline called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        shareWeibo: {
            fn: function (param, cbk) {
                var retObj = {
                        ok: "share_timeline:ok",
                        cancel: "share_weibo:cancel",
                        no_weibo: "share_weibo:no_weibo",
                        not_bind_qq: "share_weibo:not_bind_qq",
                        fail: "share_weibo:fail"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'shareWeibo');
                console.log('shareWeibo called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        sendEmail: {
            fn: function (param, cbk) {
                var retObj = {
                        ok: "share_timeline:ok",
                        cancel: "share_weibo:cancel",
                        no_weibo: "share_weibo:no_weibo",
                        not_bind_qq: "share_weibo:not_bind_qq",
                        fail: "share_weibo:fail"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'sendEmail');
                console.log('sendEmail called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        hasEmoticon: {
            fn: function (param, cbk) {
                var retObj = {
                        no_url: "has_emoticon:no_url",
                        no: "has_emoticon:no",
                        yes: "has_emoticon:yes"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'hasEmoticon');
                console.log('hasEmoticon called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        addEmoticon: {
            fn: function (param, cbk) {
                var retObj = {
                        no_url: "has_emoticon:no_url",
                        added: "add_emoticon:added",
                        count_extend: "add_emoticon:count_extend",
                        download_failed: "add_emoticon:download_failed",
                        unsupported_type: "add_emoticon:unsupported_type",
                        cancel: "add_emoticon:cancel",
                        unknown: "add_emoticon:unknown"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'addEmoticon');
                console.log('addEmoticon called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        cancelAddEmoticon: {
            fn: function (param, cbk) {
                var retObj = {
                        no_url: "cancel_add_emoticon:no_url",
                        added: "cancel_add_emoticon:added"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'cancelAddEmoticon');
                console.log('cancelAddEmoticon called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        openSpecificView: {
            /*
			specificview:
			- discover："发现"页
			- timeline："朋友圈"页
			- scan："扫一扫"页
			- me："我"页
			- myprofile："个人信息"页
			- myaccount："我的账号"页
			- bindphone："手机通讯录匹配"页
			- privacy："隐私"页
			- general："通用"页
			- Android另有：
			- contacts："通讯录"页
			- addfriend："添加朋友"页
			- newfriend："新的朋友"页
			- searchbrand："搜索公众号"页
			 */
            fn: function (param) {
                console.log('openSpecificView ' + param + ' called');
            }
        },
        getInstallState: {
            fn: function (param, cbk) {
                if (WeixinJSBridge.isFunc(cbk)) {
                    var ver = WeixinJSBridge.isAndroid && param._ver ? '_' + param._ver : '',
                        retObj = {
                            yes: "get_install_state:yes" + ver,
                            no: "get_install_state:no"
                        },
                        msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'getInstallState');
                    console.log('getInstallState called');
                    if (WeixinJSBridge.isFunc(cbk)) {
                        cbk.call(WeixinJSBridge, msgObj);
                    }
                }
            }
        },
        launch3rdApp: {
            /*
			"appID": 'appid',
			"messageExt": "from=webview",
			"extInfo": "from=webview"
			 */
            fn: function (param, cbk) {
                var retObj = {
                        ok: "launch_3rd_app:ok"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'launch3rdApp');
                console.log('launch3rdApp called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        addDownloadTask: {
            android: 1,
            fn: function (param, cbk) {
                var retObj = {
                        ok: "add_download_task:ok",
                        fail: "add_download_task:fail"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'addDownloadTask');
                console.log('addDownloadTask called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    param = param || {};
                    msgObj.download_id = (('1' + Math.random() + param.file_md5).replace(/[^\d]+/g, '') || new Date().getTime()).substr(0, 10);
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        queryDownloadTask: {
            android: 1,
            fn: function (param, cbk) {
                var retObj = {
                        downloaded: "download_succ",
                        downloading: "downloading",
                        downloadfail: "download_fail"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'queryDownloadTask');
                console.log('queryDownloadTask called');
                msgObj.state = msgObj.err_msg;
                delete msgObj.err_msg;
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        cancelDownloadTask: {
            android: 1,
            fn: function (param, cbk) {
                var retObj = {
                        ok: "cancel_download_task:ok",
                        fail: "cancel_download_task:fail"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'cancelDownloadTask');
                console.log('cancelDownloadTask called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        installDownloadTask: {
            android: 1,
            fn: function (param, cbk) {
                var retObj = {
                        fail: "install_download_task:fail",
                        ok: "install_download_task:ok"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'installDownloadTask');
                console.log('installDownloadTask called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        openUrlByExtBrowser: {
            ios: 1,
            fn: function (url) {
                console.log('openUrlByExtBrowser called');
                window.open(url);
            }
        },
        getBrandWCPayRequest: {
            fn: function (param, cbk) {
                var retObj = {
                        cancel: "get_brand_wcpay_request:cancel",
                        ok: "get_brand_wcpay_request:ok"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'getBrandWCPayRequest');
                console.log('getBrandWCPayRequest called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        getBrandIAPPayRequest: {
            fn: function (param, cbk) {
                var retObj = {
                        cancel: "get_brand_iappay_request:cancel",
                        ok: "get_brand_iappay_request:ok"
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'getBrandIAPPayRequest');
                console.log('getBrandIAPPayRequest called');
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        editAddress: {
            fn: function (param, cbk) {
                var retObj = {
                        ok: "edit_address:ok",
                        fail: "edit_address:fail"
                    },
                    address = {
                        userName: '收货人姓名',
                        telNumber: '收货人电话',
                        addressPostalCode: '邮编',
                        proviceFirstStageName: '国标收货地址第一级地址',
                        addressCitySecondStageName: '国标收货地址第二级地址',
                        addressCountiesThirdStageName: '国标收货地址第三级地址',
                        addressDetailInfo: '详细收货地址信息',
                        nationalCode: '收货地址国家码'
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'editAddress');
                console.log('editAddress called');
                if (msgObj.err_code == 'ok') {
                    for (var i in address) {
                        msgObj[i] = address[i];
                    }
                }
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        },
        getLatestAddress: {
            fn: function (param, cbk) {
                var retObj = {
                        ok: "edit_address:ok",
                        fail: "edit_address:fail"
                    },
                    address = {
                        userName: '收货人姓名',
                        telNumber: '收货人电话',
                        addressPostalCode: '邮编',
                        proviceFirstStageName: '国标收货地址第一级地址',
                        addressCitySecondStageName: '国标收货地址第二级地址',
                        addressCountiesThirdStageName: '国标收货地址第三级地址',
                        addressDetailInfo: '详细收货地址信息',
                        nationalCode: '收货地址国家码'
                    },
                    msgObj = WeixinJSBridge.getMsgObj(retObj, param, 'getLatestAddress');
                console.log('getLatestAddress called');
                if (msgObj.err_code == 'ok') {
                    for (var i in address) {
                        msgObj[i] = address[i];
                    }
                }
                if (WeixinJSBridge.isFunc(cbk)) {
                    cbk.call(WeixinJSBridge, msgObj);
                }
            }
        }
    },
    getMsgObj: function (retObj, param, strFunc) {
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
        var idx = ('ret' in param && param.ret in retObj) ? param.ret : rnd[Math.floor(Math.random() * rnd.length)],
            msg = retObj[idx];
        return {
            err_code: idx,
            err_msg: msg
        };
    },
    isFunc: function (func) {
        return typeof (func) == 'function';
    },
    notSupport: function (cmd, cbk) {
        if (typeof (cbk) != 'function') {
            cbk = console.log;
        }
        cbk.call(WeixinJSBridge, {
            err_code: 1,
            err_desc: cmd + " is Not Implemented, please contact mooringniu",
            err_msg: "system:function_not_exist"
        });
    },
    invoke: function (cmd) {
        var wxjb = WeixinJSBridge,
            i = 0,
            il = 0,
            spt = wxjb._SPT,
            args = [cmd];
        for (i = 1, il = arguments.length; i < il; i++) {
            args.push(arguments[i]);
        }
        if (cmd in spt) {
            var fnobj = spt[cmd];
            if ((!('ios' in fnobj) && !('android' in fnobj)) || ('ios' in fnobj && wxjb.isiOS) || ('android' in fnobj && wxjb.isAndroid)) {
                fnobj.fn.apply(wxjb, args.splice(1, args.length));
            } else {
                for (i = 1, il = args.length; i < il; i++) {
                    if (typeof (args[i]) == 'function') {
                        wxjb.notSupport(cmd, args[i]);
                        return;
                    }
                }
            }
        }
    },
    call: function (cmd) {
        var obj = [cmd];
        for (var i = 0, il = arguments.length; i < il; i++) {
            obj.push(arguments[i]);
        }
        WeixinJSBridge.invoke.apply(WeixinJSBridge, obj);
    },
    on: function (cmd, cbk) {
        var params = {
            'menu:share:appmessage': 1,
            'menu:share:timeline': 1,
            'wxdownload:state_change': 1
        };
        console.log(cmd + " inited");
    },
    init: function (elem) {
        var ua = navigator.userAgent,
            ios = /i(Phone|Pad|Pod)/i.test(ua),
            android = /linux/i.test(ua) && /android/i.test(ua);
        WeixinJSBridge.isiOS = ios && (ios ^ android);
        WeixinJSBridge.isAndroid = android;
        WeixinJSBridge.settings = {};
        console.log("WeixinJSBridge inited");
        var evt = new Event('WeixinJSBridgeReady');
        if (android) {
            setTimeout(function () {
                (elem || document).dispatchEvent(evt);
            }, Math.floor(Math.random() * 1000));
        } else {
            (elem || document).dispatchEvent(evt);
        }
    },
    setReturn: function (strFunc, ret) {
        if (strFunc in WeixinJSBridge._SPT) {
            WeixinJSBridge.settings[strFunc] = ret;
        }
    },
    log: function () {
        var i = 0,
            il = 0;
        if (navigator.userAgent.indexOf('MicroMessenger') != -1) {
            var obj = [];
            for (i = 0, il = arguments.length; i < il; i++) {
                var arg = arguments[i];
                obj.push(i + '=' + arg);
            }
            new Image().src = 'http://www.qq.com/?' + obj.join('&');
        } else {
            console.log('====================');
            for (i = 0, il = arguments.length; i < il; i++) {
                console.log(i, "=" + arguments[i]);
            }
        }
    }
};
if (WeixinJSBridge.init) {
    WeixinJSBridge.init();
}
/*
bookmark:
javascript: void((function () {
    var d = document.createElement('script');
    d.type = 'text/javascript';
    d.src = 'https://raw.githubusercontent.com/mooring/wechat/master/pcjsBridge.js';
    document.body.appendChild(d);
})())
*/