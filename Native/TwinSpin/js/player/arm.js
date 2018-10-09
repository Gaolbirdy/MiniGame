import BlueBall from './blueball';
import RedBall from './redball';
import GameObject from '../base/gameobject';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// 玩家相关常量设置
const ARM_IMG_SRC = 'images/arm.png';
const ARM_WIDTH = 160;
const ARM_HEIGHT = 20;

export default class Arm extends GameObject {
	constructor() {
		super(ARM_IMG_SRC, ARM_WIDTH, ARM_HEIGHT);

		// 玩家默认处于屏幕底部居中位置
		this.x = screenWidth / 2 - this.width / 2;
		this.y = screenHeight - this.height - 30;

		this.blueBall = new BlueBall();
		this.redbBll = new RedBall();

		this.blueBall.parent = this;
		this.redbBll.parent = this;
	}

	start() {

	}

	update() {
		this.y--;
		this.blueBall.update();
		this.redbBll.update();
	}

}