class MemoryGame {
    #x = 0;
    #y = 0;
    #length = 10;
    #n = 4;
    #numbers = [];
    #squares = [];

    constructor(x, y, length, n) {
        this.#x = x;
        this.#y = y;
        this.#length = length;
        this.#n = n;
        this.initNumbers();
    }

    drawSquaresWithHiddenNumbers() {
        for (let i = 0; i < this.#n; i++) {
            push();
            for (let j = 0; j < this.#n; j++) {
                let n = this.getRandomNumber();
                let square = new Square(this.#x, this.#y, this.#length, n);
                this.#squares.push(square);
                square.drawSquare();
                // translate(this.#length, 0);
                this.#x += this.#length;
            }
            pop();
            // translate(0, this.#length);
            this.#x = 0;
            this.#y += this.#length;
        }
    }

    getRandomNumber() {
        let number = this.initRandomNumber();
        if (this.#numbers[number] < 2) {
            this.#numbers[number]++;
            return number;
        } else {
            return this.getRandomNumber();
        }
    }

    initRandomNumber() {
        let randomNumber = random(1, 2 * this.#n + 0.1);
        let number = Math.floor(randomNumber);
        return number;
    }

    initNumbers() {
        for (let i = 0; i < 2 * this.#n + 1; i++) {
            this.#numbers.push(0);
        }

    }

    showNumbers() {
        for (const square of this.#squares) {
            square.drawNumber();
        }
    }
}