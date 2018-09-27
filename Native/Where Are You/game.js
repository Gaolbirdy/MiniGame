import './js/libs/weapp-adapter';
import Face from './js/face';

const FACEIMGSRC = 'images/test.png';
const FACEIMGSIZE = 1;
const ALPHASTEP = 0.003;
const STYLE = 'white';
const TOUCHAREA = 100;
const TOUCHNUMS = 3;

let context = canvas.getContext('2d');
let image = wx.createImage();
let face = new Face();
let lives = TOUCHNUMS;
let reWidth = 1, reHeight = 1;

begin();

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
	reWidth = image.width * FACEIMGSIZE;
	reHeight = image.height * FACEIMGSIZE;
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
	// face.move();
}

function render() {
	// fadeOut();
	
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.drawImage(image, face.x, face.y, reWidth, reWidth);
	
	context.fillStyle = STYLE;
	context.fillRect(0, 0, 100, 100);


	// context.globalAlpha -= ALPHASTEP;	
	// context.beginPath();
	// context.drawImage(image, face.x, face.y, image.width * FACEIMGSIZE, image.height * FACEIMGSIZE);
	// context.closePath();
	// context.save();

	// context.beginPath();
	// context.globalAlpha = 1;
	// context.fillStyle = STYLE;
	// context.fillRect(0, 0, 100, 100);
	// context.closePath();
	// context.save();
}

function fadeOut() {
	context.globalAlpha -= ALPHASTEP;
}

function touch() {
	wx.onTouchStart((res) => {
		getResult(res.touches[0].clientX, res.touches[0].clientY);
	});

	wx.onTouchEnd((res) => {
	});

	wx.onTouchMove((res) => {
	});
}

// 根据触摸位置，判定成绩结果
function getResult(x, y) {
	testTouchArea(x, y);

	if ((x >= face.x && x <= face.x + reWidth) && (y >= face.y && y <= face.y + reWidth)) {
		console.log('摸到了');		
	}
}

function testTouchArea(x, y) {
	if ((x >= 0 && x <= TOUCHAREA) && (y >= 0 && y <= TOUCHAREA)) {
		console.log('摸到了');
	}
}