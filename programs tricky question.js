//1. cut array length

let data=[4,7,1,4,9,2,4,1];  //how to fix this length
data.length=3;
console.warn(data)

//2. sum of array element or  multiplication of array or.........

let sum =data.reduce((x,y)=>x+y);
console.warn(sum);

//3. remove duplicates values from array

let unique=new Set(data);
console.warn([...unique]); 

//4. comma operator

let x=10;
x=(x++,x);
console.warn(x)

//5. value swap using distructuring

let x=20, y=30;
[x,y]=[y,x];
console.warn(x,y);


//6. how to define a class with properties and methods in javascript?

class Car{
     constructor(model,name){
        this.model=model;
        this.name=name;
     }
     start(){
        console.log(`name of the car: ${this.name}`);
     }
}
bmw= new Car(620, 'Sports Edition');
bmw.start();


//7. how to implement class inheritence in javascript?

class Car{
     constructor(model,name){
        this.model=model;
        this.name=name;
     }
     start(){
        console.log(this.name);
     }
     end(){
        console.log("Car stopped");
     }
}   
class ElectricCar extends Car{
    dashboard(){
        console.log("Child method");
    }
    start(){
        super.start();
        super.end();
        this.dashboard();
    }
}
evCar=new ElectricCar('Tesla','A320');
evCar.start();


//8 how to find duplicate element in given array??

const duplicatedArray=[ 14,23,6,6,14,56,87,14];
const duplicates= duplicatedArray.filter((ele,index,arr)=>arr.indexOf(ele) !==index)
console.log(duplicates);

//9 how to find the count of duplicates in an array??

const months=['May', 'Feb', 'Feb', 'April', 'June', 'May', 'Feb', 'July', 'December'];
const countOfDuplicates= months.reduce((obj, month)=>{
    if(obj[month]==undefined){
        obj[month]=1;
        return obj;
    } else{
        obj[month]++;
        return obj;
    }
}, {});
console.log(countOfDuplicates);

//10 how to check if a given number is an integer??

const validateValue='ABC';
console.log(isNaN(validateValue));

//11 explain the difference between Object.freeze() and const??

let person={
    name:'ABC'
}
Object.freeze(person);  
person.name="Hello World";
console.log(person);


//12 how to sort a number array??

const unsortedArr= [10, 4, 29, 34, 63, 3, 87, 72];
const sortedArr= unsortedArr.sort((a,b) =>{
    return a - b;
});
console.log(sortedArr);


//13  how to sort a given array of strings??

const months=['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'];
console.log(months.sort());


//14  how to find a unique value in an array??

const Ids=[ 10, 4, 5, 65, 34, 23, 85, 10, 34, 10, 4,  5];
 const uniqueValues= Ids.filter((ele,index,arr)=>arr.indexOf(ele) ==index)
 console.log(uniqueValues);


//15  how to find a unique values from an array in sorted array??

const Ids=[ 23, 45, 64, 67, 23, 45, 98, 75, 69];
 const sorteduniqueValues= Ids.filter((ele,index,arr)=>arr.indexOf(ele) ==index)
 sorteduniqueValues.sort((a,b) =>{
        return a - b;
 });
  console.log(sorteduniqueValues);


//16  how to find maximum values in number array??

const numberArr=[5,45,154,163, 87, 72, 98, 12, 10];
function findMaxValue(arr){
    return arr.reduce(function(prev,curr){
        return prev > curr ? prev : curr;
    })
}
console.log(findMaxValue(numberArr));


//17  how to find minimum value in number array??

const studentIds=[10, 5, 7, 8, 13, 43, 75];
function findMinimum(arr){
    return arr.reduce(function(p , v){
        return p < v ? p : v;
    })
}
console.log(findMinimum(studentIds));


//18  how to find the avaerage of the numbers in the given number array??

const studentsIds=[59,53,23,1,67,84,10];
const totalCount= studentsIds.reduce((a,b)=>a +b,0);
const arrLength=studentsIds.length;
console.log(totalCount/arrLength);


//19  how can you uppercase the first character in string array???

const days=['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let updateDays=[];
for(let day of days){
    day=day.charAt(0).toUpperCase() + day.substring(1);
    updateDays.push(day);
}
console.log(updateDays);

//20  how to make a sentence out of a given array??

const elementsToJoin=["Welcome", "to", "Our", "Javascript", "Tutorials"];
var finalOutput= elementsToJoin.join(" ");
console.log(finalOutput);

//21  how to check if an array contains any element of another array??

const studentIds=[1,2,34,5,6,7,8];
const passedIds=[10,40,98,65];
let result=studentIds.some(ele=>passedIds.includes(ele));
console.log(result);

//22  given two strings, how can you check if the strings are anagram to each other??

const string1='Mary';
const string2='Army';
function checkAnagram(string1,string2) {
    var a=string1.toLowerCase();
    var b=string2.toLowerCase();

    a=a.split("").sort().join("");
    b=b.split("").sort().join("");

    return a === b;
}
console.log(checkAnagram(string1,string2));


//23  closures example

function Hello()
{
    var a=10;
    function innerFunction()
    {
        return a;
    }
    return innerFunction;
}
var inner=Hello();
console.dir(inner);

//or this

(function(x){
    return(function(y){
        console.log(x);
    })(2);
})(1);


//24  promises example

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});


//25  hosting example

function add(a, b){
    return a + b;
}

let x = 20,
    y = 10;

let result = add(x,y);
console.log(result);


//26  prototype javascript example

function Person() {
    this.name = 'John',
    this.age = 23
}

const person = new Person();

// // checking the prototype value
console.log(Person.prototype);


//27  prototype inheritence example

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// // creating objects
const person1 = new Person();
const person2 = new Person();

// // adding property to constructor function
Person.prototype.gender = 'male';

// // prototype value of Person
console.log(Person.prototype);

// // inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);


//28  add methods to an constructor function

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// // creating objects
const person1 = new Person();
const person2 = new Person();

// // adding a method to the constructor function
Person.prototype.greet = function() {
    console.log('hello' + ' ' +  this.name);
}

person1.greet(); 
person2.greet();


//29  javscript prototype chaining

function Person() {
    this.name = 'John'
}

// adding property 
Person.prototype.name = 'Peter';
Person.prototype.age = 23

const person1 = new Person();

console.log(person1.name); 
console.log(person1.age);


//30  javascript callback() example

// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
    myFunction(name);
}

// // callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);


//31 find factorial of a number using recursion

function  factorial(number){
    if(number === 0){
      return 1;
    }
    return number * factorial( number -1);
  }
  console.log(factorial(5));


//32  palindrome example

function isPalindrome(str){
    return str.split(' ')
    .reverse()
    .join(' ')===str
}
console.log(isPalindrome("edde"))


//33  maximum and minimum

function getMinMax(arr){
    return{
        min:Math.min(...arr),
        max:Math.max(...arr)
    }
}
console.log(getMinMax([1,10,2,9,3,7]));


//34  remove duplicates

function removeDuplicates(array){
    return[...new Set(array)]
}
const array=['Apple', 'Banana', 'Apple', 'Coconut', 'Mango', 'Banana']
console.log(removeDuplicates(array))


//35  reverse a string

function reverseString(str) {
    return str.split('')
      .reverse()
      .join('');
  }
  console.log(reverseString("Hello"))


//36  capitalize all words in sentence

function capitalize(sentence){
    return sentence
    .split(' ')
    .map(word => word[0].toUpperCase()+ word.slice(1))
    .join('')
}
console.log(capitalize("hi there!"))

