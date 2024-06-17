let squares;
let input;
let button;
let button2;
let button3;

function setup() {
    createCanvas(1920, 1080);
    input = createInput();
    input.position(20, height / 2);

    button = createButton("Generează");
    button.position(input.x + input.width, height / 2);
    button.mousePressed(generate);

    button2 = createButton("Perechi");
    button2.position(button.x + button.width, height / 2);
    button2.mousePressed(pairs);

    button3 = createButton("Memory");
    button3.position(button2.x + button2.width, height / 2);
    button3.mousePressed(memory);
}

function draw() {

}

function generate() {
    let n = getValueAndResetBoard();
    if (n >= 4 && n % 2 == 0) {
        squares = new Squares(0, 0, 100, n);
        squares.drawSquaresWithoutNumbers();
    } else {
        console.log("Valoarea lui n este >= 4 si trebuie sa fie para.");
    }
}

function getValueAndResetBoard() {
    let value = input.value();
    let n = Number(value);
    input.value("");
    clear();
    return n;
}

function pairs() {
    let n = getValueAndResetBoard();
    if (n >= 4 && n % 2 == 0) {
        squares = new Squares(0, 0, 100, n);
        squares.drawSquaresWithNumbers();
    } else {
        console.log("Valoarea lui n este >= 4 si trebuie sa fie para.");
    }
}

function memory() {

}