import Transform from './transform';
import SpriteRenderer from './spriterenderer';
import MonoBehaviour from './monobehaviour';

export default class GameObject {
	constructor(name = 'gameObject') {
		this.name = name;

		this.addDefaultComponent();
	}

	addDefaultComponent() {	
		this.addComponent(Transform);
		this.addComponent(SpriteRenderer);
		this.addComponent(MonoBehaviour);
	}

	addComponent(componentClass) { 
		let componentName = componentClass.name.toLowerCase();
		this[componentName] = new componentClass();
	}

	show() {
		console.log(this);
	}
}