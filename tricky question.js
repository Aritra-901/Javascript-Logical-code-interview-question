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

