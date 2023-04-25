//Shallow Copy & deep Copy (Js Interview Question)
// let a=10;
// console.log("a=> "+a);
// let b=a;
// console.log("b=> "+b);
// b=100;
// console.log(`
//     a=> ${a}
//     b=> ${b}
// `)
var arr = [45, 66, 78, 200];
// let arr1=arr;
// console.log(`
//     arr => ${arr}
//     arr1 => ${arr1}
// `)
// arr1[1]=500;
// console.log(`
//     arr => ${arr}
//     arr1 => ${arr1}
// `)
var arr1 = arr.slice(0);
// console.log(`
//     arr => ${arr}
//     arr1 => ${arr1}
// `)
arr1[2] = 1000;
console.log("\n    arr => ".concat(arr, "\n    arr1 => ").concat(arr1, "\n"));
