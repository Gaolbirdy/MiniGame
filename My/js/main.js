let canvas = wx.createCanvas();
let ctx = canvas.getContext('2d');

export default class Main {
    constructor() {
        this.restart();
        this.lasttime = 0;
        this.result = '';

    }

    restart() {
        this.loop();
        this.update();

        wx.onTouchStart((res) => {
            console.log(res);
            
            console.log('触摸时间 ' + res.timestamp);
            console.log('上次时间 ' + this.lasttime);
            console.log((res.timestamp - this.lasttime) / 1000 );
            if ((res.timestamp - this.lasttime) / 1000 < this.x + 0.25
                && (res.timestamp - this.lasttime) / 1000 > this.x - 0.25) {
                console.log('');
                this.result = '准了';
            }
            else
                this.result = '感觉不对';
            
            this.lasttime = res.timestamp;

            this.update();
        }
        );
    }

    update() {
        this.x = Math.floor(Math.random() * 5) + 1;
    }

    render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'red';
        ctx.font = '30px Arial';
        ctx.fillText(this.x + ' 秒后触摸屏幕', 80, 150);
        ctx.fillText(this.result, 150, 300);
        ctx.fillText('时间感觉者', 80, 50);
    }

    loop() {
        // this.update();
        this.render();
        requestAnimationFrame(this.loop.bind(this));
    }
}