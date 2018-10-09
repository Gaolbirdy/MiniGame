import DataBus from './databus';
import Sound from './runtime/sound';
import BackGround from './runtime/background';
import GameInfo from './runtime/gameinfo';
import { getRandomIntInclusive } from './libs/math';


const FRAMES_PER_SECOND = 60;
const SECOND = 1000;

const canvas = wx.createCanvas();
const ctx = canvas.getContext('2d');
let databus = new DataBus();


const ALPHASTEP = 0.002;


// Gameplay常量
const MINTIME = 1;
const MAXTIME = 8;

const STARTTIME = new Date().getSeconds();

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
const SECONDTEXT = '秒';
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


export default class Main {
	constructor() {
		this.intervalID = 0;

		this.init();

		this.update();
	}

	init() {
		this.bg = new BackGround();
		this.gameInfo = new GameInfo();
		this.sound = new Sound();
		this.onTouch();

		this.bindLoop = this.loop.bind(this);

		clearInterval(this.intervalID);
		this.intervalID = setInterval(this.bindLoop, SECOND / FRAMES_PER_SECOND);

		ctx.globalAlpha = 0;
	}

	loop() {
		// databus.frame++;

		// this.update();
		this.render();
	}

	onTouch() {
		// 触摸事件监听
		wx.onTouchStart((res) => {
			this.getTime(res);
	
			this.getResult(time);
	
			this.update();
			this.sound.playResult(timeGoal);
		});
	}

	update() {
		// 随机时间目标
		timeGoal = getRandomIntInclusive(MINTIME, MAXTIME);
		this.sound.playStart(timeGoal);

		currentTime = new Date().getSeconds();
		sumTime = currentTime - STARTTIME;
	}

	render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// 初始化淡入
		this.fadeIn();
		
		// 背景底色
		this.renderBackground();

		// UI绘制
		this.renderUI();

		// LOGO
		this.bg.drawToCanvas(ctx);
	}

	fadeIn() {
		if (ctx.globalAlpha < 1) {
			ctx.globalAlpha += ALPHASTEP;
	
			if (ctx.globalAlpha > 0.99) {
				ctx.globalAlpha = 1;
			}
		}
	}

	renderBackground() {
		ctx.fillStyle = BACKGROUNDSTYLE;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	renderUI() {
		ctx.fillStyle = STYLE;
		ctx.font = FONT;
		ctx.textAlign = ALIGN;
		ctx.fillText(GAMETITLE, canvas.width / 2, canvas.height / 6.5);
		ctx.fillText(timeGoal + TIP1, canvas.width / 2, canvas.height / 4);
		ctx.fillText(TIP2, canvas.width / 2, canvas.height / 4 * 1.3);
		ctx.fillText(result, canvas.width / 2, canvas.height / 10 * 5);
		combo > 1 ? ctx.fillText(COMBOTEXT + combo, canvas.width / 2, canvas.height / 10 * 6) : null;
		ctx.fillText(RECORDTEXT + comboRecord, canvas.width / 2, canvas.height / 10 * 7);
	
		ctx.font = SMALLFONT;
		ctx.fillStyle = DARKSTYLE;
	
		ctx.fillText(sumTime + sumText + huntingTime + SECONDTEXT, canvas.width / 2, canvas.height / 10 * 8);
		ctx.fillText(FASTVTEXT + fastV + SLOWVTEXT + slowV, canvas.width / 2, canvas.height / 10 * 8.75);
		ctx.fillText(
			BADCOUNTTEXT + badCount + NORMALCOUNTTEXT + normalCount + GOODCOUNTTEXT + goodCount + BESTCOUNTTEXT + bestCount,
			canvas.width / 2, canvas.height / 10 * 9.5);
	
	}

	// 得到触摸的用时
	getTime(res) {
		time = (res.timeStamp || res.timestamp) - lastTime;
		lastTime = res.timeStamp || res.timestamp;
	}

	// 根据触摸时间，判定成绩结果
	getResult(time) {
		time = time / 1000;

		if (time <= timeGoal + bestDeviation && time >= timeGoal - bestDeviation) {
			result = BESTTEXT;
			combo++;
			bestCount++;
			huntingTime += timeGoal;
		} else if (time <= timeGoal + goodDeviation && time >= timeGoal - goodDeviation) {
			result = GOODTEXT;
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
}