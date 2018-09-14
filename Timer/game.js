const canvas = wx.createCanvas();
const context = canvas.getContext('2d');

let timeGoal = 1;
let bestDeviation = 0.25;
let goodDeviation = bestDeviation * 2;
let normalDeviation = bestDeviation * 4;
let time = 0;
let lastTime = 0;
let combo = 0;
let comboRecord = combo;
let slowV = 0;
let fastV = 0;

const MINTIME = 1;
const MAXTIME = 7;

let result = '感觉如何？';
const GAMETITLE = '时间猎手';
const TIP1 = ' 秒后  及时触摸屏幕';
const TIP2 = '抓住时间';
const STYLE = 'yellow';
const FONT = '25px Arial';
const ALIGN = 'center';
const goodText = '准';
const badText = '感觉离谱';
const bestText = '神准';
const normalText = '感觉微妙';
const slowText = "'慢性子'   ";
const fastText = "'急性子'   ";
const comboText = '连准: ';
const slowVText = '    慢性值:  ';
const fastVText = '    急性值:  ';
const recordText = '最大连准: ';

start();

function start() {
    update();
    render();
}

function update() {
    // 随机时间目标
    timeGoal = getRandomIntInclusive(MINTIME, MAXTIME);
}

// 得到一个两数之间的随机整数，包括两个数在内
function getRandomIntInclusive(min = 0, max = 1) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 触摸事件监听
wx.onTouchStart((res) => {
    getTime(res);

    getResult(time);

    start();
});

// 得到触摸的用时
function getTime(res) {
    time = res.timestamp - lastTime;

    lastTime = res.timestamp;
}

// 根据触摸时间，判定成绩结果
function getResult(time) {
    time = time / 1000;

    if (time <= timeGoal + bestDeviation && time >= timeGoal - bestDeviation) {
        result = bestText;
        combo++;
    } else if (time <= timeGoal + goodDeviation && time >= timeGoal - goodDeviation) {
        result = goodText;
        combo++;
    } else if (time <= timeGoal + normalDeviation && time >= timeGoal - normalDeviation) {
        result = normalText;
        combo = 0;
    } else {
        result = badText;
        combo = 0;
    }

    combo > 1 && combo > comboRecord ? comboRecord = combo : null;

    if (time > timeGoal) {
        result = slowText + result;
        slowV++;
    } else {
        result = fastText + result;  
        fastV++
    }
}

function render() {
    // UI绘制
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = STYLE;
    context.font = FONT;
    context.textAlign = ALIGN;
    context.fillText(GAMETITLE, canvas.width / 2, canvas.height / 8);
    context.fillText(timeGoal + TIP1, canvas.width / 2, canvas.height / 4);
    context.fillText(TIP2, canvas.width / 2, canvas.height / 4 * 1.3);
    context.fillText(result, canvas.width / 2, canvas.height / 10 * 5);
    combo > 1 ? context.fillText(comboText + combo, canvas.width / 2, canvas.height / 10 * 6) : null;
    context.fillText(fastVText + fastV + slowVText + slowV, canvas.width / 2, canvas.height / 10 * 8);
    context.fillText(recordText + comboRecord, canvas.width / 2, canvas.height / 10 * 9);
    
}