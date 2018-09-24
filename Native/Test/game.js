// require('./js/libs/weapp-adapter.js')
var log = console.log;

// console.log(window === GameGlobal);
// console.log(GameGlobal);
// console.log(window);
// console.log(window === window.window);
// console.log(window.GameGlobal === GameGlobal.window);

// console.log(canvas === GameGlobal.canvas);
// console.log(canvas === window.canvas);
// console.log(canvas);
// var context = canvas.getContext('2d');
// context.fillStyle = 'blue';
// context.fillRect(20, 20, 100, 100);

// var img = new Image();
// console.log(img);
// img.onload = () => {
//   context.drawImage(img, 30, 30);
// };
// img.src = "images/icon.png";


// GameGlobal.render = function()
// {
//     var screenCanvas = wx.createCanvas();
//     console.log(screenCanvas.width, screenCanvas.height);

//     var context = screenCanvas.getContext('2d');
//     context.fillStyle = 'red';
//     context.fillRect(0, 0, 100, 100);

//     var offScreenCanvas = wx.createCanvas();
//     var offContext = offScreenCanvas.getContext('2d');
//     offContext.fillStyle = 'blue';
//     offContext.fillRect(0, 0, 100, 100);

//     context.drawImage(offScreenCanvas, 0, 120);

//     // canvas.width = 300;
//     // canvas.height = 300;

//     var image = wx.createImage();
//     image.onload = function () {
//         console.log(image.width, image.height);
//         context.drawImage(image, 0, 0);
//     };
//     image.src =             'http://8.pic.pc6.com/thumb/up/2017-1/2017112144098759758066416130_75_75.png';
// }

// render();


// wx.onTouchStart(function(e)
// {
//     console.log(e.touches);
// });

// wx.onTouchMove(function(e)
// {
//     console.log(e.touches);
// });

// wx.onTouchEnd(function (e) 
// {
//     console.log(e.touches);
// });

// wx.onTouchCancel(function (e) 
// {
//     console.log(e.touches);
// });

// console.log(GameGlobal.setTimeout === setTimeout);
// console.log(GameGlobal.requestAnimationFrame === GameGlobal.requestAnimationFrame);

// console.log(GameGlobal === GameGlobal.GameGlobal);


// var document = {
//     createElement: function (tagName) {
//         tagName = tagName.toLowerCase();
//         if (tagName === 'canvas')
//             return wx.createCanvas();
//         else if (tagName === "image")
//             return wx.createImage();
//     }
// };

// var canvas = document.createElement('canvas');
// // var canvas = wx.createCanvas();
// // console.log(GameGlobal.canvas);
// // console.log(canvas);
// // console.log(canvas == GameGlobal.canvas);
// console.log(canvas.width, canvas.height);
// var context = canvas.getContext('2d');
// context.fillStyle = 'red';
// context.fillRect(0, 0, 100, 100);


// var image = document.createElement('image');

// function Image()
// {
//     wx.createImage();
// }

// var img = new Image();
// console.log(img);

// let canvas = document.createElement('canvas');
// console.log(canvas);

// let canvas = wx.createCanvas();
// let context = canvas.getContext('2d');

// var audio = wx.createInnerAudioContext();
// audio.src = "./audio/bgm.mp3";   // 本地资源在手机上播放不出来
// audio.src = "audio/bgm.mp3";
// audio.src = "http://sc1.111ttt.cn/2018/1/03/13/396131232171.mp3";
// audio.play();

// let { screenWidth, screenHeight, pixelRatio } = wx.getSystemInfoSync();
// console.log(screenWidth, screenHeight, pixelRatio);

// let canvas = document.createElement('canvas');
// let audio = document.createElement('audio');
// console.log(canvas);
// console.log(audio);

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.document);
// console.log(GameGlobal.document);
// console.log(GameGlobal.document === window.document);


// var drawLogo = require('./js/util/drawLogo');
// var canvas = wx.createCanvas();
// drawLogo(canvas, 40, 40);


// log("主包内容");

// const loadTask1 = wx.loadSubpackage(
// {
//     name: "pak1",
//     success: function(res)  // res? 回调函数的参数，但在这里如res.progress等属性undefined
//     {
//         // log(res);
//         log("加载成功   " + res);
//     },
//     fail: function(res)
//     {
//         log("加载失败   " + res);             
//     },
//     // complete: function(res)
//     // {
//     //     log("加载完成   " + res);
//     // }
// });

// loadTask1.onProgressUpdate(res => {
//     log(res);
//     log("下载进度  ", res.progress);
//     log("已经下载的数据长度  ", res.totalBytesWritten);
//     log("预期需要下载的数据总长度  ", res.totalBytesExpectedToWrite);
// });

