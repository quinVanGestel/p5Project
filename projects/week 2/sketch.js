// // //  Hi there, this is my second project, I started this on 2024-12-15.
// // //  2024-12-21-16-58  Hi there, I've done everything I wanted to do, I'd say this project is finished.
let xCanvas = 1708
let trafLight = 0;
let xCar = 1500;
let yCar = 545;
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
let ySun = 0;
let xSun = -100;
let xMoon = xCanvas + 100;
let stelSpeedMod = 4;
let stelSpeedBase = 0.05;
let stelSpeedResult = 0;
let carLeft = 0;
let carRight = 0;
let carUp = 0;
let carDown = 0;


function setup() {
  createCanvas(xCanvas, 828);
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

  // Allows the speed of the sun and moon to be adjusted manually.
  stelSpeedResult = stelSpeedBase * stelSpeedMod
  

  // // All the day night sun moon related stuff.
  // A simple yes no day night cycle.
  if (xSun <= xCanvas + 100) {
    background(day);
  }
  if (xMoon <= xCanvas + 100) {
    background(night);
  }

  // A more smooth transition from day to night. (that is broken for some reason, gahhh I hate bugs)
  if (xSun > xCanvas - 500) {
    dusk = lerpColor(day, night, 0.05);
  }
  if (xSun > xCanvas - 450) {
    dusk = lerpColor(day, night, 0.05);
  }
  if (xSun > xCanvas - 400) {
    dusk = lerpColor(day, night, 0.10);
  }
  if (xSun > xCanvas - 350) {
    dusk = lerpColor(day, night, 0.15);
  }
  if (xSun > xCanvas - 300) {
    dusk = lerpColor(day, night, 0.20);
  }
  if (xSun > xCanvas - 250) {
    dusk = lerpColor(day, night, 0.25);
  }
  if (xSun > xCanvas - 200) {
    dusk = lerpColor(day, night, 0.30);
  }
  if (xSun > xCanvas - 150) {
    dusk = lerpColor(day, night, 0.35);
  }
  if (xSun > xCanvas - 100) {
    dusk = lerpColor(day, night, 0.40);
  }
  if (xSun > xCanvas - 50) {
    dusk = lerpColor(day, night, 0.45);
  }
  if (xSun > xCanvas + 0) {
    dusk = lerpColor(day, night, 0.50);
  }
  if (xSun > xCanvas + 50) {
    dusk = lerpColor(day, night, 0.55);
  }
  if (xSun > xCanvas + 100) {
    dusk = lerpColor(day, night, 0.60);
  }
  if (xSun > xCanvas + 150) {
    dusk = lerpColor(day, night, 0.65);
  }
  if (xSun > xCanvas + 200) {
    dusk = lerpColor(day, night, 0.70);
  }
  if (xSun > xCanvas + 250) {
    dusk = lerpColor(day, night, 0.75);
  }
  if (xSun > xCanvas + 300) {
    dusk = lerpColor(day, night, 0.80);
  }
  if (xSun > xCanvas + 350) {
    dusk = lerpColor(day, night, 0.85);
  }
  if (xSun > xCanvas + 400) {
    dusk = lerpColor(day, night, 0.90);
  }
  if (xSun > xCanvas + 450) {
    dusk = lerpColor(day, night, 0.95);
  }

  // A more smooth transition from night to day.
  if (xMoon > xCanvas - 500) {
    dawn = lerpColor(night, day, 0.05);
  }
  if (xMoon > xCanvas - 450) {
    dawn = lerpColor(night, day, 0.05);
  }
  if (xMoon > xCanvas - 400) {
    dawn = lerpColor(night, day, 0.10);
  }
  if (xMoon > xCanvas - 350) {
    dawn = lerpColor(night, day, 0.15);
  }
  if (xMoon > xCanvas - 300) {
    dawn = lerpColor(night, day, 0.20);
  }
  if (xMoon > xCanvas - 250) {
    dawn = lerpColor(night, day, 0.25);
  }
  if (xMoon > xCanvas - 200) {
    dawn = lerpColor(night, day, 0.30);
  }
  if (xMoon > xCanvas - 150) {
    dawn = lerpColor(night, day, 0.35);
  }
  if (xMoon > xCanvas - 100) {
    dawn = lerpColor(night, day, 0.40);
  }
  if (xMoon > xCanvas - 50) {
    dawn = lerpColor(night, day, 0.45);
  }
  if (xMoon > xCanvas + 0) {
    dawn = lerpColor(night, day, 0.50);
  }
  if (xMoon > xCanvas + 50) {
    dawn = lerpColor(night, day, 0.55);
  }
  if (xMoon > xCanvas + 100) {
    dawn = lerpColor(night, day, 0.60);
  }
  if (xMoon > xCanvas + 150) {
    dawn = lerpColor(night, day, 0.65);
  }
  if (xMoon > xCanvas + 200) {
    dawn = lerpColor(night, day, 0.70);
  }
  if (xMoon > xCanvas + 250) {
    dawn = lerpColor(night, day, 0.75);
  }
  if (xMoon > xCanvas + 300) {
    dawn = lerpColor(night, day, 0.80);
  }
  if (xMoon > xCanvas + 350) {
    dawn = lerpColor(night, day, 0.85);
  }
  if (xMoon > xCanvas + 400) {
    dawn = lerpColor(night, day, 0.90);
  }
  if (xMoon > xCanvas + 450) {
    dawn = lerpColor(night, day, 0.95);
  }

  if (xMoon > xCanvas - 500 && xMoon < xCanvas + 500) {
    background(dawn);
  }
  if (xSun > xCanvas - 500 && xSun < xCanvas + 500) {
    background(dusk);
  }

  // A sun with a randomly generated y value, that moves from left to right.
  strokeWeight(genStroke);
  fill(255, 255, 0);
  circle(xSun, ySun, 100);
  xSun += stelSpeedResult;
  if (xSun > xCanvas + xCanvas + 100) {
    xSun = -100;
  }

  // A moon polar to the sun
  strokeWeight(genStroke);
  fill(211, 211, 211);
  circle(xMoon, ySun, 100);
  xMoon += stelSpeedResult;
  if (xMoon > xCanvas + xCanvas + 100) {
    xMoon = -100;
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
    carVelocity = 0;
  }
  else {
    fill(170, 29, 19)
  }
  circle(1506, 375, 25);

  if (trafLight === 1) {
    fill(0, 255, 0);
    carVelocity = 4;
  }
  else {
    fill(0, 132, 80);
  }
  circle(1506, 445, 25);

  if (trafLight === 2) {
    fill(255, 165, 0);
    carVelocity = 1;
  }
  else {
    fill(163, 90, 0);
  }
  circle(1506, 410, 25);
  console.log(trafLight)

  if (xCar < -150 + 2) {
    xCar = xCanvas + 2
  }
  if (xCar > xCanvas + 2) {
    xCar = -150 + 2
  }

  // WHGY IUS IT DOING THIS
  if (carLeft === 1) {
    xCar -= carVelocity;
  }
  else {
    xCar -= 0;
  }
  if (carRight === 1) {
    xCar += carVelocity;
  }
  else {
    xCar -= 0;
  }



  // The car design.
  // The car body.
  fill(255, 105, 180);
  rect(xCar + 35, yCar, 90, 40);
  rect(xCar, yCar+40, 150, 50);

  // The car windows.
  fill(176, 196, 222);
  for (let X = 0; X <= 1; X++) {
    rect(xCar + 40 + (X * 45), yCar+10, 30, 20);
  }

  // The car wheels
  fill(0);
  circle(xCar + 37.5, yCar+90, 30);
  circle(xCar + 112.5, yCar+90, 30);


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

  // // Text to display the values of variables.
  // textSize(40);
  // fill(0);
  // text(`carV = ${carVelocity}, carL = ${carLeft}, carR = ${carRight}, speedM = ${stelSpeedMod}, speedR ${stelSpeedResult}`, 300, 100);


  // // Test if the code is still running because this meanie likes to crash.
  // textSize(100);
  // fill(0);
  // text('test', 500, 300);



}


