import {Shape} from './shape';

export class Circle extends Shape{
    radius:number;
    area:number;

    constructor(radius:number){
        super();
        this.radius=radius;
        this.area=0;
    }

    override Myarea(): void {
        this.area=3.14*this.radius*this.radius;
    }

    display(){
        console.log(`
            Radius  :: ${this.radius}
            Area    :: ${this.area}
        `)
    }


}