//destructing/derefrence of array
let a:number[]=[4,5,6];

let [t1,t2,t3]=a;

// console.log(`
//     t1 => ${t1}
//     t2 => ${t2}
//     t3 => ${t3}
// `);

let [s1,...arr]=a;
console.log(`
    s1 => ${s1}
    arr=> ${arr}
`);

