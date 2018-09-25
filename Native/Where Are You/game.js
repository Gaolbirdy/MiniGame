import './js/libs/weapp-adapter';
import Face from './js/face';

let context = canvas.getContext('2d');

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

	requestAnimationFrame(render);
}

function update() {
	face.move();

	requestAnimationFrame(update);	
}