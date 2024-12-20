// // //  Hi there, this is my second project, I started this on 2024-12-15.
let canvasX = 1708
let trafLight = 0;
let xCar = 1500;
let xCloud1 = 0;
let yCloud1 = 0;
let xCloud2 = 0;
let yCloud2 = 0;
let xCloud3 = 0;
let yCloud3 = 0;
let xCloud4 = 0;
let yCloud4 = 0;
let cloudVelocity1 = 0;
let cloudVelocity2 = 0;
let cloudVelocity3 = 0;
let cloudVelocity4 = 0;
let genStroke = 1;
let xSun = -50;
let ySun = 0;
let xMoon = -canvasX-100;
let stellarSpeed = 0.05;



function setup() {
  createCanvas(canvasX, 828);
  ySun = random(0, 580);
  yCloud1 = random(0, 500);
  xCloud1 = random(0, 1710);
  yCloud2 = random(0, 500);
  xCloud2 = random(0, 1710);
  yCloud3 = random(0, 500);
  xCloud3 = random(0, 1710);
  cloudVelocity1 = random(0.1, 0.5);
  cloudVelocity2 = random(0.1, 0.5);
  cloudVelocity3 = random(0.1, 0.5);
  cloudVelocity4 = random(0.1, 0.5);
  day = color(135, 206, 235);
  night = color(25, 25, 56);
}



