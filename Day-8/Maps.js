//creating an empty map:-

const map=new Map()
console.log(map)

//creating an map from array:-

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
const map1=new Map(countries)
console.log(map1)
console.log(map1.size)

//Adding values to the Map:-

const countriesMap = new Map()
console.log(countriesMap.size)
countriesMap.set('Finland','Helinski')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

//Getting a value from Map:-

console.log(countriesMap.get('Finland'))

//Checking key in Map:-

console.log(countriesMap.has('Finland'))


//Getting all values from map using loop

for (const country of countriesMap) {
  console.log(country)
}

for (const [country, city] of countriesMap){
    console.log(country, city)
   }