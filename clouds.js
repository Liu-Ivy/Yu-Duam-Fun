'use strict';

function Clouds(canvas,y){
    this.speed = 3;
    this.size = 50;
    this.direction = +1;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 50;
    this.y = 50;
}

Clouds.prototype.draw = function(){
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}
