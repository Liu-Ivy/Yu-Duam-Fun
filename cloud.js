'use strict';

function Cloud(canvas){
    this.speed = 3;
    this.size = 50;
    this.direction = +1;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 50;
    this.y = 50;
}

Cloud.prototype.draw = function(){
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}


Cloud.prototype.update = function(){
    this.x = this.x + this.direction * this.speed;
}