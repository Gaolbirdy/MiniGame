import Sound from './js/base/sound';
import { getRandomIntInclusive } from './js/libs/math';


const canvas = wx.createCanvas();
const context = canvas.getContext('2d');

const SOUND = new Sound();

// Gameplay常量
const MINTIME = 1;
const MAXTIME = 8;

const STARTTIME = new Date().getSeconds();

const LOGOIMGSRC = 'images/time.jpg';
const LOGOWIDTH = 50;
const LOGOHEIGHT = 50;
const ALPHASTEP = 0.002;

const STYLE = 'rgb(244, 208, 0)';
const DARKSTYLE = 'rgb(138, 151, 123)';
const BACKGROUNDSTYLE = 'rgb(20, 0, 28)';
const FONT = '25px Arial';
const SMALLFONT = '20px Arial';
const ALIGN = 'center';

const GAMETITLE = '时间捕手';
const TIP1 = ' 秒后  及时触摸屏幕';
const TIP2 = '抓住时间';
const GOODTEXT = '准';
const BADTEXT = '感觉离谱';
const BESTTEXT = '神准';
const NORMALTEXT = '感觉微妙';
const SLOWTEXT = "'慢性子'   ";
const FASTTEXT = "'急性子'   ";
const COMBOTEXT = '连准: ';
const SLOWVTEXT = '    慢性值: ';
const FASTVTEXT = '    急性值: ';
const RECORDTEXT = '最大连准: ';
const GOODCOUNTTEXT = '  准: ';
const BADCOUNTTEXT = '  离谱: ';
const BESTCOUNTTEXT = '   神准: ';
const NORMALCOUNTTEXT = '  微妙: ';
const SECOND = '秒';
let result = '感觉如何？';
let sumText = '秒 的时间洪流中，你捕获了 ';


// Gameplay参数
let timeGoal = 1;
let bestDeviation = 0.25;
let goodDeviation = bestDeviation * 2;
let normalDeviation = bestDeviation * 4;

// 逻辑与文本变量
let time = 0;
let lastTime = 0;
let combo = 0;
let comboRecord = combo;
let slowV = 0;
let fastV = 0;
let goodCount = 0;
let badCount = 0;
let bestCount = 0;
let normalCount = 0;

let currentTime = new Date().getSeconds();
let sumTime = 0;
let huntingTime = 0;

let image = new wx.createImage();


begin();


function begin() {
	init();
	
	restart();
}

function restart() {
    update();

    render();
}

function init() {
	image.onload = function () {
		render();
	};
	image.src = LOGOIMGSRC;

	context.globalAlpha = 0;

	SOUND.playBgm();	

	touch();			
}

function touch() {
	// 触摸事件监听
	wx.onTouchStart((res) => {
		getTime(res);

		getResult(time);

		restart();
		SOUND.playResult(timeGoal);
	});
}

function update() {
    // 随机时间目标
    timeGoal = getRandomIntInclusive(MINTIME, MAXTIME);
    SOUND.playStart(timeGoal);

    currentTime = new Date().getSeconds();
    sumTime = currentTime - STARTTIME;
}

function render() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	// 初始化淡入
	fadeIn();

	// 背景底色
	renderBackground();

	// UI绘制
    renderUI();  

	requestAnimationFrame(render);
}

function fadeIn() {
	if (context.globalAlpha < 1) {
		context.globalAlpha += ALPHASTEP;

		if (context.globalAlpha > 0.99) {
			context.globalAlpha = 1;
		}
	}
}

function renderBackground() {
	context.fillStyle = BACKGROUNDSTYLE;
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function renderUI() {
	context.fillStyle = STYLE;
	context.font = FONT;
	context.textAlign = ALIGN;
	context.fillText(GAMETITLE, canvas.width / 2, canvas.height / 6.5);
	context.fillText(timeGoal + TIP1, canvas.width / 2, canvas.height / 4);
	context.fillText(TIP2, canvas.width / 2, canvas.height / 4 * 1.3);
	context.fillText(result, canvas.width / 2, canvas.height / 10 * 5);
	combo > 1 ? context.fillText(COMBOTEXT + combo, canvas.width / 2, canvas.height / 10 * 6) : null;
	context.fillText(RECORDTEXT + comboRecord, canvas.width / 2, canvas.height / 10 * 7);

	context.font = SMALLFONT;
	context.fillStyle = DARKSTYLE;

	context.fillText(sumTime + sumText + huntingTime + SECOND, canvas.width / 2, canvas.height / 10 * 8);
	context.fillText(FASTVTEXT + fastV + SLOWVTEXT + slowV, canvas.width / 2, canvas.height / 10 * 8.75);
	context.fillText(
		BADCOUNTTEXT + badCount + NORMALCOUNTTEXT + normalCount + GOODCOUNTTEXT + goodCount + BESTCOUNTTEXT + bestCount,
		canvas.width / 2, canvas.height / 10 * 9.5);

	context.drawImage(image, canvas.width / 2 - LOGOWIDTH / 2, canvas.height / 35, LOGOWIDTH, LOGOHEIGHT);  
}

// 得到触摸的用时
function getTime(res) {
	time = (res.timeStamp || res.timestamp) - lastTime;
	lastTime = res.timeStamp || res.timestamp;
}

// 根据触摸时间，判定成绩结果
function getResult(time) {
	time = time / 1000;

	if (time <= timeGoal + bestDeviation && time >= timeGoal - bestDeviation) {
		result = BESTTEXT;
		combo++;
		bestCount++;
		huntingTime += timeGoal;
	} else if (time <= timeGoal + goodDeviation && time >= timeGoal - goodDeviation) {
		result = GOODText;
		combo++;
		goodCount++;
		huntingTime += timeGoal;
	} else if (time <= timeGoal + normalDeviation && time >= timeGoal - normalDeviation) {
		result = NORMALTEXT;
		combo = 0;
		normalCount++;
	} else {
		result = BADTEXT;
		combo = 0;
		badCount++;
	}

	(combo > 1 && combo > comboRecord) ? comboRecord = combo : null;

	if (time > timeGoal) {
		result = SLOWTEXT + result;
		slowV++;
	} else {
		result = FASTTEXT + result;
		fastV++;
	}
}