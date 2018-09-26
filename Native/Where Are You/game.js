import './js/libs/weapp-adapter';
import Face from './js/face';

let context = canvas.getContext('2d');
context.fillStyle = 'red'
let image = wx.createImage();

let face = new Face();

start();

function start() {
	image.onload = function () {
		console.log(image.width, image.height);
		render();
	};
	image.src = 'images/face.png';

	update();
	render();
}

function render() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(image, face.x, face.y);
	context.fillRect(face.x - 50 , face.y - 50, 100, 100);

	requestAnimationFrame(render);
}

function update() {
	face.move();

	requestAnimationFrame(update);	

	context.globalAlpha -= 1 / (60 * 3.5);
}

// 触摸事件监听
wx.onTouchStart((res) => {
	// console.log(res.touches);
	// console.log(res.touches.length)

	getResult(res.touches[0].clientX, res.touches[0].clientY);
});

// 根据触摸位置，判定成绩结果
function getResult(x, y) {
	console.log(x, y);
	console.log(face.x, face.y);
	
	if ((x >= face.x - 50 && x <= face.y + 50) && (y >= face.y - 50 && y <= face.y + 50)) {
		console.log(1);
		context.fillStyle = 'yellow';
		context.globalAlpha = 1;
	}
}