// const loadTask2 = wx.loadSubpackage(
// {
//     name: "pak2",
//     success: function (res) {
//         log("加载成功   " + res);
//     },
//     fail: function (res) {
//         log("加载失败   " + res);
//     },
//     // complete: function (res) {
//     //     log("加载完成   " + res);
//     // }
// });

// loadTask2.onProgressUpdate(r => {
//     log(r);
//     log("下载进度  ", r.progress);
//     log("已经下载的数据长度  ", r.totalBytesWritten);
//     log("预期需要下载的数据总长度  ", r.totalBytesExpectedToWrite);
// });

// // loadTask2.onProgressUpdate(() => {
// //     log(213);
// // });


// var audio = wx.createInnerAudioContext();
// audio.src = "audio/bgm.mp3";
// audio.obeyMuteSwitch =  false;
// audio.autoplay = true;
// audio.loop = true;
// // audio.play();

// wx.onShow(function()
// {
//     audio.play();
// });

// wx.onAudioInterruptionBegin(function()
// {
//     // 暂停游戏
// });

// wx.onAudioInterruptionEnd(function()
// {
//     audio.play();
// })

// var destroy = function () 
// {
//     audio.destroy();
// };
// // var destroy = audio.destroy;    // 这样setTimeout没效果，不行 为什么 和BOM原生的方法一样?
// setTimeout(destroy, 3000);


// var fs = wx.getFileSystemManager();
// log(fs);

// const ICON_IMAGE = "images/icon.png";

// wx.chooseImage(
// {
//     success: function (res)
//     {
//         var tempFilePaths = res.tempFilePaths;
//         // log(tempFilePaths.length);

//         // wx.saveFile({
//         //     tempFilePath: tempFilePaths[0],
//         //     success: function(res)
//         //     {
//         //         log(res.savedFilePath);
//         //     },
//         //     fail: function (res) {
//         //         log(res.savedFilePath);
//         //     },
//         //     complete: function (res) {
//         //         log(res.savedFilePath);
//         //     }
//         // });

//         // log(typeof res.tempFilePaths);
//         // log(typeof tempFilePaths);

//         // save 必须在选照片的success回调里面调用save，才有效

//         log(tempFilePaths[0]);
//         var fs = wx.getFileSystemManager();
//         fs.saveFile(
//         {
//             tempFilePath: tempFilePaths[0],
//             success(res) {
//                 log(res.savedFilePath);
//             },
//             fail(res) {
//                 // log(this.tempFilePath);
//                 // log(res.savedFilePath);
//                 log(res.errMsg);
//             },
//             complete(res) {
//                 log(res.savedFilePath);
//             }
//         });
//     }
// });
// // log(tempFilePaths.length);

// const fs = wx.getFileSystemManager();
// log(wx.env.User_DATA_PATH);
// fs.writeFileSync(`${wx.env.USER_DATA_PATH}/test.txt`, 'hello, mini', 'utf8');
// var s = fs.readFileSync(`${wx.env.USER_DATA_PATH}/test.txt`, 'utf8');
// log(wx.env.User_DATA_PATH);
// log(`${wx.env.USER_DATA_PATH}/test.txt`);
// log(`${wx.env.USER_DATA_PATH}`);
// log(s);

// const fs = wx.getFileSystemManager();
// var s = fs.readFileSync('temp/test.txt', 'utf8');
// log(s);
// // fs.writeFileSync('temp/test.txt', 'hello, mini', 'utf8');   //  代码包没有写权限
// fs.writeFile(
// {
//     filePath: 'temp/test.txt',
//     data: 'hello, mini',
//     encoding: 'utf8',
//     success: function()
//     {
//         log("success");
//     }, 
//     fail: function(res)
//     {
//         log(res.errMsg);
//     },
//     complete: function(res)
//     {
//         log('complete');
//     }
// });

// // var str = fs.readFileSync('temp/test.txt', 'utf8');
// // log(str);

// if (wx.getUpdateManager)
//     log("支持wx.getUpdateManager")

// var update = wx.getUpdateManager();
// log(update.onCheckForUpdate(function (x)
// {
//     log(12);
//     log(x);
//     log(x.hasUpdate);
// }));

// if(typeof wx.getUpdateManager === "function")
// {
//     const updateManager = wx.getUpdateManager();

//     updateManager.onCheckForUpdate(function (res) {
//     // 请求完新版本信息的回调
//         log(res.hasUpdate);

//         if (res.hasUpdate)
//             log("有版本更新");
//         else
//             log("无版本更新")
//     });

//     updateManager.onUpdateReady(function()
//     {
//         log("新版本已下载好");
//         updateManager.applyUpdate();
//         log("应用新版本");
//     });

