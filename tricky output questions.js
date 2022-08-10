//1
      function fruit(){
        console.log(name);
        console.log(price);

        var name="Apple";
        let price="20";
    }
        fruit();                       //ans: undefined


//2
for (var i=0;i<3;i++){
    setTimeout(()=>console.log(i),1);
}                                         //ans: 3 times 3


//3
 for (let i=0;i<3;i++){
    setTimeout(()=>console.log(i),1);
}                                             //ans: 0 1 2 


//4
console.warn(+true);
console.warn(typeof  +true);                  //ans: 1 and number


//5
console.warn(!"Aritra");
console.warn(typeof  +("Aritra"));               //ans: false and number


//6
let data= "size";
const bird={
    size:"small",
};
console.warn(bird[data]);
console.warn(bird["size"]);
console.warn(bird.size);
console.warn(bird.data);                             //ans: small small small undefined


//7
let c={name:"Peter"};
let d;
d=c;
c.name="Peter";
console.log(d.name);                                  //ans: Peter


//8
var x;
var x=10;
console.log(x);                                           //ans: 10


//9
var x;
let x=10;
console.log(x);                                         //ans: error


//10
let a=3;
let b=new Number(3);
console.log(a==b);
console.log(a===b);                                        //ans: true and false


//11
let name;
nmae={};   //Typo!
console.log(name);                                     //ans: undefined


//12
function fruit(){
    console.log("Woof!");
}
fruit.name="apple"
fruit()                                   //ans: Woof! 


//13
function sum(a,b){
    return a+b;
}
console.warn(sum(1,"2"))                     //ans: 12


//14
let number=0;
console.log(number++);
console.log(++number);
console.log(number);                           //ans: 0 2 2


//15
function getAge(...args){
    console.log(typeof args)
}
getAge(21);                                      //ans: object


//16
function getAge(){
    'use strict';
    age=21;
    console.log(age)
}
getAge();                                         //ans: error


//17
const sum=eval('10*10+5');
console.warn(sum)                                  //ans: 105


//18
const obj={1:"a", 2:"b", 3:"c"};
console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));                 //ans: true tue


//19
const obj={a:"one", b:"two", a:"repeat"};
console.log(obj);                                      //ans: {a: 'repeat', b: 'two'}


//20
for (let i=1;i<5;i++){
    if(i===3) continue;
    console.log(i);
}                                                   //ans: 1 2 4


//21
const foo =()=>console.log('First');
const bar=()=>setTimeout(()=>console.log('Second'));
const baz=()=>console.log('Third');
bar();
foo();
baz();                                                 //ans: First Third Second


//22
  <div onclick="console.log('first div')">
         <div onclick="console.log('second div')">
             <button onclick="console.log('button')">
               Click!
            </button>
        </div>
     </div>                                                     //ans: button second div first div */}


//23
const person={ name: "Aritra"};
function sayHi(age){
    return `${this.name} is ${age}`;
}
console.log(sayHi.call(person,21));
console.log(sayHi.bind(person,21));                      //ans: Aritra is 21,  f()


//24
function sayHi(){
    return(()=>0)();
}
console.log(typeof sayHi());                             //ans: number


//25
 function sayHi(){
     return()=>0;
 }
 console.log(typeof sayHi());                            //ans: function


//26
console.log(typeof typeof 1);                              //ans: string


//27
const numbers=[1,2,3];
numbers[9]=11;
console.log(numbers);                                //ans: (10) [1, 2, 3, …, 11]


//28
 const numbers=[1,2,3];
 numbers[3]=numbers;
 console.log(numbers);                                //ans: (4) [1, 2, 3, Array(4)]


//29
console.log(!!null);                                  //if there are one !null then its true, one !"" true, one!1 is false 
console.log(!!"");
console.log(!!1);                                     //ans: false false true


//30
console.warn(setInterval(()=>console.log('Hi'),1000))
console.warn(setInterval(()=>console.log('Hi'),1000))
console.warn(setInterval(()=>console.log('Hi'),1000))          //ans: Hi Hi Hi Hi.................


//31
console.log([..."Aritra"]);                             //ans: (6) ['A', 'r', 'i', 't', 'r', 'a']


//32
let data=3+4+'5';
console.log(typeof data);                            //ans: string


//33
console.log(typeof 3 + 4 +'5');                            //ans: number45


//34
console.log(typeof (3+ 4 + +'5'));                       //ans: number


//35
console.log(typeof []);                           //ans: object


//36
let data=[1,2,3].map(num=>{
    if(typeof num== 'number') return;
    return num*2;
});
console.log(data);                                //ans: (3) [undefined, undefined, undefined]


//37
function getInfo(member){
    member.name='Aritra';
}
const person= {name:'Sara'};
getInfo(person);
console.log(person);                                //ans: {name: 'Aritra'}


//38
function Car(){
    this.make='tata';
    return {make:'kia'};
}
const myCar=new Car();
console.log(myCar.make);                       //ans: kia


//39
(()=>{
    let x=(y=10);
})();
console.log(typeof x);                           // ans: undefined


//40
(()=>{
    let x=y=10;
})();
console.log(typeof y);                           //ans: number


//41
(()=>{
    let x=10;
})();
(()=>{
    let x=10;
})();
console.log(typeof x);                              //ans: no error , if we use console.log then it is undefined


//42
(()=>{
    let x=y=10;
})();
(()=>{
    let x=y=20;
})();
console.log(y);                                //ans: 20


//43
let x=100;
(()=>{
    var x=20;
 })();
 console.log(x);                                  //ans: 100


//44
console.warn(!true-true);                           //ans: -1

//45
console.warn(true + +"10");                          //ans: 11

//46
let a=[];
let b=[];
console.warn(a==b)
console.warn(a===b)                                    //ans: false false  **whenever we compare two array then it will false


//47
let a=[];
let b= a;
console.warn(a==b)
console.warn(a===b)                                    //ans: true true  **when memeory location same then its true


//48
let a=[20];
let b=[20];
console.warn(a[0]==b[0]);
console.warn(a[0]===b[0]);                             //ans: true true    **elements are compared


//49
console.warn(typeof NaN);                                //ans: number


//50
let data= 10 - -10;
console.warn(data);                                       //ans: 20


//51
const set= new Set([1, 1, 2, 3, 4]);
console.log(set);                                         //ans: {1,2,3,4}


//52
const result= false || {} || null; 
console.warn(result);                                    //ans: {}  **positive value


//53
// how to find OS name                                    //ans: navigator.platform


//54
for (var i=0; i<3; i++){
    setTimeout(()=> console.log(i),1);
}                                                        //ans: 3 3times


//55
for (let i=0; i<3; i++){
    setTimeout(()=> console.log(i),1);
}                                                         //ans: 0 1 2


//56
console.log(['a'] + ['b']);
console.log([ ] + [ ]);
console.log(! [ ]);
console.log(![ ] + [ ]);                         //ans: ab    false false       **![] called false string**