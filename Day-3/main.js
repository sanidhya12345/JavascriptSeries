import {countries} from './countries.js'
import { webTechs } from './webTechs.js'

//Exercise Level-1

//1.Declare an empty array;

const arr=Array()

//2.Declare an array with more than 5 number of elements

const nums=[1,2,3,4,5,6]

//3.Find the length of your array

console.log(nums.length)

//4.Get the first item, the middle item and the last item of the array

console.log('first item',nums[0])
console.log('middle item',nums[nums.length/2])
console.log('last item',nums[nums.length-1])


//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes=[
    'sanidhya',
    true,
    123,
    {country:'India'},
    NaN,
    undefined,
]
console.log(mixedDataTypes.length)

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle','Amazon']

//7.Print the array using console.log()

console.log(itCompanies)

//8.Print the number of companies in the array

console.log('number of companies',itCompanies.length)

//9.Change each company name to uppercase one by one and print them out.

itCompanies[0]=itCompanies[0].toUpperCase()
itCompanies[1]=itCompanies[1].toUpperCase()
itCompanies[2]=itCompanies[2].toUpperCase()
itCompanies[3]=itCompanies[3].toUpperCase()
itCompanies[4]=itCompanies[4].toUpperCase()
itCompanies[5]=itCompanies[5].toUpperCase()
itCompanies[6]=itCompanies[6].toUpperCase()

console.log(itCompanies)

//10. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(itCompanies.toString(),'are big IT companies')

//11.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

itCompanies.includes('AMAZON')?console.log(itCompanies[itCompanies.indexOf('AMAZON')]): console.log('not found')

//12.Filter out companies which have more than one 'o' without the filter method

for(let i=0;i<itCompanies.length;i++){

    if(itCompanies[i].split('O').length%2!=0 && itCompanies[i].includes('O')){
        console.log(itCompanies[i])
    }
}

//Exercise Level-2:-

//1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

console.log(countries)
console.log(webTechs)