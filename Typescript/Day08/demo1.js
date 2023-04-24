//Rest Parameter function
function display(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log("===> " + str);
    console.log(item);
}
// display(45,85);
// display(45,85,78,9,5,43);
// display();
// display("Sumit",78,100,63);
// push & pop method 
// to add value dynmically in array 
// LIFO => Last in First Out 
var a = [];
// a.push(78);
// console.log(a)
// a.push(45,99,23);
// console.log(a);
// let res=a.pop();
// console.log(a)
// console.log("Poped value is "+res);
//Splice method
var a1 = [74, 85, 12, 53, 63];
// console.log(a1);
// a1.splice(2,0,800);
// console.log(a1);
// a1.splice(1,0,50,60,20);
// console.log(a1);
// a1.splice(5,1);
// console.log(a1);
// a1.splice(5,2);
// console.log(a1);
// a1.splice(2,1,555,600);
// console.log(a1);
//slice
// if u want copy a section of data from array 
var course = ["Core java", 'Advanced Java', 'Spring Boot', 'Hibernate', 'HTML,CSS,JS,Mysql', 'JSP', 'Angular 12 ', 'jenking', 'Docker', 'AWS'];
// let temp=course.slice(1,8);
console.log("===> " + course);
// console.log(`
//         Copied Array => ${temp}
// `)
var temp1 = course.slice(1);
// console.log(`
//         Copied Array => ${temp1}
// `)
var temp2 = course.slice();
// console.log(`
//         Copied Array => ${temp2}
// `)
//map Method
// it works element by element operation 
var a2 = [2, 3, 4, 5];
var sqrarr = a2.map(function (myvalue) {
    return (myvalue * myvalue);
});
console.log(a2);
console.log(sqrarr);
