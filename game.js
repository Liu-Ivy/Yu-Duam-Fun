'use stric'

function Game(canvas) {
    this.Player = null;
    this.Clouds = [];
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  };

