let colour = 0
let test = 5

function setup() {
    createCanvas(1708, 828);
}

function draw() {
    background(colour);
    if (colour > 200) {
        colour = 0;
    }
    fill(200);
    textSize(100);
    text(`${test}`, 100, 200);
    // test = lerp(25, 135, 0.5);
    // test = lerp(21, 56, 0.2);
    test = lerp(5, 10, 3);
    // WHY IS IT NOT WORKING

    // WOOOOH, I FIGURED IT OUT
    // variable = lerp(val1, val2, amt);
    // Means it'll do val2 minus val1, multiply that by amt, then add val1 to it. I am so happy right now.
}

function keyPressed() {
    if (key === ' ') {
        lerpTest();
    }
}

function lerpTest() {

colour = lerp(colour, 255, 0.1);
}