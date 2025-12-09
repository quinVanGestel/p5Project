// Hi there, this is my first ever attempt at coding (aside from some arduino tinkering but that doesn't count), tryna see if it's something I'll like. I made this in a day on 2024-12-14.

// The coordinate preset for the first row of numbers.
let x1 = 50;
let y1 = 50;
let x2 = 400;
let space = 50;
let xChess = 100;
let yChess = 250;
let chessSquare = 25;
let trafLight = 0;
let diceThrow = false;


function setup() {
  createCanvas(1708, 828);
}

function draw() {
  background(239, 170, 196);
  // My name.
  fill(0);
  noStroke();
  textSize(20);
  text('Quin van Gestel', x1 + space, 50);
  textSize(30)
  text('1.', x1, y1 * 1);


  
  // The japanese flag in its accurate dimensions.
  text('2.', x1, y1 * 2.5)
  fill(255);
  rect(x1 + space, y1 + space, 150, 100);
  fill(188, 0, 45)
  circle(75 + y1 + space, 50 + y1 + space, 60);



  // A chessboard pattern.
  fill(0);
  text('3.', x1, y1 * 5.5);
  stroke(0);
  fill(255);
  square(xChess, yChess, 200);
  noStroke();
  fill(0);

  

  // This was made afterward on something like 2024-12-16, it used to be an inefficient wall of code with a line for every square.
  for (let X = 0; X < 8; X++) {
    for (let Y = 0; Y < 8; Y++) {
      if ((X + Y) % 2 === 0) {
        square(xChess + (25 * X), yChess + (25 * Y), chessSquare);
      }
    }
  }

  

  // Making a geometry house but with colours.
  text('4.', x1, y1 * 10.5)
  noFill();
  stroke(170, 74, 68);
  strokeWeight(5);
  fill(238, 217, 196);
  triangle(x1 + space - 3.5, y1 * 10.5 + 30, x1 + space * 2, y1 * 10.5 - 20, x1 + space * 3 + 3.5, y1 * 10.5 + 30);
  stroke(0);
  square(x1 + space, y1 * 10.5 + 30, 100);
  strokeWeight(6);
  stroke(238, 217, 196);
  strokeCap(SQUARE);
  line(x1 + space + 2.5, y1 * 10.5 + 30, x1 + space + 97.5, y1 * 10.5 + 30);
  stroke(0);
  strokeWeight(2);
  fill(255, 253, 141);
  circle(x1 + space + 50, y1 * 10.7, 15);
  square(x1 + space + 15, y1 * 11.5, 20);
  square(x1 + space + 65, y1 * 11.5, 20);
  rect(x1 + space + 50, y1 * 12.5, 35, 20);
  fill(92, 64, 51);
  rect(x1 + space + 20, y1 * 12.5, 15, 30);
  strokeCap(ROUND);
  strokeWeight(3);
  fill(0);
  point(x1 + space + 25, y1 * 12.7);
  strokeWeight(1);

  // // Alrighty, time to make that dice rollable.
  // noStroke();
  // text('6.', x2, y1 * 5.5);
  // stroke(0);
  // strokeWeight(5);
  // fill(255);
  // square(x2 + space, 250, 210, 25);
  // fill(0);
  // circle(x2 + space + 52.5, 250 + 52.5, 40);
  // circle(x2 + space + 105, 250 + 105, 40);
  // circle(x2 + space + 52.5, 250 + 157.5, 40);
  // circle(x2 + space + 157.5, 250 + 52.5, 40);
  // circle(x2 + space + 157.5, 250 + 157.5, 40);

    // Alrighty, time to make that dice rollable.
  noStroke();
  text('6.', x2, y1 * 5.5);
  stroke(0);
  strokeWeight(5);
  fill(255);
  square(x2 + space, 250, 210, 25);
  fill(0);
  circle(x2 + space + 52.5, 250 + 52.5, 40);
  circle(x2 + space + 105, 250 + 105, 40);
  circle(x2 + space + 52.5, 250 + 157.5, 40);
  circle(x2 + space + 157.5, 250 + 52.5, 40);
  circle(x2 + space + 157.5, 250 + 157.5, 40);
  
if (diceThrow === true) {
    fill(circle(x2 + space + space + 52.5, 250 + 52.5, 40););
  }

  
  // An attempt at a working traffic light.
  noStroke();
  fill(0);
  text('5.', x2, y1);
  stroke(0);
  strokeCap(ROUND);
  fill(128, 128, 128)
  rect(x2 + space, y1 + 20, 50, 160, 25);

  if (trafLight === 0) {
    fill(255, 0, 0);
  }
  else {
    fill(170, 29, 19)
  }
  circle(x2 + space + 25, y1 + 50, 30);

  if (trafLight === 1) {
    fill(0, 255, 0);
  }
  else {
    fill(0, 132, 80);
  }
  circle(x2 + space + 25, y1 + 150, 30);

  if (trafLight === 2) {
    fill(255, 165, 0);
  }
  else {
    fill(163, 90, 0);
  }
  circle(x2 + space + 25, y1 + 100, 30);
  console.log(trafLight)
}





function keyPressed() {
  if (key === ' ') {
    trafLight++;
    if (trafLight === 3) {
      trafLight = 0;
    }
  }

  // Praying it'll recognise ENTER as the enter key.
  if (key === 'ENTER') {
    diceThrow = true;
    }
  
  }

