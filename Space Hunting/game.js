const canvas = wx.createCanvas();
const context = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

function render()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'red';
    context.fillRect(WIDTH / (Math.random() * 4), HEIGHT / (Math.random() * 8), 50, 50);
    
	requestAnimationFrame(render);
}

render();

wx.setPreferredFramesPerSecond(1);
wx.onTouchStart((res) => {
    if (res) {
        render();
    }

});