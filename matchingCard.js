'use strict';

function matchingCard(canvas, type){
    this.speed = 3;
    this.size = 180;
    this.canvas = canvas;
    this.img = new Image();
    this.ctx = this.canvas.getContext('2d');
    this.x = 80;
    this.y = 450;
    this.imgName = type
    this.type = type.split('2')[0];
}

matchingCard.prototype.draw = function(){
    this.img.src = `./images/${this.imgName}.png`;
    this.ctx.drawImage(this.img, this.x, this.y, this.size,this.size);


}


