//Swapping variables without using 3rd variables (Js interview Question)
// 1 Addition & substraction
// 2 multiplication & division
// 3 xor operator 
// 4 using dereferncing of array 

let a=10;
let b=30;

console.log(`
    Before swapping 
    a => ${a}
    b => ${b}
`);

[a,b]=[b,a];

console.log(`
    After swapping 
    a => ${a}
    b => ${b}
`);