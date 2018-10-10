import Renderer from './renderer';

export default class SpriteRenderer extends Renderer {
	constructor(imgSrc = '', width = 0, height = 0, x = 0, y = 0) {
		super();

		this.img = new wx.createImage();
		this.img.src = imgSrc;

		this.width = width;
		this.height = height;

		this.x = x;
		this.y = y;
	}

	drawToCanvas(ctx) {
		ctx.drawImage(
			this.img,
			this.x,
			this.y,
			this.width,
			this.height
		);
	}
}