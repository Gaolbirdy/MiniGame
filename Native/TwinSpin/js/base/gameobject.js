import Sprite from "../../Sample/js/base/sprite";

export default class GameObject extends Sprite {
    constructor(imgSrc = '', width = 0, height = 0, x = 0, y = 0) {
        super(imgSrc, width, height);
    }
}