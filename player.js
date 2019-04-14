'use strict';
function Player(canvas){
    this.lives =3;
    this.size = 50;
    this.canvas = canvas;
    this.x = this.canvas.width/2;
    this.y = 20;
    this.ctx = this.canvas.getContext('2d');
    this.speed = 3;
    this.direction = 0;
}

Player.prototype.draw = function() {
    this.ctx.fillStyle = 'purple';
   
    this.ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size,this.size);
   
}
console.log(Player.prototype.draw);
