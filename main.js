'use strict';

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
      </section>
    `);

    const gameContainerElement = document.querySelector('.game-container')

    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');

    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    
  }

  makeSplashScreen();
}

window.addEventListener('load', main);