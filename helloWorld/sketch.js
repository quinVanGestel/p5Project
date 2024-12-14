let helloWorld = true;
let x1 = 50;
let y1 = 50;


function setup() {
    createCanvas(1705, 815);
}

function draw() {
    background(220, 220, 0);
    // My name
    fill(0);
    text('1.', x1, y1 * 1);
    text('Quin van Gestel', x1 + 30, 50);

    // A flag
    text('2.', x1, y1 * 2)
    
}