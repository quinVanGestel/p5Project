// 2024-12-21-17-21 Greetings. In this project I will be attempting to make functioning tic tac toe; funsies!
// The x and y values of the canvas' width and height.
let xCanvas = 1708;
let yCanvas = 828;
let tTTSize = 700;
let xTTT = (xCanvas - tTTSize) / 2;
let yTTT = (yCanvas - tTTSize) / 2;
// Activate the bit with emoji to visualise. Search dkjsafl to find it quickly.
let xSquare = [xTTT, xTTT + (tTTSize / 3), xTTT + (tTTSize / (3 / 2)), xTTT + tTTSize];
let ySquare = [yTTT, yTTT + (tTTSize / 3), yTTT + (tTTSize / (3 / 2)), yTTT + tTTSize];
let sqr6 = false

function setup() {
    createCanvas(xCanvas, yCanvas);
    // To set the background colour to a certain value, might come in handy later I've no clue.
    backgrnd = color(127.5, 127.5, 127.5);
    // To set the tic tac toe lines to a certain colour.
    tTTColour = color(0, 0, 0);
}

function draw() {
    background(backgrnd);

    // // The tic tac toe body, size is easily adjustable by changing the tTTSize variable :)
    strokeWeight(tTTSize / 15);
    // Vertical line 1.
    line(xSquare[1], ySquare[0], xSquare[1], ySquare[3]);
    // Vertical line 2.
    line(xSquare[2], ySquare[0], xSquare[2], ySquare[3]);
    // Horizontal line 1.
    line(xSquare[0], ySquare[1], xSquare[3], ySquare[1]);
    // Horizontal line 2.
    line(xSquare[0], ySquare[2], xSquare[3], ySquare[2]);

    // This is the bit with emoji to visualise. Search dkjsafl to find what you're visualising.
    text('0️⃣', xSquare[0], ySquare[0]);
    text('1️⃣', xSquare[1], ySquare[1]);
    text('2️⃣', xSquare[2], ySquare[2]);
    text('3️⃣', xSquare[3], ySquare[3]);


    textSize(90);
    fill(200);
    // Detects if the mouse is above squares one to three, text is for debugging.
    if (mouseX > xSquare[0] && mouseX < xSquare[1] && mouseY > ySquare[0] && mouseY < ySquare[1]) {
        text('sqr1', xSquare[0], ySquare[0] + tTTSize / 5);
    }
    if (mouseX > xSquare[1] && mouseX < xSquare[2] && mouseY > ySquare[0] && mouseY < ySquare[1]) {
        text('sqr2', xSquare[1], ySquare[0] + tTTSize / 5);
    }
    if (mouseX > xSquare[2] && mouseX < xSquare[3] && mouseY > ySquare[0] && mouseY < ySquare[1]) {
        text('sqr3', xSquare[2], ySquare[0] + tTTSize / 5);
    }
    // Detects if the mouse is above squares four to six, text is for debugging.
    if (mouseX > xSquare[0] && mouseX < xSquare[1] && mouseY > ySquare[1] && mouseY < ySquare[2]) {
        text('sqr4', xSquare[0], ySquare[1] + tTTSize / 5);
    }
    if (mouseX > xSquare[1] && mouseX < xSquare[2] && mouseY > ySquare[1] && mouseY < ySquare[2]) {
        text('sqr5', xSquare[1], ySquare[1] + tTTSize / 5);
    }
    if (mouseX > xSquare[2] && mouseX < xSquare[3] && mouseY > ySquare[1] && mouseY < ySquare[2]) {
        text('sqr6', xSquare[2], ySquare[1] + tTTSize / 5);
    }
    // Detects if the mouse is above squares seven to nine, text is for debugging.
    if (mouseX > xSquare[0] && mouseX < xSquare[1] && mouseY > ySquare[2] && mouseY < ySquare[3]) {
        text('sqr4', xSquare[0], ySquare[2] + tTTSize / 5);
    }
    if (mouseX > xSquare[1] && mouseX < xSquare[2] && mouseY > ySquare[2] && mouseY < ySquare[3]) {
        text('sqr5', xSquare[1], ySquare[2] + tTTSize / 5);
    }
    // Detects if square 6 has been clicked, just to see how things work.
    if (mouseX > xSquare[2] && mouseX < xSquare[3] && mouseY > ySquare[2] && mouseY < ySquare[3] && mouseIsPressed) {
        sqr6 = true
    }
    if (sqr6 === true) {
        text('sqr6', xSquare[2], ySquare[2] + tTTSize / 5);
    }

    // A mouse position detector I stole because I'm sick of the guesswork.
    strokeWeight(0.3);
    textSize(15);
    text(`x: ${mouseX} y: ${mouseY}`, 50, 50);

    // Text to display the values of variables.
    textSize(20);
    fill(220);
    text(`xTTT = ${xTTT}, yTTT = ${yTTT}, tTTSize = ${tTTSize} xSqr3 = ${xSquare[3]}, xTTT = ${(xCanvas - tTTSize) / 2}, xSqr1 = ${xSquare[1]}`, 300, 100);

    // // Test if the code is still running because this meanie likes to crash.
    // textSize(100);
    // fill(200);    
    // text('test', 500, 300);

}