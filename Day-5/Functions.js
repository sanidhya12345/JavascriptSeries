//Exercise Level-1

//1.Declare a function fullName and it print out your full name.

function fullName(){
    let first='sanidhya';
    let last='varshney';
    let fullname=first+' '+last
    console.log(fullname)
}
fullName()

//2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstname,lastname){
    return firstname+' '+lastname
}

console.log(fullName('sanidhya','varshney'))

//3.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle=(length,breadth)=>{
    return length*breadth
}
console.log(areaOfRectangle(20,30))

//4.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

const calculateBMI=(weight,height)=>{
    return (weight/height**2)*10000;
}
function checkBMI(indexvalue){
    if(indexvalue<18.5){
        console.log("UnderWeight")
    }
    else if(indexvalue>=18.5 && indexvalue<=24.9){
        console.log("Normal")
    }
    else if(indexvalue>=25 && indexvalue<=29.9){
        console.log("OverWeight")
    }
    else if(indexvalue>=30){
        console.log("Obesity")
    }
}
let weight=prompt('Enter your weight in kg')
let height=prompt('Enter your height in meter')
let index=calculateBMI(weight,height)
checkBMI(index)
console.log(index)

//5.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a,b,c){

    if(a>b || a>c){
        return a;
    }
    else if(b>a || b>c){
        return b;
    }
    else{
        return c;
    }
}
console.log(findMax(0,-10,-2))

//6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr){
    let array=Array();
    for(let i=arr.length-1;i>=0;i--){
        array.push(arr[i])
    }
    return array;
}
console.log(reverseArray([1,2,3,4,5]))

//7.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let numbers=[1,2,3,4,5]
console.log("Before Array:- ",numbers)
function addItem(item,numbers){
    numbers.push(item)
    return numbers
}
console.log("After Array:- ",addItem(6,numbers))

//8.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

function evensAndOdds(number){
    let sumeven=0;
    let sumodd=0;
    for(let i=0;i<=number;i++){
        i%2==0?sumeven++:sumodd++;
    }
    console.log("The number of odds are",sumodd)
    console.log("The number of even are",sumeven)
}
let n=prompt("Enter the number:- ")
evensAndOdds(n)

//9.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator(){
    let characters='0123456789abcdef'
    let answer=''
    let length=characters.length;
    for(let i=0;i<6;i++){
        answer+=characters.charAt(Math.floor(Math.random()*length))
    }
    return answer
}
console.log(`#${randomHexaNumberGenerator()}`)

//10.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGenerator(){
    let string="abcedfghijklmnopqrstuvwxyz"
    let lengthofstring=string.length
    let numberOfChars=prompt("Enter number of characters")
    let numberOfIds=prompt("Enter number of ids")
    for(let j=0;j<numberOfIds;j++){
        let result=''
        for(let i=0;i<=Math.floor(numberOfChars/2);i++){
            if(i!=Math.floor(numberOfChars/2)){
                result+=Math.floor(Math.random()*10)+string.charAt(Math.floor(Math.random()*lengthofstring))
            }
            else{
                result+=string.charAt(Math.floor(Math.random()*lengthofstring))
            }
        }
        console.log(result)
    }
}
userIdGenerator()

//11.Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
    const a=[]
    for(let i=0;i<3;i++){
        a.push(Math.floor(Math.random()*256))
    }
    return `rgb(${a[0]},${a[1]},${a[2]})`
}
console.log(rgbColorGenerator())


//12.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb(){
    let hexavalue=randomHexaNumberGenerator()
    var rgbhex=hexavalue.match(/.{1,2}/g)
    var argb=[parseInt(rgbhex[0],16),parseInt(rgbhex[1],16),parseInt(rgbhex[2],16)]
    return argb;
}
console.log(convertHexaToRgb())

//13.Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(type,numberofcolors){
    let hex=[]
    let rgb=[]
    if(type==='hexa'){
        for(let i=0;i<numberofcolors;i++){
            hex.push(`#${randomHexaNumberGenerator()}`)
        }
        return hex
    }
    else if(type==='rgb'){
        for(let i=0;i<numberofcolors;i++){
            rgb.push(rgbColorGenerator())
        }
        return rgb
    }
}
console.log(generateColors('hexa',3))
console.log(generateColors('rgb',3))