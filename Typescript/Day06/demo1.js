// anonymous functions
// the functions does not have any name 
var temp1 = function () {
    console.log("it is a  anonymous functions");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(7, 8);
// console.log("Addition is "+res);
//fat arrow function / Arrow function 
var temp3 = function () {
    console.log("fat Arrow Function is called ....");
};
//    temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log(`
//     Addition is ${temp4(10,8)}
// `)
//optional parameter function
function add1(a, b) {
    console.log("Value of a " + a); //10
    console.log("Value of b " + b); //undefined
    console.log("Value of a+b " + (a + b)); //NAN=> Not a number
}
// add1(10);
// add1(10,9);
function add2(a, b) {
    console.log("Value of a " + a); //10
    console.log("Value of b " + b); //undefined
    console.log("Value of a+b " + (a + b)); //NAN=> Not a number
}
// add2();
// add2(7);
// add2(7,9);
// default parameter function
function add3(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of a " + a); //4
    console.log("Value of b " + b); //10
    console.log("Value of a+b " + (a + b)); //14=> Not a number
}
// add3(4);
// add3(4,11);
function add4(a, b) {
    if (a === void 0) { a = 45; }
    console.log("Value of a " + a); //4
    console.log("Value of b " + b); //10
    console.log("Value of a+b " + (a + b)); //14=> Not a number
}
// add4(7,20);
function add5(a, b) {
    if (a === void 0) { a = 45; }
    console.log("Value of a " + a); //4
    console.log("Value of b " + b); //10
    console.log("Value of a+b " + (a + b)); //14=> Not a number
}
add5();
