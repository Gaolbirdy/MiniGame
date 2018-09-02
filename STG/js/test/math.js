// var add = (a, b) => a + b;
// var x = 100, y = 200;

// exports.add = add;
// exports.x = x;
// // module.exports.add = add;

// console.log(module);
// // console.log(exports);
// // console.log(module.exports);
// // console.log(module.exports === exports);


// var x = 5;
// var addX = function (value) {
// 	return value + x;
// };
// module.exports.x = x;
// module.exports.addX = addX;


// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;

// export {firstName, lastName, year};

// export var m = 1;

// var m = 1;
// export {m};

// var n = 1;
// export {n as m};

// export default function() {
// 	console.log('foo');
// }

// var a = {name: 1};
// var b = a;

// console.log(a);
// console.log(b);

// b.name = 2;
// console.log(a);
// console.log(b);

// b = {name: 3};
// console.log(a);
// console.log(b);

// b = a;
// console.log(a);
// console.log(b);

// a.name = 4;
// console.log(a);
// console.log(b);

// a = {name: 5};
// console.log(a);
// console.log(b);


// const D = 123;
// // export default D;
// export {D as default};


// export function cube(x){
// 	return x * x * x;
// }
// const foo = Math.PI + Math.SQRT2;
// export {foo};

// export default function(x){
// 	return x * x;
// }

// function getName(name){
//     console.log(name);
// }

// export function getInfo(info){
//     getName(info);
// }

// export default function(){
//     console.log('hello');
// }

// function a(){
//     console.log('hello');
// };
// export {a as default};


// var a = function() {
//     console.log('hello')
// };
// export {a as fun};


// exports.x = 1;
// console.log(exports);
// console.log(module.exports);
// console.log(exports === module.exports);
// console.log(exports == module.exports);
// console.log(module);

// exports = new Object();
// console.log(exports);
// console.log(module.exports);
// console.log(exports === module.exports);
// console.log(exports == module.exports);
// console.log(module);


// function f1(){
//     console.log('hello, f1');
// }

// function f2() {
//     console.log('hello, f2');
// }

// function f3() {
//     console.log('hello, f3');
// }

// export { f1, f2};
// export * from 'math';

// console.log('hello');

// const foo = Math.sqrt(2);
// export default foo ;


// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1998;

// var firstName = 'Micheal';
// var lastName = 'Jackson';
// var year = 1958;
// export { firstName, lastName, year };

// export function multiply(x, y){
//     return x * y;
// }

// function Module1(){
//     console.log('m1');
// }
// function Module2() {
//     console.log('m2');
// }
// export { Module1 as Func1, Module2 as Func2};

// export var str = 'hello';
// setTimeout(() => str = 'world', 1000);
// console.log(str);

// function foo(){
//     export default 'bar';
// }
// foo();

// export function circleArea(r){
//     return Math.PI * r * r;
// }

// export function rectArea(w, h){
//     return w * h;
// }

// export default function(){
//     console.log('foo');
// }

// export default function foo(){
//     console.log('hello world');
// }

// function foo(){
//     console.log('hello world');
// }

// export default foo;

// function add(x, y){
//     return x + y;
// }
// export { add as default};

// export var a = 1;

// var a = 1;
// export default a;

// export default var a = 1;

// export default class {};

// var foo = 'foo', bar = 'bar';
// export { foo, bar };

// export const A = 1;
// export const B = 2;


// var func1 = () => console.log('func1');
// var func2 = () => console.log('func2');

// exports.func1 = func1;
// exports.func2 = func2;


var counter = 3;
function incCounter(){
    counter++;
}
incCounter();   // 4
// module.exports = {
//     counter: counter,
//     incCounter: incCounter,
// };

module.exports = {
    get counter(){
        return counter;
    },
    incCounter: incCounter,
}
incCounter();   // 5