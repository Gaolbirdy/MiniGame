import Player from './player/index';
import Enemy from './npc/enemy';
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
        // 维护当前requestAnimationFrame的id
        this.aniId = 0;

        this.restart();
    }

    restart() {
        // databus.reset();


    }
}