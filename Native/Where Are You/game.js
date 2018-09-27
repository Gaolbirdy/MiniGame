import './js/libs/weapp-adapter';
import Face from './js/face';

const DEBUGMODE = false;
const FACEIMGSRC = 'images/test.png';
const FACEIMGSIZE = 1;
const ALPHASTEP = 0.003;
const TOUCHAREA = 0;
const TOUCHNUMS = 3;

let STYLE = 'white';
let context = canvas.getContext('2d');
let image = wx.createImage();
let face = new Face();
let lives = TOUCHNUMS;
let tempAlpha = 1;

function debugArea() {
	console.log('DEBUGMODE');
};


if (!DEBUGMODE) {
	begin();
} else {
	debugArea();
}


function begin() {
	init();

	restart();
}

function init() {
	image.onload = function () {
		resize();
		render();
	};
	image.src = FACEIMGSRC;

	touch();
}

function resize() {
	face.reWidth = image.width * FACEIMGSIZE;
	face.reHeight = image.height * FACEIMGSIZE;
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
	
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.beginPath();
	fadeOut();
	context.drawImage(image, face.x - face.reWidth / 2, face.y - face.reHeight / 2, face.reWidth, face.reHeight);
	// context.closePath();
	// context.save();

	context.beginPath();
	context.globalAlpha = 1;
	context.fillStyle = STYLE;
	context.fillRect(0, 0, 100, 100);
	// context.closePath();
	// context.save();
}

function fadeOut() {
	console.log(tempAlpha)
	context.globalAlpha = tempAlpha - 0.01;
	tempAlpha = context.globalAlpha;
}

function touch() {
	wx.onTouchStart((res) => {
		getResult(res.touches[0].clientX, res.touches[0].clientY);
	});

	// wx.onTouchEnd((res) => {
	// });

	// wx.onTouchMove((res) => {
	// });
}

// 根据触摸位置，判定成绩结果
function getResult(x, y) {
	if (x >= face.x - face.reWidth / 2 - TOUCHAREA && x <= face.x - face.reWidth / 2 + face.reWidth + TOUCHAREA
		&& y >= face.y - face.reHeight / 2 - TOUCHAREA && y <= face.y - face.reHeight / 2 + face.reHeight + TOUCHAREA) {

		STYLE = (STYLE === 'white' ? 'red' : 'white');
		context.globalAlpha = 1;
	}
}