# Project's name

云端Fun

## Description

Brief description of the project
This is a game for Chinese word review. 
The purpose of this game is for you to reinforce the Chinese characters after
a lesson with a teacher for a new word introduction.

## MVP (DOM - CANVAS)
MVP definition, deliverables.
CANVAS

## Backlog
* Words in each cloud
* Randomly generate word on slides
* Characters
* Sounds
* Beautify


## Data structure
game.js

function Game(canvas){
}

Game.prototype.startLoop=function(){
  loop()
}

Game.prototype.updateCanvas=function(){
}

Game.prototype.drawCanvas=function(){
}

Game.prototype.clearCanavas=function(){

}

Game.prototype.checkAllCollisons=function(){
}

Game.prototype.finishGameCallback=function(){
}

player.js

function Player(canvas){
    this.lives 
    this.size
    this.canvas
    this.x
    this.y
    this.speed
}

player.prototype.drawCanvas=function(){

}
player.prototype.updateCanvas=function(){

}
player.prototype.setDirectionCanvas=function(){

}
player.prototype.setLvesCanvas=function(){

}

player.prototype.checkcollisionWithClouds=function(){

}

clouds.js

function Clouds(Canvas.y){
    this.speed
    this.size
    this.direction
    this.canvas
    this.ctx
    this.x
    this.y
}

Clouds.prototype.drawCanvas=function(){

}

clouds.prototype.updateCanvas=function(){

}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
	-buildSplash
	-addEventListener(startGame)

- gameScreen
	-creat new Game()
	-game.start();

- gameoverScreen
	- restartScreen()
	- addEventListener()


## Task
Task definition in order of priority
Main - buildDom
Main - buildSplash
Main - addEventListener
Game - buildDom
Game - restartGame
Game - addEventListener
Block - create
Game - create player
Player - create
Player - move
Player - gravity
Player - collision
Player - jump
Clouds - moving direction



## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)