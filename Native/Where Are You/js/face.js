import { getRandomIntInclusive } from './libs/math';

export default class Face {
	constructor() {
		this.x = canvas.width / 2;
		this.y = canvas.height / 2;
		this.speedX = getRandomIntInclusive(2, 4);
		this.speedY = getRandomIntInclusive(2, 4);
	}

	move() {
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