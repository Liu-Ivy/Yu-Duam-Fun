'use strict';

function Heart(canvas, x){
    this.size = 45;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width - this.size * x - 70;
    this.y = this.canvas.height - 50;
    this.img = new Image();
    this.img.src = 'images/heart.png';

}

Heart.prototype.draw = function(){
    this.ctx.drawImage(this.img, this.x, this.y, this.size,this.size);
}