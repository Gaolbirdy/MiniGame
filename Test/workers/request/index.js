var utils = require('./utils');

// 在 Worker 线程执行上下文会全局暴露一个 `worker` 对象，直接调用 worker.onMeesage/postMessage 即可
worker.onMessage(function (res) // 在电脑上不会触发调用；在iphone上正常
{
    console.log(res);
    console.log(res.msg);
});

worker.postMessage({
    msg: 'hello from worker 线程'
});