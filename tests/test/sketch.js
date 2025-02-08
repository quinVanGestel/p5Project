let canvasX = 1708
let canvasY = 828
function setup() {
    createCanvas(1708, 828);
}

function draw() {
    background(127.5);

    let arrayTest = ["bees", "flowers", "toilet paper", "three"];

    fill(0);
    textSize(100);
    text('test', 300, 100);
    textSize(60);
    text(`${arrayTest}`, 300, 200);
      // A mouse position detector I stole because I'm sick of the guesswork
     strokeWeight(0.3);
     textSize(15);
     text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
}
