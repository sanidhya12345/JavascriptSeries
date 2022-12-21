//Exercise Level-1

//1.Declare a function fullName and it print out your full name.

// function fullName(){
//     let first='sanidhya';
//     let last='varshney';
//     let fullname=first+' '+last
//     console.log(fullname)
// }
// fullName()

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

// const calculateBMI=(weight,height)=>{
//     return (weight/height**2)*10000;
// }
// function checkBMI(indexvalue){
//     if(indexvalue<18.5){
//         console.log("UnderWeight")
//     }
//     else if(indexvalue>=18.5 && indexvalue<=24.9){
//         console.log("Normal")
//     }
//     else if(indexvalue>=25 && indexvalue<=29.9){
//         console.log("OverWeight")
//     }
//     else if(indexvalue>=30){
//         console.log("Obesity")
//     }
// }
// let weight=prompt('Enter your weight in kg')
// let height=prompt('Enter your height in meter')
// let index=calculateBMI(weight,height)
// checkBMI(index)
// console.log(index)

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