function keyPressed() {
  // 2024-12-20-18-50 An attempt at a WASD controllable car.
  if (key === 'a') {
    carLeft = 1;
  }
  if (key === 'q') {
    carLeft = 0;
  }
  if (key === 'd') {
    carLeft = 0;
  }
  if (key === 'd') {
    carRight = 1;
  }
  if (key === 'q') {
    carRight = 0;
  }
  if (key === 'a') {
    carRight = 0;
  }
  if (key === 'w' && (trafLight === 1 || trafLight === 2)){
    yCar = 545;
  }
  if (key === 's' && (trafLight === 1 || trafLight === 2)){
    yCar = 635;
  }
  // Allows the speed of the sun and moon to be adjusted manually.
  if (key === '0') {
    stelSpeedMod = 0;
  }
  if (key === '1') {
    stelSpeedMod = 1;
  }
  if (key === '2') {
    stelSpeedMod = 2;
  }
  if (key === '3') {
    stelSpeedMod = 4;
  }
  if (key === '4') {
    stelSpeedMod = 8;
  }
  if (key === '5') {
    stelSpeedMod = 16;
  }
  if (key === '6') {
    stelSpeedMod = 32;
  }

  if (key === '7') {
    stelSpeedMod = 64;
  }

  if (key === '8') {
    stelSpeedMod = 128;
  }
  if (key === '9') {
    stelSpeedMod = 256;
  }



  // Allows the traffic light to be adjusted manually.
  if (keyCode === SHIFT) {
    trafLight++;
    if (trafLight === 3) {
      trafLight = 0;
    }
  }
}
