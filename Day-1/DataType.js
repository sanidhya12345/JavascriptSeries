let ans=document.getElementById("answer");

//Prmitive DataTypes:-


let word="sanidhya";

word[0]="S"

ans.innerHTML=word;

let num1=2;
let num2=2;

ans.innerHTML=(num1==num2);

let a="java"
let b="python"

ans.innerHTML=(a==b)

//Non-primitive data types

let nums=[1,2,3]

nums[0]=10

ans.innerHTML=nums;

//if we want to compare non primitive data type with non primitive then it will not compared because they can only be compared with the reference of both.

let array=[1,2,3]

ans.innerHTML=(nums==array)

let numbers=nums

ans.innerHTML=(nums==numbers)

let userOne={

    name:'sanidhya',
    branch:'cse',
    country:'India'
}

let user=userOne;

ans.innerHTML=(user==userOne)


// Numbers:-

//1. Declaring Number Data Types:-

let age=20
const gravity =9.80
let mass=71

console.log(age,gravity,mass);

//2. Math Object.

const PI=Math.PI;

console.log(PI);
console.log(Math.round(PI)) // round to nearest number
console.log(Math.round(gravity))

console.log(Math.floor(PI)) // rounding down

console.log(Math.ceil(PI)) // rounding up

console.log(Math.min(-5,-3,0,1,2,3,4)) //minimum value
console.log(Math.max(5,6,200,19,23,34)) //maximum value

const rand=Math.random() //creates random number between 0 to 0.999
console.log(rand)

console.log(Math.abs(-10))

console.log(Math.sqrt(100))

console.log(Math.sqrt(2))

console.log(Math.pow(3,2))

//Returns the natural logarithm with base E of x ,Math.log(x)
console.log(Math.log(2))
console.log(Math.log(10))

//Returns the natural logarithm of 2 and 10 respectively

console.log(Math.LN2)
console.log(Math.LN10)

//Trignometry

console.log(Math.sin(90))
console.log(Math.cos(60))

//Strings:-Strings are texts, which are under single , double, back-tick quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote.

let space=' '//empty string
let firstName='Sanidhya'
let lastName='Varshney'
let country='India'
let city='Aligarh'
let language='Javascript'
let job='Engineering Student'

//String Concatenation:-


let fullName=firstName+space+lastName;
console.log(fullName) // Sanidhya Varshney

//Template Literals:-
//To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign.

console.log(`The sum of 2 and 3 is 5`)

let val1=2;
let val2=3;
console.log(`The sum of ${val1} and ${val2} is ${val1+val2}`)

//String Methods:-

//1.length:- returns the length of string.

console.log(firstName.length)

//2.Accessing characters of a string.

let string="Javascript"

console.log(string[0])

let lastIndex=string.length-1;

console.log(string[lastIndex])

//3.toUpperCase():- changes the string into uppercase letters

let first=firstName.toUpperCase();
console.log(first)

//4.toLowerCase():- changes the string into lowercase letters.

let lower=first.toLowerCase();
console.log(lower)

//5.substr():- it takes two arguments, the starting index and the number of characters to slice.

let variable='Javascript'

console.log(variable.substr(4,6))

//6.substring():- It takes two arguments ,the starting index and the stopping index but it does not include the character at the stopping index.

console.log(variable.substring(0,4)) // Java

//7.split():- splits the string at a specified place.

let s="sanidhya varshney"
console.log(s.split())
console.log(s.split(' '))

console.log(firstName.split(''))

//8.trim():-Removes the trailing space in the beginning or the end of a string.

let str="   sanidhya varshney     ";

console.log(str.trim(' '))

//9.inclues():-It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

let val="JavaScript Series is start"

console.log(val.includes('start')) //truue
console.log(val.includes('Start')) //false
console.log(val.includes('Java')) //true

//10.replace():-takes as a parameter the old substring and a new substring.

console.log(val.replace('Series','series'))

//11.charAt():- it takes index and the returns the value at that particular index

console.log(val.charAt(7))

//12.charCodeAt():- takes index and returns the ASCII code of the character at particular index.

console.log(val.charCodeAt(3))

//13.indexOf():- Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

console.log(val.indexOf('Series'))

//14.lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

console.log(val.lastIndexOf('Series'))

//15.concat():-it takes many substrings and joins them

console.log(firstName.toLowerCase().concat(" varshney"))

//16.startsWith():- it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

console.log(val.startsWith('Java'))

//17.endsWith():-it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false)

console.log(val.endsWith('is')) //false
console.log(val.endsWith('start'))// true


//18.search():-it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

console.log(val.search('start'))

//19.match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive


let t = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(t.match(patternOne))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]


//20.repeat(): it takes a number as argument and it returns the repeated version of the string.

console.log(val.repeat(10))
