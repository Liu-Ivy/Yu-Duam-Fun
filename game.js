'use stric'

function Game(canvas) {
    this.player = null;
    this.clouds = [];
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.gameOver = false;
    
  };

  

 Game.prototype.startLoop = function(){
   
  console.log('start loop')
     this.player = new Player(this.canvas);
  
     this.interval = setInterval(()=>{this.makeClouds(this.clouds)}, 2000)
      const loop = () => {
      console.log('looping')
        if(Math.random() > 0.97){
					// this.clouds.push(new Cloud(this.canvas))
        }
        this.clearCanvas();
        this.updateCanvas();
				this.drawCanvas();
      
        if(!this.gameOver) {
          window.requestAnimationFrame(loop);
        }
    }
   window.requestAnimationFrame(loop);
}

Game.prototype.clearCanvas = function(){
  this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.updateCanvas = function(){
this.player.update();
//this.cloud.update();
this.clouds.forEach(function(cloud){
   cloud.update();
})

}

Game.prototype.drawCanvas = function(){ 
  this.player.draw();
  //this.cloud.draw();
  this.clouds.forEach(function(cloud){
    cloud.draw();
  })
}
Game.prototype.endGame = function () {
  console.log(this)
  this.gameOver = true;
}
Game.prototype.makeClouds = function(clouds) {
  clouds.push(new Cloud(this.canvas))
}
Game.prototype.setGamerOverCallback = function(buildGameOverScreen){
this.buildGameOverScreen = buildGameOverScreen;

}