'use stric'

function Game(canvas) {
    this.player = null;
    this.clouds = [];
    this.characters = characters.sort(()=> .5 - Math.random());
    this.step = 0;
    
    this.matchingCard = null;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.gameOver = false;
    
   
  };

 
  
 Game.prototype.startLoop = function(){

     this.player = new Player(this.canvas);
  
      this.interval = setInterval(()=>{this.makeClouds(this.clouds)}, 1750)
      const loop = () => {
  
        // if(Math.random() > 0.999 ){
        //   this.clouds.push(new Cloud(this.canvas, "images/HUO.png"));
        // }
        // if(Math.random() > 0.999){
        //   this.clouds.push(new Cloud(this.canvas, "images.jpg/MU.png"));
        // }
     // this.interval = setInterval(()=>{this.makeMatchingCard(this.matchingCard)})
        this.clearCanvas();
        this.updateCanvas();
        this.drawCanvas();
        this.checkCollision();
      
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
  this.matchingCard = new matchingCard(this.canvas, this.characters[this.step]);
  this.clouds.forEach(function(cloud){
   cloud.update();
})

}

Game.prototype.drawCanvas = function(){ 
  this.player.draw();
  this.matchingCard.draw();
  this.clouds.forEach(function(cloud){
    cloud.draw();
  })
}

Game.prototype.endGame = function () {

  this.gameOver = true;
}

Game.prototype.makeClouds = function(clouds) {
  let imgLinks = ["images/HUO.png","images/MU.png","images/REN.png","images/SHAN.png","images/YUE.png","images/YUN.png","images/RI.png"];
  let randomNumber = Math.floor(Math.random() * imgLinks.length);
  let randomPick = imgLinks[randomNumber]
  let type = randomPick.split('images/')[1].split('.')[0];
  clouds.push(new Cloud(this.canvas, randomPick, type))
}
//Game.prototype.makeMatchingCard = function(machingClouds){
  //this.characters.forEach()

//}

Game.prototype.checkCollision = function(){
  this.clouds.forEach((cloud,index)=>{
    const isColliding = this.player.checkCollisionWithCloud(cloud);
    if (isColliding && cloud.type === this.matchingCard.type){
      this.step++
      this.clouds.splice(index, 1);
    }
     else if (isColliding && this.player.isTouchingCloud === false){
       console.log('wrong word')
       this.player.isTouchingCloud = true;
     this.player.setLives();
     if(this.player.lives === 0){
      this.gameOver = true;
      this.endGameAndBuildScreen();
    }
  } 
      
    })
  }



Game.prototype.setGamerOverCallback = function(buildGameOverScreenFunctionFromMain){
this.endGameAndBuildScreen = buildGameOverScreenFunctionFromMain;

}
