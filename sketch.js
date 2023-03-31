let circle1;
let circle2;
let circleRadius = 125;
let circleColor = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circle1 = new Circle();
  circle2 = new Circle();
}

function draw() {
  frameRate(60);
  background(0);

  let distance = dist(circle1.x, circle1.y, circle2.x, circle2.y);

  circle1.move();
  circle1.show();
  circle2.move();
  circle2.show();

  if(distance <= circleRadius) {
    circleColor = color(random(0, 255), random(0, 255), random(0, 255));
  } else {
    circleColor = color(255, 255, 255);
  }
}

class Circle {
  //add args here
  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    fill(circleColor);
    noStroke();
    circle(this.x, this.y, circleRadius)
  }
}
