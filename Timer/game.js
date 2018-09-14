const canvas = wx.createCanvas();
const context = canvas.getContext('2d');

context.fillStyle = 'yellow';
context.font = '30px Arial';
context.fillText('hello', 50, 50);