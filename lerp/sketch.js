let colour = 0
let test = 0

function setup() {
    createCanvas(1708, 828);
}

function draw() {
    background(colour);
    if (colour > 200) {
        colour = 0;
    }
    fill(200);
    text(`${test}`, 50, 50);
    test = lerp(test, 1000, 1);
    
}

function keyPressed() {
    if (key === ' ') {
        lerpTest();
    }
}

function lerpTest() {
    colour = lerp(colour, 255, 0.1);
}