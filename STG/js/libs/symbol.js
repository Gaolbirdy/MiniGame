/**
 * 对于ES6中Symbol的极简兼容
 * 方便模拟私有变量
 */

let Symbol = window.Symbol;
let idCounter = 0;

if(Symbol) {
    consolelog(1)
}