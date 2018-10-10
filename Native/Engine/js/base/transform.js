import Component from './component';
import Vector2 from './vector2';

export default class Transform extends Component {
	constructor() {
		super();

		this.position = new Vector2();
	}
}