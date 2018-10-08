import Sprite from '../base/sprite';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// 玩家相关常量设置
const ARM_IMG_SRC = 'images/arm.png';
const ARM_WIDTH = 160;
const ARM_HEIGHT = 20;

export default class Arm extends Sprite {
	constructor() {
		super(ARM_IMG_SRC, ARM_WIDTH, ARM_HEIGHT);

		// 玩家默认处于屏幕底部居中位置
		this.x = screenWidth / 2 - this.width / 2;
		this.y = screenHeight - this.height - 30;
	}

	start() {

	}

	update() {

	}

}