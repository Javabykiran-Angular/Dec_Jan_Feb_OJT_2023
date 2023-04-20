// anonymous functions
// the functions does not have any name 

let temp1=function (){
    console.log("it is a  anonymous functions")
}

// temp1();

let temp2=function (a:number,b:number):number{
    return (a+b);
}

let res=temp2(7,8);
// console.log("Addition is "+res);


//fat arrow function / Arrow function 
 
   let temp3=()=>{
    console.log("fat Arrow Function is called ....")
   }

//    temp3();

 let temp4=(a:number,b:number):number=>{
        return (a+b);
    }

    // console.log(`
    //     Addition is ${temp4(10,8)}
    // `)

//optional parameter function

function add1(a:number,b?:number){
    console.log("Value of a "+a);//10
    console.log("Value of b "+b);//undefined
    console.log("Value of a+b "+(a+b!));//NAN=> Not a number

}
// add1(10);
// add1(10,9);

function add2(a?:number,b?:number){
    console.log("Value of a "+a);//10
    console.log("Value of b "+b);//undefined
    console.log("Value of a+b "+(a!+b!));//NAN=> Not a number

}


// add2();
// add2(7);
// add2(7,9);


// default parameter function
 
function add3(a:number,b:number=10){
    console.log("Value of a "+a);//4
    console.log("Value of b "+b);//10
    console.log("Value of a+b "+(a+b));//14=> Not a number

}

// add3(4);
// add3(4,11);

 
function add4(a:number=45,b:number){
    console.log("Value of a "+a);//4
    console.log("Value of b "+b);//10
    console.log("Value of a+b "+(a+b));//14=> Not a number

}

// add4(7,20);

function add5(a:number=45,b?:number){
    console.log("Value of a "+a);//4
    console.log("Value of b "+b);//10
    console.log("Value of a+b "+(a+b!));//14=> Not a number

}

// add5();
