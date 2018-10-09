import Sprite from '../base/sprite';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// 玩家相关常量设置
const REDBALL_IMG_SRC = 'images/redball.png';
const REDBALL_WIDTH = 30;
const REDBALL_HEIGHT = 30;

export default class RedBall extends Sprite {
	constructor() {
		super(REDBALL_IMG_SRC, REDBALL_WIDTH, REDBALL_HEIGHT);

		// 玩家默认处于屏幕底部居中位置
		this.x = screenWidth / 4 - this.width / 2;
		this.y = screenHeight - this.height - 30;

		this.parent = null;
	}

	start() {

	}

	update() {
		
		this.y = this.parent.y;
	}
}