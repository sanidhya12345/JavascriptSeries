//creating an empty set.
const companies=new Set();
console.log(companies)

//creating set from array:-

const languages=[
    'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French'
]

const setOfLanguages=new Set(languages);
console.log(setOfLanguages)

//Iteration of sets:-

for(let language of setOfLanguages){
    console.log(language)
}

//Adding an element to the set:-

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size)
console.log(companies)

//Delete an element a set:-

console.log(companies.delete('Google'))
console.log(companies.size)

//Checking an element in the set:-

console.log(companies.has('Apple'))
console.log(companies.has('Facebook'))

//Clearing the set:-

companies.clear()
console.log(companies)

//Union of sets:-

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//Intersection of sets:-

let d=[1,2,3,4,5]
let e=[3,4,5,6]

let D=new Set(d)
let E=new Set(e)

let f=d.filter((num)=>E.has(num))
let F=new Set(f)
console.log(F)

//Difference of sets:-

let g=d.filter((num)=>!E.has(num))
let G=new Set(g);
console.log(G)