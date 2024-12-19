// Hi there, this is my second project, I started this on 2024-12-15.
let trafLight = 0;
let xCar = 1500;
let xSun = 0;
let ySun = 0;
let xMoon = -1738;
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
let dayR = 135;
let dayG = 206;
let dayB = 235;
let nightR = 25;
let nightG = 25;
let nightB = 112;

function setup() {
  createCanvas(1708, 828);
  ySun = random(0, 580);
  yCloud1 = random(0, 500);
  xCloud1 = random(0, 1710);
  yCloud2 = random(0, 500);
  xCloud2 = random(0, 1710);
  yCloud3 = random(0, 500);
  xCloud3 = random(0, 1710);
  cloudVelocity1 = random(0.1, 0.5)
  cloudVelocity2 = random(0.1, 0.5)
  cloudVelocity3 = random(0.1, 0.5)
  cloudVelocity4 = random(0.1, 0.5)

}

function draw() {
  background(dayR, dayG, dayB);



    // All the day night sun moon related stuff.
  // A sun with a randomly generated y value, that moves from left to right.
  strokeWeight(genStroke);
  fill(255, 255, 0);
  circle(xSun, ySun, 100);
  xSun += 5;
  if (xSun > 1738) {
    xSun = -1738;
  }

  // A day night cycle, still working on making this a more smooth transition. (For future me: look into "lerp".)
  if (xSun > 1730){
    background(nightR, nightG, nightB);
  }
  if (xSun < 0){
    background(nightR, nightG, nightB);
  }
  if (xMoon > 1730){
     background(dayR, dayG, dayB);
  }

  // A moon polar to the sun
  strokeWeight(genStroke);
  fill(211, 211, 211);
  circle(xMoon, ySun, 100);
  xMoon += 5;
  if (xMoon > 1738) {
    xMoon = -1738;
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
  // text('TEST', 500, 300);

}

function keyPressed() {
  if (key === ' ') {
    trafLight++;
    if (trafLight === 3) {
      trafLight = 0;
    }
  }
}