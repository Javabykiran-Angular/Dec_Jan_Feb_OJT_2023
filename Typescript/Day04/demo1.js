//data types
// number(int,long,double,short,float),string(""/''/``),boolean(true/false)
// any(number,string,boolean)
// void => it is a neutral data type => it does not point any thing 
// misec. null & undefined => it store value as well as data type 
// Object, unknwon
var a = 10; // Forward declartion & defination 
// console.log("Value of a is "+a);
var str;
// console.log('Value of str is '+str);
// var a1:any;
// a1=2.5;
// console.log(`Value of a1 is ${a1} `)
// a1='Sumit';
// console.log(`Value of a1 is ${a1} `)
// a1=true;
// console.log(`Value of a1 is ${a1} `)
var a2;
// console.log("Value of a2 "+a2);
// var a3=true;
//literal
var a4;
// a4=55;
// a4='Sumit';
// var a5:20|boolean | string;
// a5=20;
// a5=true;
// Type assertion
// it tell to compiler to convert a specific data type
// variable should have any/Object/Unknown
// 1 Angle bracket =>mostly used in .ts file 
// 2 as syntax  => used in html fiel as well as .ts file 
// 1 Angle bracket 
var a5;
// a5.
var temp = a5;
// temp.
// 2 as syntax
var temp1 = a5;
// temp1.
//Operators
// Airthmathic => +,-,/,*,%
// Logical => &&,||
// bitwise => ~,&,|,^,!,<<,>>
// relational => <,>,>=,<=,!=
// conditional => == (it only checks a value of particular variable ),!=,===(Strongly equality => it checks data type as well as value of that particular variable )
// ternary => condition?expression1:expression2
// unary => inc/dec ,post/pre ++a,a--
// assignment => =,+=,-=,/=,*=,%=
//Control Stmt
// if,if-else,nested if-else,break,switch,continue
var cnt = 2;
// if(cnt<4){
//     console.log("Condition is true");
// }else{
//     console.log("Condition is false");
// }
// var choice=21;
// switch(choice){
//     case 1: console.log("U r in case 1");
//             break;
//     case 2: console.log("U r in case 2");
//             break;
//     default: console.log("U r in default case..");
//             break;
// }
// Loop Stmt
// while,do-while,for loop,foreach
var count = 5;
// while(count!=0){
//     console.log("count is "+count);
//     count--;
// }
do {
    console.log("count is " + count);
    count--;
} while (count != 0);
