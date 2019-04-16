'use strict';

function Cloud(canvas,imgLink, type){
    this.speed = 3;
    this.size = 100;
    this.direction = 1;
    this.canvas = canvas;
    this.img = new Image();
    this.img.src = imgLink;
    this.ctx = this.canvas.getContext('2d');
    this.x = 0;
    this.y = 70;
    this.type = type;
}

Cloud.prototype.draw = function(){
    this.ctx.drawImage(this.img,this.x, this.y, this.size, this.size);

    //this.ctx.fillStyle = 'lightblue';
    //this.ctx.fillRect(this.x, this.y, this.size, this.size);
}


Cloud.prototype.update = function(){
    this.x = this.x + this.direction * this.speed;
}