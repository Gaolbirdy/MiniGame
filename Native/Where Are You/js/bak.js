// 按压操作，扩大一个框出来
let startTime;
let endTime;
let currentTime;
let deltaTime = 0;
let tapped = false;
let x, y;
let size;

wx.onTouchStart((res) => {
	// startTime = res.timeStamp || res.timestamp;
	startTime = new Date().getTime();
	tapped = true;
	x = res.touches[0].clientX;
	y = res.touches[0].clientY;
});

wx.onTouchEnd((res) => {
	// endTime = res.timeStamp || res.timestamp;
	// deltaTime = endTime - startTime;
	// console.log(deltaTime);
	tapped = false;
});

wx.onTouchMove(() => {
	tapped = false;
	console.log(1)
});

(function render() {
	if (tapped) {
		currentTime = new Date().getTime();
		deltaTime = currentTime - startTime;
	}

	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = STYLE;
	size = deltaTime / 5;
	context.fillRect(x - size / 2, y - size / 2, size, size);

	requestAnimationFrame(render);
})();