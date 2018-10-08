import RedBall from './redball';
import BlueBall from './blueball';
import Arm from './arm';

export default class player {
    constructor() {
        this.arm = new Arm();
		this.redball = new RedBall();
		this.blueball = new BlueBall();
    }

    start() {

    }

    update() {

    }

    drawToCanvas(ctx) {
        this.arm.drawToCanvas(ctx);
		this.redball.drawToCanvas(ctx);
		this.blueball.drawToCanvas(ctx);
    }
} 