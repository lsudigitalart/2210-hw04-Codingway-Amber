let x, y;
let speed = 5;

function setup() {
  createCanvas(600, 600);
  noCursor();
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(100);
  fill(255, 178, 202);
  square(x, y, 55, 20);

  // Move square with WASD keys
  if (keyIsDown(87)) { // W key
    y -= speed;
  }
  if (keyIsDown(83)) { // S key
    y += speed;
  }
  if (keyIsDown(65)) { // A key
    x -= speed;
  }
  if (keyIsDown(68)) { // D key
    x += speed;
  }
}
