/*
1. array.length (for length of the array)
2.array.push() (for adding element to array at the last,like append in python for list;if you assign a variable to it you can return it)
3. array.pop() (removes the last element from the array ; if you assing a varible to it , you can return it  )
4. typeof (ex: typeof 25,output is number)
5.alert() (gives allert on webpage)


TYPES IN JA (CHECK IN GOOGLE)
string and number will be same as python ; bool will be complete small letters(true,false);
object={};
symbol=symbol();
check complex number and there are 8 types

for loop in js, there are different types of for loop in js
1.for (iterator; condition; iteration) {
  logic;
}
2.for..of loop
for (const value of iterable) {

}
compare with python
for i in range x:
here value=i and x=iterable

varable.repeat()

creation of function
function x(y){}
x(z) (you should call the function like python)
x is function,y is variable

in python str+num raises error ,
but in js str + num gives strnum, it converts num to str
"nst"+27=nst27
"47"-37=10 it converts to num
"nst"-20 = NaN (means error)

72 is decimal
072 is octal
0101b if b is there in last then it is binary
// oxAB9 starting ox is there then it is
learn about complex num

round
Math.round() it rounds
Math.ceil()  it take nearst next int
Math.floor()  it take nearest previous int

random number
Math.random()
Math.floor(Math.random()*6)+1  // it starts from 1 to 6, 1 is included,6 is excluded , and Math.floor helps to get integer
Math.ceil(Math.random()) // it also gives integer
Math.round(Math.random()) // it also gives int
console.log(Math.floor((Math.random()*(max-min+1))+min)) // it prints number between range max and min
// check diif b/t these numbers

js f-strings
let x="pranav";
let y=`${x} hi`  // use backticks (`)
y= pranav hi

see string methods in js
string.includes()

diff b/w null and undifine
undifine is default value gives by js
null is gives by us

ex:
let x;
console.log(x) // it prints undifine

let x=null
console.log(x) // it prints null

falsy values and truthy values
check w3 schools,js type conversion table

typeof // check these inbuilt function

check operators in w3 schools
ARITHMETICS OPERATORS
COMERASION OPERATORS (===,==,=,!=,!==)
TYPE CONVERSION CHART
LOGICAL OPERATORS (&&,||,!)
bitwise operators

typeof null is object (it is error when created)
typeof undfined is undfined

getName() // used for get local variable to outside

check prototypes (Number methods)

.toString // used to convert string

x.toFxied(n) // converts number to a string and round off by n,if empty then intger
x.toPrecision() // it gives number of digits we want and it will round off the number

console.log(x.toString().length)
console.log(typeof x.string().length)
.abs() // Math.abs() absolute value , for null = 0,for string is NaN
x.min() // console.log(x.min(1,2,34)) gives min value
x.max()
console.log(x.toString) // it converts to function with parameter x and function name as toString


let x=100;
console.log(++x) prints 101 val;ue is 101
console.log(x++) prints 100 but value changes to 101, just it stores the value

switch
let a=2;
switch(a){
  case 1:
    console.log(1)
  case 2:
    console.log(2)}
  case 3:
    console.log(3)}
  defualt:
    console.log("dsc")}
// it prints 2,3 and dsc in new lines

if (5<2){
    console.log(5)
} else {
    console.log(2)
}
switch and if-else check in w3 school

terminaory operator
let isEven = x%2==0 ? true : false

loops:
for loop

for (let i=0;i<10;i++){
console.log(i)

}
for off
for in check them
while loop
two types of whiles are there
while(){}
do{}while

terniory operator it is shortcut off if , else operator
ex:
(a>1000) ? console.log("a") :console.log("b")

if else vs switch case
if (a>12000){
  console.log(a)}
else {
console.log(b)}

switch (true){
case (a>12000):
  console.log(a)
  break;
default{
  console.log(b)}}

  object==dict in python

funcion in js
arrow function
div: (a,b) => a*b;

Math.Pow(x,3)

in if codition "false" gives true; booolen false will not exucte the condition
if (false){}
if ("false"){}
if (""){}

if the string is empty then the condition is false so if condition will not exucte

.unshift() // it is like .push() but it adds element at the starting of arrya
if assigin a varaible to it , when you do consolelog it will give length of the updaed arrya

.shift() // it is like .pop() but removes first element of arrya,
and you can decalere to varable and print the deleted value

"100"+1=1001 //bug
"100"-1=99 //bug
100+1=101
"2" - "2" = 0

first browser NETSCAPE WITH HTML AND CSS
Brnan Eich created JS in 10 days

Variable in js will store data

//object is non-premitive and remaing all data types are premitive
// null // x= null data type , to keep intentional empty, where undife we just leave like (let x;)
symbol("cb")

falsey experssions:
false,0,NaN,undeined,Null,empty string""/"


*/
// const x = 123;
// console.log(x.toString())
//.includes()  //str.includes("word") prints true or false,//str.includes("java",5) search starts from index 5

//.indexOf() //gives index , if word is not present in str prints -1 // str.indexOf("java",5) search starts from index 5
//.replace() // str.replace("word","js")
// .trim()  // removes spaces at start and end of string
//isNaN() // you check same like typeof (isNan(42)) // for string it gives true , for numbers and infinite it gives false

// operators and (&&),or (||),Not(!)

// break and continue

// for (let i in books){console.log(books[i])}
// for (let book of books){console.log(book)}
