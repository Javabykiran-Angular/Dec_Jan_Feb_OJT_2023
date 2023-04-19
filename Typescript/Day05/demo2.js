//functions
// 1 functions without parameter & without return type 
// 2 functions with parametr & without return type 
// 3 functions without parameter & with return type 
// 4 functions with parameter & with return type 
// 1 functions without parameter & without return type 
function add1() {
    console.log("u r in first type function...");
}
// add1();
// 2 functions with parametr & without return type 
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(8,10);
// 3 functions without parameter & with return type 
function add3() {
    return (8 + 8);
}
var res1 = add3();
// console.log("result is "+res1);
// 4 functions with parameter & with return type
function add4(a, b) {
    return (a + b);
}
console.log("\n    Addition is ".concat(add4(10, 20), "\n"));
