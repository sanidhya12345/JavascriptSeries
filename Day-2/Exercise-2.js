//Exercise Level-1

//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.


let firstName="Sanidhya";
let lastName="Varshney";
let country="India"
let city="Aligarh"
let age=20
let isMarried=false

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))

//2.Check if type of '10' is equal to 10

console.log(typeof('10')==typeof(10))

//3.Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8')==10)

//4.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')

//Find the length of python and jargon and make a falsy comparison statement.

console.log('python'.length!='jargon'.length)

//5.Use the Date object to do the following activities

const n=new Date();
//1.what is the year today:-

console.log(n.getFullYear())

//2.What is the month today as a number?

console.log(n.getMonth()+1)

//3.What is  the date today?

console.log(n.getDate())

//4.What is the day today as a number?

console.log(n.getDay())

//5.What is the hours now?

console.log(n.getHours())

//6.What is the minutes now?

console.log(n.getMinutes())

//7.Find out the numbers of seconds elapsed from January 1, 1970 to now.

const allSeconds=Date.now()

console.log(allSeconds)



//Exercise Level-2:-

//1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

/*
Enter base: 20
Enter height: 10
The area of the triangle is 100

*/
let base=prompt('Enter Base')
let height=prompt('Enter height')

console.log("Area of triangle=",1/2*base*height)



//2.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x=prompt("Enter the value of x")
console.log(`the vaue of y is ${x**2+6*x+9}`)

//3.Compare your first name length and your family name length and you should get this output.

let first=prompt('Enter your first name')
let family=prompt('Enter your family name')

first.length>family.length? console.log(`Your first name, ${first} is longer than your family name, ${family}`)
: console.log('your name is short')

//4.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let birthYear=prompt("Enter your birth year")

const now=new Date();

const year=now.getFullYear();

year-birthYear>=18?console.log(`You are ${year-birthYear}.You are old enough to drive.`):
console.log(`You are ${year-birthYear}. You will be allowed to drive after ${18-(year-birthYear)} years.`)

