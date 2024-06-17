let squares;

function setup() {
    createCanvas(1250, 600);
    background(220);
    squares=new Squares(0,0,100,4);
  }
  
  function draw() {
    squares.drawSquares();
  }