//     updateManager.onUpdateFailed(function()
//     {
//         log("更新新版本失败");
//     });
// }


// var worker = wx.createWorker('workers/request/index.js'); // 文件名指定 worker 的入口文件路径，绝对路径
// worker.postMessage({
//     msg: 'hello from game 主线程'
// });

// worker.onMessage(function (res) {
//     console.log(res);
//     console.log(res.msg);
// });


// wx.login({
//     success: function()
//     {
//         wx.getUserInfo({
//             fail: function(res)
//             {
//                 // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
//                 if(res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1)
//                 {
//                     // 处理用户拒绝授权的情况
//                     log("UseInfo deny");
//                 }
//                 log("fail");
//             },
//             complete: function()
//             {
//                 log("complete");
//             },
//             success: function () {
//                 log("success");
//             }
//         });
//         // log("login success");
//     }
// });

// wx.authorize({
//     scope: 'scope.record',
//     fail: function(res)
//     {
//         if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1)
//         {
//             log('record deny');
//         }
//     },
//     complete: function(res)
//     {
//         log('complete');
//     }
// });

// wx.getSetting(
// {
//     success: function(res)
//     {
//         // log(res.authSetting);
//         var authSetting = res.authSetting;
//         if (authSetting['scope.scope.address'] === true)
//         {
//             // 用户已授权，可以直接调用相关 API
//         }
//         else if (authSetting['scope.scope.address'] === false)
//         {
//             // 用户已拒绝授权，再调用相关 API 或者 wx.authorize 会失败，需要引导用户到设置页面打开授权开关
//         }
//         else
//         {
//             // 未询问过用户授权，调用相关 API 或者 wx.authorize 会弹窗询问用户
//             log(authSetting['scope.scope.address'], "未询问过");
//         }
//     }
// });


// let button = wx.createGameClubButton(
// {
//     icon: 'green',
//     style:
//     {
//         left: 10,
//         top: 76,
//         width: 40,
//         height: 40
//     }
// });


// let openDataContext = wx.getOpenDataContext();
// openDataContext.postMessage(
//     {
//         text: 'hello',
//         year: (new Date().getFullYear())
//     }
// );

// wx.setUserCloudStorage(
// {
//         KVDataList: [{ key: 'score', value: "123" }, { key: 'maxScore', value: "1000" }],
//     success: res => {
//         console.log(res);

//         // 让子域更新当前用户的最高分，因为主域无法得到getUserCloadStorage;
//         openDataContext.postMessage(
//         {
//             type: 'updateMaxScore'
//         });

//     },
//     fail: res => {
//         console.log("set fail");
//     }
// });

// let canvas = wx.createCanvas();
// let context = canvas.getContext('2d');
// function draw()
// {
//     openDataContext = wx.getOpenDataContext();
//     let sharedCanvas = openDataContext.canvas;

//     // log(sharedCanvas);


//     context.drawImage(sharedCanvas, 50, 150)
//     context.fillStyle = 'blue';
//     context.fillRect(0, 0, 100, 100);
//     requestAnimationFrame(draw);
// }
// draw();

// // sharedCanvas 的宽高只能在主域设置，不能在开放数据域中设置。
// sharedCanvas.width = 400;
// sharedCanvas.height = 200;

// sharedCanvas 本质上也是一个离屏 Canvas，而重设 Canvas 的宽高会清空 Canvas 上的内容。所以要通知开放数据域去重绘 sharedCanvas。
// openDataContext.postMessage(
//     {
//         command: 'render'
//     }
// );


// wx.requestMidasPayment(
// {
//     mode: 'game',
//     offerId: '',
//     buyQuantity: 10,
//     zoneId: 1,
//     success(){

//     },
//     fail({errMsg, errCode})
//     {
//         log(errMsg, errCode);
//     }
// });


// wx.onShow(function(option)
// {
//     var scene = decodeURIComponent(option.query.scene);
//     log(scene);
// });

// wx.showShareMenu();
// wx.onShareAppMessage(function()
// {
//     return {title: '转发标题'};
// });

// wx.shareAppMessage(
// {
//     title: '主动转发标题test',
// });

// var canvas = wx.createCanvas();
// var context = canvas.getContext('2d');
// context.fillStyle = 'blue';
// context.fillRect(20, 20, 100, 100);

// wx.onShareAppMessage(function()
// {
//     return {
//         title: '主动转发标题test',
//         imageUrl: canvas.toTempFilePathSync(
//             {
//                 desWidth: 500,
//                 desHeight: 400
//             }
//         )
//     }
// });

// wx.updateShareMenu(
//     {
//         withShareTicket: true
//     }
// )


