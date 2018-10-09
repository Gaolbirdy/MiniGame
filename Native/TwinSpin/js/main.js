import DataBus from './databus';
import Arm from './player/arm';


const FRAMES_PER_SECOND = 30;
const SECOND = 1000;

const canvas = wx.createCanvas();
const ctx = canvas.getContext('2d');
let databus = new DataBus();


export default class Main {
	constructor() {
		this.intervalID = 0;

		this.init();
	}

	init() {
		this.arm = new Arm();

		this.bindLoop = this.loop.bind(this);

		clearInterval(this.intervalID);
		this.intervalID = setInterval(this.bindLoop, SECOND / FRAMES_PER_SECOND);
	}

	loop() {
		databus.frame++;
		// console.log(databus.frame); 

		this.update();
		this.render();
	}

	update() {
		this.arm.update();

	}

	render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		this.arm.drawToCanvas(ctx);
		this.arm.blueBall.drawToCanvas(ctx);
		this.arm.redbBll.drawToCanvas(ctx);
	}
}