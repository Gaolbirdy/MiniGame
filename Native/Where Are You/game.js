import './js/libs/weapp-adapter';
import Face from './js/face';

const TOUCHNUMS = 3;
let life = TOUCHNUMS;
let lineX, lineY, lineXEnd, lineYend;

let context = canvas.getContext('2d');
context.fillStyle = 'white';
let image = wx.createImage();

let face = new Face();

start();

function start() {
	image.onload = function () {
		render();
	};
	image.src = 'images/face.png';

	update();
	render();
}

let tempAlpha = 1;

function render() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	context.globalAlpha = tempAlpha - 1 / (60 * 3.5);	
	tempAlpha = context.globalAlpha;
	// context.globalAlpha = 0.5;	
	context.beginPath();	
	context.drawImage(image, face.x, face.y, image.width * 2, image.height * 2);
	context.fillRect(face.x - 50 , face.y - 50, 100, 100);
	context.closePath();
	context.save();

	context.globalAlpha = 1;	
	context.beginPath();
	context.font = '25px Arial';
	context.textAlign = 'center';
	context.fillText('点触机会: ' + life, canvas.width / 2, canvas.height / 2);
	context.closePath();
	context.save();

	context.moveTo(lineX, lineY);       //设置起点状态
	context.lineTo(lineXEnd, lineYend);       //设置末端状态
	context.lineWidth = 10;          //设置线宽状态
	context.strokeStyle = 'red' ;  //设置线的颜色状态
	context.stroke();               //进行绘制


	requestAnimationFrame(render);
}

function update() {
	face.move();

	requestAnimationFrame(update);	

}


// 触摸事件监听
wx.onTouchStart((res) => {
	// console.log(res.touches);
	// console.log(res.touches.length)

	life -= res.touches.length;
	lineX = res.touches[0].clientX;
	lineY = res.touches[0].clientY;
	getResult(res.touches[0].clientX, res.touches[0].clientY);
});

// wx.onTouchEnd((res) => {
// 	// console.log(res.touches);
// 	// console.log(res.touches.length)

// 	lineXEnd = res.changedTouches[0].clientX;
// 	lineYend = res.changedTouches[0].clientY;
// });

wx.onTouchMove((res) => {
	console.log(res);
	lineXEnd = res.changedTouches[0].clientX;
	lineYend = res.changedTouches[0].clientY;
});


// 根据触摸位置，判定成绩结果
function getResult(x, y) {
	if ((x >= face.x - 50 && x <= face.y + 50) && (y >= face.y - 50 && y <= face.y + 50)) {
		console.log(1);
		context.fillStyle = 'yellow';
		context.globalAlpha = 1;
	}
}