class Square{
    #x=0;
    #y=0;
    #length=10;
    constructor(x,y,length){
        this.#x=x;
        this.#y=y;
        this.#length=length;
    }
    drawSquare(){
        rect(this.#x, this.#y, this.#length, this.#length);
    }
}