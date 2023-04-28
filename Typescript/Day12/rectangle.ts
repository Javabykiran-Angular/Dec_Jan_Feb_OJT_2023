
import {Shape} from './shape';

export class Rectangle extends Shape {

    length:number;
    breadth:number;
    area:number;

    constructor(length:number,breadth:number){
        super();
        this.length=length;
        this.breadth=breadth;
        this.area=0;
    }

    override Myarea(): void {
        this.area=this.length*this.breadth;
    }

    display(){
        console.log(`
            Length      :: ${this.length}
            Breadth     :: ${this.breadth}
            Area        :: ${this.area}
        `)
    }


}