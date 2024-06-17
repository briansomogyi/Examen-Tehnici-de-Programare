class Square {
    #x = 0;
    #y = 0;
    #length = 10;
    #n = 1;
    constructor(x, y, length, n) {
        this.#x = x;
        this.#y = y;
        this.#length = length;
        this.#n = n;
    }
    drawSquare() {
        rect(this.#x, this.#y, this.#length, this.#length);
        this.drawNumber();
    }
    drawNumber() {
        text(`${this.#n}`, this.#x + this.#length / 2, this.#y + this.#length / 2);
    }
}