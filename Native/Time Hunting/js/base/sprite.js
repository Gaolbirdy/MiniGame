/**
 * 游戏基础的精灵类
 */
export default class Sprite {
    constructor(imgSrc = '', width = 0, height = 0, x = 0, y = 0) {
        this.img = new wx.createImage();
        this.img.src = imgSrc;

        this.width = width;
        this.height = height;

        this.x = x;
        this.y = y;
    }
    
    /**
     * 将精灵图绘制在canvas上
     */
    drawToCanvas(ctx) {
        ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}