// let bannerAd = wx.createBannerAd(
// {
//     adUnitId: '123',
//         style: {
//         left: 10,
//         top: 76,
//         width: 320
//     }
// }
// );
// bannerAd.show().catch(err => log(err));
// bannerAd.show().then(() => log('banner广告显示'));

// bannerAd.style.width = 400;

// bannerAd.onError(err =>
// {
//     log(err);
// });

// bannerAd.onLoad(() => {
//     log('banner广告加载成功');
// });

// let {screenWidth} = wx.getSystemInfoSync();
// log(screenWidth);

// bannerAd.onResize(res =>
// {
//     log(res.width, res.height);
//     log(bannerAd.style.realWidth, bannerAd.style.realHeight);
// });

// bannerAd.destroy();

// let video1 = wx.createRewardedVideoAd({ adUnitId: 'xxxx' });
// let video2 = wx.createRewardedVideoAd({ adUnitId: 'xxxx'});
// log(video1 === video2);

// video2.onLoad(() =>
// {
//     log('激励视频 广告加载成功');
// })

// video2.show().then(() => log('激励视频 广告显示'));

// video2.onError(err => {
//     log(err);
// });

// video2.show().catch(err => log(err));
// video2.show().catch(err => {
//     video2.load().then(() => video2.show());
// });

// var canvas = wx.createCanvas();
// log(canvas, canvas.width, canvas.height);
// var context = canvas.getContext('2d');
// context.fillStyle = 'blue';
// context.fillRect(20, 20, 100, 100);

// var gl = canvas.getContext('webgl');
// log(gl);
// const texture = gl.createTexture();
// log(texture);
// gl.bindTexture(gl.TEXTURE_2D, texture);

// var path = canvas.toTempFilePath(
// {
// 	x: 10,
// 	y: 10,
// 	width: 100,
// 	height: 100,
// 	desWidth: 200,
// 	desHeight: 200,
// 	success: (res) =>
// 	{
// 		log(typeof res);
// 		log(res);
// 		log(res.tempFilePath);

// 		wx.shareAppMessage(
// 		{
// 			imageUrl: res.tempFilePath
// 		});
// 	}
// });

// let tempFilePath = canvas.toTempFilePathSync(
// {
// 	x: 10,
// 	y: 10,
// 	width: 200,
// 	height: 150,
// 	desWidth: 400,
// 	desHeight: 300	
// }	
// );
// log(tempFilePath);
// wx.shareAppMessage(
// 	{
// 		imageUrl: tempFilePath
// 	}
// )

// wx.getSystemInfo(
// {
// 	success: (res) =>
// 	{
// 		log(res.benchmarkLevel)
// 		log(res.brand)
// 	}
// }
// )

// log(wx.getSystemInfoSync().brand);
// log(wx.getSystemInfoSync().battery);

// let button = wx.createUserInfoButton({
// 	type: 'text',
// 	text: '获取用户信息',
// 	style: {
// 		left: 10,
// 		top: 76,
// 		width: 200,
// 		height: 40,
// 		lineHeight: 40,
// 		backgroundColor: '#ff0000',
// 		color: '#ffffff',
// 		textAlign: 'center',
// 		fontSize: 16,
// 		borderRadius: 4
// 	}
// })
// button.onTap((res) => {
// 	console.log(res)
// })

// wx.getUserInfo({
// 	success: function (res) {
// 		var userInfo = res.userInfo
// 		var nickName = userInfo.nickName
// 		var avatarUrl = userInfo.avatarUrl
// 		var gender = userInfo.gender //性别 0：未知、1：男、2：女
// 		var province = userInfo.province
// 		var city = userInfo.city
// 		var country = userInfo.country
// 		log(province)
// 	}
// })

// wx.getUserInfo({
// 	openIdList: ['ownAP0b9qt6AzvYOSWOX8VX8KMq0', 'ownAP0QJHIN2w3X60EUsj2Vah5Ig', 'ownAP0f8ANWUCcloXN1oZPfxtz0g'],
// 	lang: 'zh_CN',
// 	success: (res) => {
// 		console.log('success', res.data)
// 		console.log('success', res)
// 	},
// 	fail: (res) => {
// 		reject(res)
// 	}
// })

// let button = wx.createOpenSettingButton({
// 	type: 'text',
// 	text: '打开设置页面',
// 	style: {
// 		left: 10,
// 		top: 76,
// 		width: 200,
// 		height: 40,
// 		lineHeight: 40,
// 		backgroundColor: '#ff0000',
// 		color: '#ffffff',
// 		textAlign: 'center',
// 		fontSize: 16,
// 		borderRadius: 40
// 	}
// })

// let button = wx.createGameClubButton({
// 	icon: 'green',
// 	style: {
// 		left: 10,
// 		top: 76,
// 		width: 40,
// 		height: 40
// 	}
// })