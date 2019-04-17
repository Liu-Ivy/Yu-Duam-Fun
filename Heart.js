'use strict';

function Heart(canvas, x){
    this.size = 35;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = 540;
    this.img = new Image();
    this.img.src = 'images/heart.png';

}

Heart.prototype.draw = function(){
    this.ctx.drawImage(this.img, this.x, this.y, this.size,this.size);
}