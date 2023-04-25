//destructing/derefrence of array
var a = [4, 5, 6];
var t1 = a[0], t2 = a[1], t3 = a[2];
// console.log(`
//     t1 => ${t1}
//     t2 => ${t2}
//     t3 => ${t3}
// `);
var s1 = a[0], arr = a.slice(1);
console.log("\n    s1 => ".concat(s1, "\n    arr=> ").concat(arr, "\n"));
