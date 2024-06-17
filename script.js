let squares;
let input;
let button;

function setup() {
    createCanvas(1920, 1080);
    input = createInput();
    input.position(20, height / 2);

    button = createButton("Generează");
    button.position(input.x + input.width, height / 2);
    button.mousePressed(generate);


}

function draw() {

}

function generate() {
    let value = input.value();
    let n = Number(value);
    input.value('');
    clear();
    if (n >= 4 && n % 2 == 0) {
        squares = new Squares(0, 0, 100, n);
        squares.drawSquares();
    } else {
        console.log("Valoarea lui n este >= 4 si trebuie sa fie para.");
    }
}