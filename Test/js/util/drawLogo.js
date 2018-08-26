module.exports =  function(canvas, x, y)
{
    console.log("module内执行");    

    // var image = new Image();
    var image = wx.createImage();
    image.onload = function()
    {
        var context = canvas.getContext('2d');
        context.drawImage(image, x, y);
    };
    image.src = 'images/icon.png';
    // image.src = '../..image/icon.png';

};

console.log("module外执行");    