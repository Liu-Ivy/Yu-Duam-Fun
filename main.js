'use strict'

function main() {

  const mainElement = document.querySelector('main');

  function buildDom(html) {
    mainElement.innerHTML = html
    return mainElement;
  }


  function makeSplashScreen() {
    const splashScreen = buildDom(`
    <section>
      <div class="splash-text">
        <h1>云 端 Fun</h1>
      </div>
      <div class="start-button-container">
        <button class="start-button">Start</button>
      </div>  
        <iframe src="./sound/background-first.mp3" allow="autoplay" style="display:none" id="iframeAudio">
        </iframe>
    </section>
    `);

    const startButton = document.querySelector('.start-button');

    startButton.addEventListener('click', makeGameScreen);
  }

  function makeGameScreen() {
    const gameScreen = buildDom(`
      <section class="game-container">
      <iframe src="./sound/background.mp3" allow="autoplay" style="display:none" id="iframeAudio">
        </iframe>
        <canvas width="722"></canvas>
        <!--<button class='endGame'>Pause</button>-->
      </section>
    `);

    const gameContainerElement = document.querySelector('.game-container')
    const endGameButton = document.querySelector('.endGame')

    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');

    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    let game = new Game(canvasElement);
    
    game.startLoop();
    game.setGamerOverCallback(buildGameOverScreen)

    document.addEventListener('keydown',function(event){
      if(event.keyCode === 38){
          game.player.setDirection(-1)
          // game.player.setDirection.call(game.player,-1)
          game.player.jump();
          // game.player.jump.call(game.player);
      }else if(event.keyCode === 40){
          game.player.setDirection(1)
          // game.player.setDirection(1)
          
      }
    })

    // endGameButton.addEventListener('click', function () {
    //   game.endGame.call(game);
    // }) 
}

function buildGameOverScreen (){
  const gameOverScreen = buildDom(`
  <section>
  <div class="gameover-text">
      <h1>Game Over</h1>
  </div>
  <div class="gameover-img">
    <img src="./images/gameover.png">
  </div>
  <div class="gameover-btn">
  <button class="restart-button">Restart</button>
  </div>
</section>
  `)
  const restartButton=document.querySelector('.restart-button');
  restartButton.addEventListener('click', makeSplashScreen);
} 

makeSplashScreen();

}
window.addEventListener('load', main);