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
let tTTSquare;
let sqr1 = false;
let sqr2 = false;
let sqr3 = false;
let sqr4 = false;
let sqr5 = false;
let sqr6 = false;
let sqr7 = false;
let sqr8 = false;
let sqr9 = false;
let oTurn = false;

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


    textSize(90);   // The textSize for the debug text.
    fill(200);  // The background colour for the text and inside of the o's (set to background colour once debugging is finished.)
    strokeWeight(tTTSize/100); // The strokeWeight for the x's and o's.
            // Detects mouses and clicks, the foundation for tic tac toe.
    // Squares one to five.
    if (mouseX > xSquare[0] && mouseX < xSquare[1] && mouseY > ySquare[0] && mouseY < ySquare[1]) {
        text('sqr1', xSquare[0], ySquare[0] + tTTSize / 5);
    }

    if (mouseX > xSquare[1] && mouseX < xSquare[2] && mouseY > ySquare[0] && mouseY < ySquare[1]) {
        text('sqr2', xSquare[1], ySquare[0] + tTTSize / 5);
    }

    if (mouseX > xSquare[2] && mouseX < xSquare[3] && mouseY > ySquare[0] && mouseY < ySquare[1]) {
        text('sqr3', xSquare[2], ySquare[0] + tTTSize / 5);
    }

    if (mouseX > xSquare[0] && mouseX < xSquare[1] && mouseY > ySquare[1] && mouseY < ySquare[2]) {
        text('sqr4', xSquare[0], ySquare[1] + tTTSize / 5);
    }

    if (mouseX > xSquare[1] && mouseX < xSquare[2] && mouseY > ySquare[1] && mouseY < ySquare[2]) {
        text('sqr5', xSquare[1], ySquare[1] + tTTSize / 5);
    }

    // Square six, circle test.
    if (mouseX > xSquare[2] && mouseX < xSquare[3] && mouseY > ySquare[1] && mouseY < ySquare[2]) {
        circle((xSquare[2] + tTTSize / 6), (ySquare[1] + tTTSize / 6), 100); // To test whether,, I know how to make a circle. Can't be too certain when it comes to coding!
    }

        // Square eight and nine, testing whether I know how to make alternating x's and o's.
    // Square eight.
    if (mouseX > xSquare[1] && mouseX < xSquare[2] && mouseY > ySquare[2] && mouseY < ySquare[3] && mouseIsPressed && oTurn === false) {
        sqr8 = true;
        oTurn = true;
    }
    if (sqr8 === true && oTurn === true) {
        circle((xSquare[1] + tTTSize / 6), (ySquare[2] + tTTSize / 6), 100);
    }

    if (mouseX > xSquare[1] && mouseX < xSquare[2] && mouseY > ySquare[2] && mouseY < ySquare[3] && mouseIsPressed && oTurn === true) {
        sqr8 = true;
        oTurn = false;
    }
    if (sqr8 === true && oTurn === false) {
        text('sqr8', xSquare[1], ySquare[2] + tTTSize / 5);
    }

    // Square nine.
    if (mouseX > xSquare[2] && mouseX < xSquare[3] && mouseY > ySquare[2] && mouseY < ySquare[3] && mouseIsPressed && (oTurn === false)) {
        sqr9 = true;
        oTurn = true;
    }
    if (sqr9 === true) {
        text('sqr9', xSquare[2], ySquare[2] + tTTSize / 5);
    }

    if (mouseX > xSquare[2] && mouseX < xSquare[3] && mouseY > ySquare[2] && mouseY < ySquare[3] && mouseIsPressed && (oTurn === true)) {
        sqr9 = true;
        oTurn = false;
    }
    if (sqr9 === true) {
        text('sqr9', xSquare[2], ySquare[2] + tTTSize / 5);
    }
    






    // A mouse position detector I stole because I'm sick of the guesswork.
    strokeWeight(0.3);
    textSize(15);
    text(`x: ${mouseX} y: ${mouseY}`, 50, 50);

    if (oTurn === true){
    textSize(100);
    fill(200);    
    text('test', 500, 300);
    }
    // Text to display the values of variables.
    textSize(30);
    fill(220);
    text(`xTTT = ${xTTT}, yTTT = ${yTTT}, tTTSize = ${tTTSize} xSqr3 = ${xSquare[3]}, xTTT = ${(xCanvas - tTTSize) / 2}, xSqr1 = ${xSquare[1]}, oTurn = ${oTurn}, sqr8 = ${sqr8}`, 0, 100);

    // // Test if the code is still running because this meanie likes to crash.
    // textSize(100);
    // fill(200);    
    // text('test', 500, 300);

    textSize(35);
    fill(200);    
    text('Remember to text if the sqr variable values actually change or if something else is going on here.', 0, 800);
}