class Squares{
    #x=0;
    #y=0;
    #length=10;
    #n=4;
    constructor(x,y,length,n){
        this.#x=x;
        this.#y=y;
        this.#length=length;
        this.#n=n;
    }
    drawSquares(){
        for(let i=0;i<this.#n;i++){
            push();
            for(let j=0;j<this.#n;j++){
                let randomNumber=random(1,8.1);
                let n=Math.floor(randomNumber);
                let square = new Square(this.#x,this.#y,this.#length,n);
                square.drawSquare();
                translate(this.#length,0);
            }
            pop();
            translate(0,this.#length);
        }
    }
}