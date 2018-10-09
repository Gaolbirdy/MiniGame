import Main from './js/main.js';
import Debug from './js/debug.js';

// debug开关
const DEBUGMODE = false;

if (!DEBUGMODE) {
	new Main();
} else {
	new Debug();
}