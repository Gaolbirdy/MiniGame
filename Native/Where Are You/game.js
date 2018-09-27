import './js/libs/weapp-adapter';
import Face from './js/face';

const FACEIMGSRC = 'images/face.png';
const FACEIMGSIZE = 2;
const ALPHASTEP = 0.003;
const STYLE = 'white';
const TOUCHNUMS = 3;

let context = canvas.getContext('2d');
let image = wx.createImage();
let face = new Face();
let lineX, lineY;
let lives = TOUCHNUMS;

begin();

function begin() {
	init();

	restart();
}

function init() {
	image.onload = function () {
		render();
	};
	image.src = FACEIMGSRC;

	touch();
}

function restart() {
	loop();
}

function loop() {
	update();

	render();

	requestAnimationFrame(loop);			
}

function update() {
	face.move();
}

function render() {
	// fadeOut();
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	context.globalAlpha -= ALPHASTEP;	
	context.beginPath();
	context.drawImage(image, face.x, face.y, image.width * FACEIMGSIZE, image.height * FACEIMGSIZE);
	context.closePath();
	context.save();

	context.globalAlpha = 1;
	context.beginPath();
	context.fillStyle = STYLE;
	context.fillRect(0, 0, 100, 100);
	context.closePath();
	context.save();
}

function fadeOut() {
	context.globalAlpha -= ALPHASTEP;
}

function touch() {
	wx.onTouchStart((res) => {
		lineX = res.touches[0].clientX;
		lineY = res.touches[0].clientY;
		getResult(res.touches[0].clientX, res.touches[0].clientY);
	});

	wx.onTouchEnd((res) => {
	});

	wx.onTouchMove((res) => {
	});
}

// 根据触摸位置，判定成绩结果
function getResult(x, y) {
	if ((x >= face.x - 50 && x <= face.y + 50) && (y >= face.y - 50 && y <= face.y + 50)) {
		console.log(1);
		// context.fillStyle = 'yellow';
		// context.globalAlpha = 1;
	}
}