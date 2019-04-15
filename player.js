'use strict';
function Player(canvas){
    this.lives =3;
    this.size = 50;
    this.canvas = canvas;
    this.x = this.canvas.width/2;
    this.y = 550;
    this.ctx = this.canvas.getContext('2d');
    this.speed = 3;
    this.direction = 0;
    this.isJumping = null;
}

Player.prototype.draw = function() {
    this.ctx.fillStyle = 'purple';
   
    this.ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size,this.size);
   
}
Player.prototype.update = function(){
    if(this.y < 45) {
        this.isJumping=false;
        this.setDirection(1)
        this.y++
    }
    if (this.y > 550 && !this.isJumping){
        this.setDirection(0)
    }
    if(this.isJumping){
        this.y++
     this.y = this.y + this.direction * this.speed;
    }

    this.y = this.y + this.direction * this.speed;

}

Player.prototype.setDirection = function(direction){
    this.direction = direction; 
}

Player.prototype.jump = function(){
    console.log(this)
    this.isJumping = true;
}





