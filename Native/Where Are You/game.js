import './js/libs/weapp-adapter';
import Face from './js/face';

const DEBUGMODE = false;
const FACEIMGSRC = 'images/test.png';
const FACEIMGSIZE = 1;
const ALPHASTEP = 1 / (60 * 2);
const TOUCHAREA = 0;
const TOUCHNUMS = 40;
const TIME = 3;

const ALIGN = 'center';
const FONT = '25px Arial';
const LIVESTEXT = '触摸资源: ';
const TIMETEXT = '时间: ';

let STYLE = 'white';
let context = canvas.getContext('2d');
let image = wx.createImage();
let face = new Face();
let lives = TOUCHNUMS;
let time = TIME;
let tempAlpha = 1;
let canTouch = false;
let clockInterval;


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

function clock() {
	time--;
}

function resetClock() {
	time = TIME;
	clearInterval(clockInterval);
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

	if (lives <= 0 || time <= 0) {
		reset();
	}
}

function render() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.beginPath();
	fadeOut();	
	context.drawImage(image, face.x - face.reWidth / 2, face.y - face.reHeight / 2, face.reWidth, face.reHeight);

	context.beginPath();
	renderUI();
}

function fadeOut() {
	context.globalAlpha = (tempAlpha - ALPHASTEP) < 0 ? 0 : (tempAlpha - ALPHASTEP);
	tempAlpha = context.globalAlpha;


	if (canTouch === true)  {
		return;
	}

	if (context.globalAlpha === 0) {
		canTouch = true;
		clockInterval = setInterval(clock, 1000);	
	}
}

function renderUI() {
	context.globalAlpha = 1;
	context.fillStyle = STYLE;
	// context.fillRect(0, 0, 100, 100);

	if (canTouch) {
		context.textAlign = ALIGN;
		context.font = FONT;
		context.fillText(LIVESTEXT + lives, canvas.width / 2, canvas.height / 10);
		context.fillText(TIMETEXT + time, canvas.width / 2, canvas.height / 6);		
	}
}

function touch() {
	wx.onTouchStart((res) => {
		if (!canTouch) {
			return;
		}
		for (let i = 0; i < res.touches.length; i++) {
			getResult(res.touches[i].clientX, res.touches[i].clientY);					
		}
	});

	// wx.onTouchEnd((res) => {
	// });

	wx.onTouchMove((res) => {
		if (!canTouch) {
			return;
		}

		for (let i = 0; i < res.changedTouches.length; i++) {
			getResult(res.changedTouches[i].clientX, res.changedTouches[i].clientY);
		}
	});
}

// 根据触摸位置，判定成绩结果
function getResult(x, y) {
	if (x >= face.x - face.reWidth / 2 - TOUCHAREA && x <= face.x - face.reWidth / 2 + face.reWidth + TOUCHAREA
		&& y >= face.y - face.reHeight / 2 - TOUCHAREA && y <= face.y - face.reHeight / 2 + face.reHeight + TOUCHAREA) {

		STYLE = (STYLE === 'white' ? 'red' : 'white');

		reset();
		return;
	}

	// 方便实在猜不到精灵位置了，重新显示
	// if(x >= 0 && x <= 50 && y >=0 && y <= 50) {
	// 	visible();
	// 	return;	
	// }

	lives--;
}

function visible() {
	tempAlpha = 1;
}

function reset() {
	visible();
	lives = TOUCHNUMS;
	resetClock();
	canTouch =  false;
}