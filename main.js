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
        <h1>云 端 Fun</h1>
        <button class="start-button">Start</button>
      </section>
    `);

    const startButton = document.querySelector('.start-button');

    startButton.addEventListener('click', makeGameScreen);
  }

  function makeGameScreen() {
    const gameScreen = buildDom(`
      <section class="game-container">
        <canvas></canvas>
        <button class='endGame'>The End</button>
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

    document.addEventListener('keydown',function(event){
      console.log(game.player.setDirection)
      if(event.keyCode === 38){
          game.player.setDirection.call(game.player,-1)
          game.player.jump.call(game.player);
      }else if(event.keyCode === 40){
          game.player.setDirection(1)
          
      }
    })

    endGameButton.addEventListener('click', function () {
      game.endGame.call(game);
    });

  //  document.addEventListener('keyup',function(event){ 
  //     if(event.keyCode === 38 || event.keyCode === 40){
  //         game.player.setDirection(0);

  // }
//})

}
makeSplashScreen();
}
window.addEventListener('load', main);