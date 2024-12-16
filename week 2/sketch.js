// Hi there, this is my second project, I started this on 2024-12-15.
let trafLight = 0;
let xCar = 1500;
let xSun = -100
// ^ Change this to a more fun value later on
let ySun = 0
let genStroke = 1

function setup() {
  createCanvas(1708, 828);
  ySun = random(0, 580);
}

function draw() {
  background(135, 206, 235);


  // A mouse position detector I stole because I'm sick of the guesswork
  strokeWeight(0.3);
  textSize(15);
  text(`x: ${mouseX} y: ${mouseY}`, 50, 50);


  // A sun with a randomly generated y value, that moves from left to right.

  strokeWeight(genStroke);
  fill(242, 212, 43);
  circle(xSun, ySun, 100);
  if (xSun > 1900) {
    xSun = -100;
  }
  xSun +=0.1


  // The grass and the hill.
  strokeWeight(genStroke)
  fill(34, 139, 34);
  ellipse(1400, 590, 600, 200);
  rect(-10, 550, 1750, 300);


  // The road.
  stroke(0);
  strokeWeight(4);
  fill(128, 128, 128);
  rect(-10, 600, 1750, 150);

  // The road stripes
  strokeWeight(0);
  fill(255);
  for (let X = 0; X < 6; X++) {
    rect(-20 + (300 * X), 660, 150, 15);
  }


  // Northern mountain.
  stroke(0);
  strokeWeight(genStroke);
  fill(128, 128, 128);
  triangle(-10, 550, 500, 550, 200, 340);


  // Southern mountain.
  stroke(0);
  strokeWeight(genStroke);
  fill(150, 150, 150);
  triangle(700, 580, 1000, 580, 900, 300);


  // The oak trees on the northern side of the road.
  strokeWeight(genStroke);
  fill(139, 69, 19);
  rect(600, 460, 26, 130);
  fill(34, 139, 34);
  circle(613, 440, 100);

  fill(139, 69, 19);
  rect(1300, 410, 26, 120);
  fill(34, 139, 34);
  circle(1313, 400, 90);


  // A traffic light I totally didn't steal from my previous assignment.
  fill(0);
  stroke(0);
  strokeWeight(genStroke);
  strokeCap(ROUND);
  fill(115, 115, 115)

  // The traffic light pole.
  rect(1500, 450, 12, 120);

  // The traffic light base.
  rect(1484, 350, 44, 120, 20);

  strokeWeight(3);
  if (trafLight === 0) {
    fill(255, 0, 0);
  }
  else {
    fill(170, 29, 19)
  }
  circle(1506, 375, 25);

  if (trafLight === 1) {
    fill(0, 255, 0);
    xCar -= 4;
  }
  else {
    fill(0, 132, 80);
  }
  circle(1506, 445, 25);

  if (trafLight === 2) {
    fill(255, 165, 0);
    xCar -= 1;
  }
  else {
    fill(163, 90, 0);
  }
  circle(1506, 410, 25);
  console.log(trafLight)

  if (xCar < -152) {
    xCar = 1710
  }

  // The car design.
  // The car body.
  fill(255, 105, 180);
  rect(xCar + 35, 540, 90, 40);
  rect(xCar, 580, 150, 50);

  // The car windows.
  fill(176, 196, 222);
  for (let X = 0; X <= 1; X++) {
    rect(xCar + 40 + (X * 45), 550, 30, 20);
  }

  // The car wheels
  fill(0);
  circle(xCar + 37.5, 630, 30);
  circle(xCar + 112.5, 630, 30);


  // The oak tree on the southern side of the road.
  strokeWeight(genStroke);
  fill(139, 69, 19);
  rect(800, 680, 26, 120);
  fill(34, 139, 34);
  circle(813, 660, 100);

}

function keyPressed() {
  if (key === ' ') {
    trafLight++;
    if (trafLight === 3) {
      trafLight = 0;
    }
  }

}

