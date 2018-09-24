// wx.onMessage(data => 
// {
//     console.log(data);
// });

// console.log("OpenData");

// wx.onMessage((data) => {
//     console.log(data);
//     for(var a in data)
//     {
//         console.log(data[a]);
//     }
// });


// function drawRankList(data)
// {
//     var rankStr = '';
//     data.forEach((item, index) =>
//     {
//         console.log(item, index);
//         rankStr += item.nickname + ' ' + item.KVDataList[0].key + ' ' + item.KVDataList[0].value;
//         console.log(rankStr);
//     });


//     let sharedCanvas = wx.getSharedCanvas();
//     let context = sharedCanvas.getContext('2d');
//     context.fillStyle = 'red';
//     context.fillRect(0, 0, 200, 200);

//     const screenWidth = wx.getSystemInfoSync().screenWidth;
//     const screenHeight = wx.getSystemInfoSync().screenHeight;
//     const ratio = wx.getSystemInfoSync().pixelRatio;
//     //绘制元素的时候
//     context.scale(ratio, ratio);// 因为sharedCanvas在主域放大了ratio倍
//     //为了便于计算尺寸，在将context 缩放到750宽的设计稿尺寸，
//     let scales = screenWidth / 750;
//     context.scale(scales, scales);
//     // 接下来你每绘制的一个元素的尺寸，都应该按钮750宽的设计稿/
//     // 比如
//     // 画标题
//     context.fillStyle = '#fff';
//     context.font = '20px Arial';
//     context.textAlign = 'left';
//     context.fillText('排行榜 ' + rankStr, 20, 20); // 750的尺寸
// }

// wx.getFriendCloudStorage(
// {
//     keyList: ['score', 'maxScore'], // 你要获取的、托管在微信后台都key
//     success: res =>
//     {
//         let data = res.data;
//         console.log('getFriend success');
//         console.log(data);
//         // console.log(data[0].KVDataList[0].value);        
//         drawRankList(data);
//     },
//     fail: function()
//     {
//         console.log('getFriend fail');
//     },
//     complete: function(res)
//     {
//         console.log('getFriend complete');

//         // 伪造用户好友的游戏数据数组
//         // let data = [
//         //     {user: "popo", 
//         //     score: 100},
//         //     {user: "renee", 
//         //     score: 200}];
//         // // console.log(data);
//     }
// })


// // sharedCanvas 本质上也是一个离屏 Canvas，而重设 Canvas 的宽高会清空 Canvas 上的内容。所以要通知开放数据域去重绘 sharedCanvas。
// wx.onMessage(data =>
// {
//     if(data.command === 'render')
//     {
//         // ... 重绘 sharedCanvas;
//         console.log('render');
//     }
// })

