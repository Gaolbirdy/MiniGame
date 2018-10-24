import Sprite from '../base/sprite';

// const screenWidth = window.innerWidth;
// const screenHeight = window.innerHeight;

const BG_IMG_SRC = 'images/time.jpg'
const BG_WIDTH = 50;
const BG_HEIGHT = 50;

/**
 * 游戏背景类
 */
export default class BackGround extends Sprite {
	constructor(canvas) {
        super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT);
		
		this.x = canvas.width / 2 - BG_WIDTH / 2;
		this.y = canvas.height / 35;
    }
}