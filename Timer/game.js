const canvas = wx.createCanvas();
const context = canvas.getContext('2d');

let timeGoal = 1;
let deviation = 0.25;
let time = 0;
let result = '感觉如何？';
let lastTime = 0;

const MINTIME = 1;
const MAXTIME = 7;

const GAMETITLE = '时间感觉者';
const TIP = ' 秒后  及时触摸屏幕';
const STYLE = 'yellow';
const FONT = '30px Arial';
const ALIGN = 'center';
const winText = '准';
const lostText = '感觉不对';

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
    time = res.timeStamp - lastTime;

    lastTime = res.timeStamp;
}

// 根据触摸时间，判定成绩结果
function getResult(time) {
    time = time / 1000;

    if (time <= timeGoal + deviation && time >= timeGoal - deviation) {
        result = winText;
    } else {
        result = lostText;
    }
}

function render() {
    // UI绘制
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = STYLE;
    context.font = FONT;
    context.textAlign = ALIGN;
    context.fillText(GAMETITLE, canvas.width / 2, canvas.height / 8);
    context.fillText(timeGoal + TIP, canvas.width / 2, canvas.height / 3);
    context.fillText(result, canvas.width / 2, canvas.height / 3 * 2);
}