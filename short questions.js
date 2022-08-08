console.log(!!10+20)
// double exclamation makes the integer to bool so 10 becomes true and is considered as 1. so its 21.

let x=0;
console.log(x++);
// A:0, B:1, C:2, D:NaN   its 0.

console.log(3+4+'5')
// beacuse 3 and 4 is a number and 5 is an integer. so its 75.

let person= {name:'Aritra'};
const members= [person];
person = null;
console.log(members);
// answer [{name: "Aritra"}]

var num=8;
var num=10;
console.log(num)
// var can be redeclared in to the scope. answer 10.

function getAge(...args){
    console.log(typeof args);
}
getAge(21);
// answer is object. in javascript array is object.

let data={
    name:'Aritra',
    Age:23,
    city:'KOLKATA'
}
//tabular form----->>>
console.table(data)
//answer is table form

let data="Hello peter, how are you"
//how to do truncate this string or put specfic character and left all remove
data= data.substring(0,11)
//Hello peter
data
//Hello peter

let data=[10,20,30,40,50];
let len= data.length;
for (let i=10;i<len;i++)
//for (let i=10;i<data.length;i++)
{
    //how to optimize this for loop
}

