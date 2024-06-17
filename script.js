let squares;
let input;
let button;
let button2;
let button3;
let memoryGame;
let gameNumber;

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
    gameNumber = getValueAndResetBoard();
    if (gameNumber >= 4 && gameNumber % 2 == 0) {
        squares = new Squares(0, 0, 100, gameNumber);
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
    gameNumber = getValueAndResetBoard();
    if (gameNumber >= 4 && gameNumber % 2 == 0) {
        squares = new Squares(0, 0, 100, gameNumber);
        squares.drawSquaresWithNumbers();
    } else {
        console.log("Valoarea lui n este >= 4 si trebuie sa fie para.");
    }
}

function memory() {
    gameNumber = getValueAndResetBoard();
    if (gameNumber >= 4 && gameNumber % 2 == 0) {
        memoryGame = new MemoryGame(0, 0, 100, gameNumber);
        memoryGame.drawSquaresWithHiddenNumbers();
    } else {
        console.log("Valoarea lui n este >= 4 si trebuie sa fie para.");
    }
}

function mousePressed() {
    let x = Math.floor(mouseX / 100);
    let y = Math.floor(mouseY / 100);
    if (memoryGame !== undefined && x < gameNumber && y < gameNumber) {
        memoryGame.getNumber(x, y);
    }
}