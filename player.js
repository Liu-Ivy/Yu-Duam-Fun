'use strict';
function Player(canvas){
    this.lives = 5;
    this.size = 150;
    this.canvas = canvas;
    this.x = this.canvas.width/2;
    this.y = 450;
    this.ctx = this.canvas.getContext('2d');
    this.speed = 3;
    this.direction = 0;
    this.isJumping = null;
    this.isTouchingCloud = false;
}

Player.prototype.draw = function() {
    let imgPlayer = new Image();
    imgPlayer.src = "images/kung_fu_panda.png"; 
    this.ctx.drawImage(imgPlayer, this.x - this.size/2, this.y - this.size/2, this.size,this.size);
   
}

// Player.prototype.drawHeart = function(){
//     let imgHeart = new Image();
//     imgHeart.src = "images/heart.png";
//     this.ctx.drawImage(imgHeart, 50, 400, 25, 25);

//     if (this.lives >= 5){
//         this.lives1 = this.ctx.drawImage(imgHeart,10 ,10, 25, 25);
//         this.lives2 = this.ctx.drawImage(imgHeart,40 ,10, 25, 25);
//         this.lives3 = this.ctx.drawImage(imgHeart,40 ,10, 25, 25);
//         this.lives4 = this.ctx.drawImage(imgHeart,40 ,10, 25, 25);
//         this.lives5 = this.ctx.drawImage(imgHeart,40 ,10, 25, 25);
//     }
//     if (this.lives >=4) {}
//}


Player.prototype.update = function(){
    if(this.y < 85) {
        this.isJumping=false;
        this.setDirection(1)
        this.y++
        this.isTouchingCloud = false;
    }
    if (this.y > 500 && !this.isJumping){
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
    this.isJumping = true;
    this.isTouchingCloud = false;
}

Player.prototype.setLives = function(){
    this.lives -=1;
}

Player.prototype.checkCollisionWithCloud = function(cloud){
    const collisionRight = this.x + this.size/2 > cloud.x - cloud.size /2;
    const collisionLeft = this.x + this.size/2 < cloud.x + cloud.size/2;
    const collisionTop = this.y - this.size/2 < cloud.y + cloud.size/2;
    const collisionBottom = this.y + this.size/2 > cloud.y - cloud.size/2;
    //this.size/2 and cloud.size/2 ----from the middle   this.-----the player

    return collisionRight && collisionLeft && collisionTop && collisionBottom;
}





