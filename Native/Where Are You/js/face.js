import { getRandomIntInclusive } from './libs/math';

export default class Face {
	constructor() {
		this.x = canvas.width / 2;
		this.y = canvas.height / 2;
		this.speedDelta = 1;
		this.speedX = getRandomIntInclusive(1, 1) + this.speedDelta;
		this.speedY = getRandomIntInclusive(1, 1) + this.speedDelta;
		this.reWidth = 1;
		this.reHeight = 1;
		// this.reX = this.x - this.reWidth / 2;
		// this.reY = this.y - this.reHeight / 2;
	}

	move() {
		this.x -= this.speedX;
		this.y -= this.speedY;

		if (this.x <= 0 + this.reWidth / 2) {
			this.speedX = -this.speedX;
		}

		if (this.x >= canvas.width - this.reWidth / 2) {
			this.speedX = -this.speedX;
		}

		if (this.y <= 0 + this.reHeight / 2) {
			this.speedY = -this.speedY;
		}

		if (this.y >= canvas.height - this.reHeight / 2) {
			this.speedY = -this.speedY;
		}
	}
}