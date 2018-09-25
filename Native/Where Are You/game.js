let canvas = wx.createCanvas();
let context = canvas.getContext('2d');

let image = wx.createImage();
let face = {
	x: canvas.width / 2,
	y: canvas.height / 2,
	speedX: getRandomIntInclusive(2, 4),
	speedY: getRandomIntInclusive(2, 4),
	
	move: function () {
		console.log(this.x);

		this.x -= this.speedX;
		this.y -= this.speedY;

		if (this.x <= 0) {
			this.speedX = -this.speedX;
		}

		if (this.x >= canvas.width) {
			this.speedX = -this.speedX;
		}

		if (this.y <= 0) {
			this.speedY = -this.speedY;
		}

		if (this.y >= canvas.height) {
			this.speedY = -this.speedY;
		}
	}
}

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

	requestAnimationFrame(render);
}

function update() {
	face.move();

	requestAnimationFrame(update);
	
}

// 得到一个两数之间的随机整数，包括两个数在内
function getRandomIntInclusive(min = 0, max = 1) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}