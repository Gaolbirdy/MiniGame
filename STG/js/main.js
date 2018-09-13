import BackGround from './runtime/background';
import GameInfo from './runtime/gameinfo';
import Music from './runtime/music';
import DataBus from './databus';

let ctx = canvas.getContext('2d');
let databus = new DataBus();

/**
 * 游戏主函数
 */
export default class Main {
    constructor() {
        this.restart();
    }

    restart() {
        databus.reset();

        this.bg = new BackGround(ctx);
        this.gameInfo = new GameInfo();
        this.music = new Music();

        this.gameInfo.renderGameOver(ctx, 100);
    }
}