function draw() {
  background(day);


  // // All the day night sun moon related stuff.
  // A simple yes no day night cycle.
  if (xSun < -50) {
    background(night);
  }
  if (xMoon < -50) {
    background(day);
  }
  // A more smooth transition from day to night.

  if (xSun > canvasX - 500) {
    dusk = lerpColor(day, night, 0.05);
  }
  if (xSun > canvasX - 450) {
    dusk = lerpColor(day, night, 0.05);
  }
  if (xSun > canvasX - 400) {
    dusk = lerpColor(day, night, 0.10);
  }
  if (xSun > canvasX - 350) {
    dusk = lerpColor(day, night, 0.15);
  }
  if (xSun > canvasX - 300) {
    dusk = lerpColor(day, night, 0.20);
  }
  if (xSun > canvasX - 250) {
    dusk = lerpColor(day, night, 0.25);
  }
  if (xSun > canvasX - 200) {
    dusk = lerpColor(day, night, 0.30);
  }
  if (xSun > canvasX - 150) {
    dusk = lerpColor(day, night, 0.35);
  }
  if (xSun > canvasX - 100) {
    dusk = lerpColor(day, night, 0.40);
  }
  if (xSun > canvasX - 50) {
    dusk = lerpColor(day, night, 0.45);
  }
  if (xSun > canvasX + 0) {
    dusk = lerpColor(day, night, 0.50);
  }
  if (xSun > canvasX + 50) {
    dusk = lerpColor(day, night, 0.55);
  }
  if (xSun > canvasX + 100) {
    dusk = lerpColor(day, night, 0.60);
  }
  if (xSun > canvasX + 150) {
    dusk = lerpColor(day, night, 0.65);
  }
  if (xSun > canvasX + 200) {
    dusk = lerpColor(day, night, 0.70);
  }
  if (xSun > canvasX + 250) {
    dusk = lerpColor(day, night, 0.75);
  }
  if (xSun > canvasX + 300) {
    dusk = lerpColor(day, night, 0.80);
  }
  if (xSun > canvasX + 350) {
    dusk = lerpColor(day, night, 0.85);
  }
  if (xSun > canvasX + 400) {
    dusk = lerpColor(day, night, 0.90);
  }
  if (xSun > canvasX + 450) {
    dusk = lerpColor(day, night, 0.95);
  }
  if (xSun > canvasX - 500) {
    background(dusk)
  }

  // A more smooth transition from night to day.
  if (xMoon > canvasX - 500) {
    dawn = lerpColor(night, day, 0.05);
  }
  if (xMoon > canvasX - 450) {
    dawn = lerpColor(night, day, 0.05);
  }
  if (xMoon > canvasX - 400) {
    dawn = lerpColor(night, day, 0.10);
  }
  if (xMoon > canvasX - 350) {
    dawn = lerpColor(night, day, 0.15);
  }
  if (xMoon > canvasX - 300) {
    dawn = lerpColor(night, day, 0.20);
  }
  if (xMoon > canvasX - 250) {
    dawn = lerpColor(night, day, 0.25);
  }
  if (xMoon > canvasX - 200) {
    dawn = lerpColor(night, day, 0.30);
  }
  if (xMoon > canvasX - 150) {
    dawn = lerpColor(night, day, 0.35);
  }
  if (xMoon > canvasX - 100) {
    dawn = lerpColor(night, day, 0.40);
  }
  if (xMoon > canvasX - 50) {
    dawn = lerpColor(night, day, 0.45);
  }
  if (xMoon > canvasX + 0) {
    dawn = lerpColor(night, day, 0.50);
  }
  if (xMoon > canvasX + 50) {
    dawn = lerpColor(night, day, 0.55);
  }
  if (xMoon > canvasX + 100) {
    dawn = lerpColor(night, day, 0.60);
  }
  if (xMoon > canvasX + 150) {
    dawn = lerpColor(night, day, 0.65);
  }
  if (xMoon > canvasX + 200) {
    dawn = lerpColor(night, day, 0.70);
  }
  if (xMoon > canvasX + 250) {
    dawn = lerpColor(night, day, 0.75);
  }
  if (xMoon > canvasX + 300) {
    dawn = lerpColor(night, day, 0.80);
  }
  if (xMoon > canvasX + 350) {
    dawn = lerpColor(night, day, 0.85);
  }
  if (xMoon > canvasX + 400) {
    dawn = lerpColor(night, day, 0.90);
  }
  if (xMoon > canvasX + 450) {
    dawn = lerpColor(night, day, 0.95);
  }
  if (xMoon > canvasX - 500) {
    background(dawn)
  }

  // A sun with a randomly generated y value, that moves from left to right.
  strokeWeight(genStroke);
  fill(255, 255, 0);
  circle(xSun, ySun, 100);
  xSun += stellarSpeed;
  if (xSun > canvasX + canvasX + 100) {
    xSun =  -100;
  }

  // A moon polar to the sun
  strokeWeight(genStroke);
  fill(211, 211, 211);
  circle(xMoon, ySun, 100);
  xMoon += stellarSpeed;
  if (xMoon > canvasX + canvasX + 100) {
    xMoon =  -100;
  }



  // Northern mountain.
  stroke(0);
  strokeWeight(genStroke);
  fill(128, 128, 128);
  triangle(-10, 550, 500, 550, 200, 340);

  // A moving cloud.
  // Cloud one.
  noStroke();
  fill(255, 250, 250);
  xCloud1 -= cloudVelocity1
  if (xCloud1 < -100) {
    yCloud1 = random(0, 500);
    xCloud1 = 1900;
  }
  circle(xCloud1 + 40, yCloud1, 50);
  circle(xCloud1 + 65, yCloud1, 40);
  rect(xCloud1, yCloud1, 100, 50, 50);

  // Cloud two.
  xCloud2 -= cloudVelocity2
  if (xCloud2 < -100) {
    yCloud2 = random(0, 500);
    xCloud2 = 1900;
  }
  circle(xCloud2 + 40, yCloud2, 50);
  circle(xCloud2 + 65, yCloud2, 40);
  rect(xCloud2, yCloud2, 100, 50, 50);

  // Cloud three.
  xCloud3 -= cloudVelocity3
  if (xCloud3 < -100) {
    yCloud3 = random(0, 500);
    xCloud3 = 1900;
  }
  circle(xCloud3 + 40, yCloud3, 50);
  circle(xCloud3 + 65, yCloud3, 40);
  rect(xCloud3, yCloud3, 100, 50, 50);

  // Cloud four.
  xCloud4 -= cloudVelocity4
  if (xCloud4 < -100) {
    yCloud4 = random(0, 500);
    xCloud4 = 1900;
  }
  circle(xCloud4 + 40, yCloud4, 50);
  circle(xCloud4 + 65, yCloud4, 40);
  rect(xCloud4, yCloud4, 100, 50, 50);

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

  // A mouse position detector I stole because I'm sick of the guesswork
  strokeWeight(0.3);
  textSize(15);
  text(`x: ${mouseX} y: ${mouseY}`, 50, 50);

  // Test if the code is still running because this meanie likes to crash.
  // textSize(100);
  // fill(0);
  // text('dusk', 500, 300);

}

function keyPressed() {
  if (key === ' ') {
    trafLight++;
    if (trafLight === 3) {
      trafLight = 0;
    }
  }
}