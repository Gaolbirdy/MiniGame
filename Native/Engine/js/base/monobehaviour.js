import Behaviour from './behaviour';

export default class MonoBehaviour extends Behaviour {
	constructor() {
		super();

		this.start();
	}

	start() {
		console.log('MonoBehaviour start');		
	}

	update() {
		console.log('MonoBehaviour update');
	}
}