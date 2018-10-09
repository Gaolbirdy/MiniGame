import Sprite from '../base/sprite';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// 玩家相关常量设置
const BLUEBALL_IMG_SRC = 'images/blueball.png';
const BLUEBALL_WIDTH = 30;
const BLUEBALL_HEIGHT = 30;

export default class BlueBall extends Sprite {
	constructor() {
		super(BLUEBALL_IMG_SRC, BLUEBALL_WIDTH, BLUEBALL_HEIGHT);

		// 玩家默认处于屏幕底部居中位置
		this.x = screenWidth / 2 - this.width / 2;
		this.y = screenHeight - this.height - 30;

		this.parent = null;
	}

	start() {

	}

	update() {

		this.y = this.parent.y;
	}
}