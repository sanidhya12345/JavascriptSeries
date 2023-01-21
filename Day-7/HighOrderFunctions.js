//Exercise Level-1:-

//1.Define a callback function before you use it in forEach, map, filter or reduce.

function callback(){

}

//2.Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

countries.forEach((item)=>console.log(item))

//3.Use forEach to console.log each name in the names array.

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

names.forEach(function(name){
    console.log(name)
})

//4.Use forEach to console.log each number in the numbers array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach((num)=>{console.log(num)})

//5.Use map to create a new array by changing each country to uppercase in the countries array.

const newCountriesArray=countries.map((value)=>value.toUpperCase())
console.log(newCountriesArray)

//6.Use map to create an array of countries length from countries array.

console.log(countries.map((con)=>con.length))


//7.Use map to create a new array by changing each number to square in the numbers array

console.log(numbers.map(function(num){
    return num*num;
}))

//8.Use map to change to each name to uppercase in the names array

const newArrayValue=names.map((value)=>value.toUpperCase())
console.log(newArrayValue)

//9.Use map to map the products array to its corresponding prices.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

const newProArray=products.map(function(value){
    return value;
})
console.log(newProArray)

//10.Use filter to filter out countries containing land.

console.log(countries.filter((value)=>value.toLowerCase().includes('land')))

//11.Use filter to filter out countries having six character.

console.log(countries.filter(function(item){
    return item.length==6;
}))

//12.Use filter to filter out countries containing six letters and more in the country array.

console.log(countries.filter(function(item){
    return item.length>=6;
}))

//13.Use filter to filter out country start with 'E';

console.log(countries.filter(function(item){
    return item.startsWith('E');
}))

//14.Use filter to filter out only prices with values

console.log(products.filter((item)=>item.price.length!=0 && item.price.length!=1))

//15.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(array){
    return array.filter((item)=>typeof(item)=='string')
}

const array=[1,'sanidhya','varshney','apple',{age:21,phone:98653424},2,3,4,65]
console.log(getStringLists(array))

//16.Use reduce to sum all the numbers in the numbers array.

console.log(numbers.reduce((acc,cur)=>acc+cur,0))

//17.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const answer=countries.reduce(function(acc,curr){
    return acc+','+curr;
},'Estonia')

console.log(answer+'are north European countries')

//18.Use some to check if some names' length greater than seven in names array

console.log(names.some((name)=>name.length>7))

//19.Use every to check if all the countries contain the word land

console.log(countries.every((con)=>con.includes('land')))

//20.Use find to find the first country containing only six letters in the countries array

console.log(countries.find((con)=>con.length==6))

//21.Use findIndex to find the position of the first country containing only six letters in the countries array

console.log(countries.findIndex((con)=>con.length==6))


//22.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

console.log(countries.includes('Norway')?countries.findIndex((con)=>con=='Norway'):-1)

//23.Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

console.log(countries.includes('Russia')?countries.findIndex((con)=>con=='Russia'):-1)

//Exercises: Level 2:-

//1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const totalPrice=products.filter((item)=>item.price.length!=0 && item.price.length!=1).reduce((acc,curr)=>acc+curr.price,0)
console.log(totalPrice)