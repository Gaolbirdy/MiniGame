import BackGround from './runtime/background';
import GameInfo from './runtime/gameinfo';
import Music from './runtime/music';

let ctx = canvas.getContext('2d');

/**
 * 游戏主函数
 */
export default class Main {
    constructor() {
        this.restart();
    }

    restart() {
        this.bg = new BackGround();
        this.gameInfo = new GameInfo();
        this.music = new Music();

        this.gameInfo.renderGameOver(ctx, 100);
    }
}

