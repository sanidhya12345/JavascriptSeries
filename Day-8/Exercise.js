//Exercise Level-1:-

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

//1.create an empty set

const set=new Set()

//2.Create a set containing 0 to 10 using loop

for(let i=0;i<10;i++){
    set.add(i);
}
console.log(set)

//3.Remove an element from a set
set.delete(9)

//4.Clear a set:-

set.clear()

//5.Create a set of 5 string elements from array

const array=['sanidhya','ashish','rohit','ramesh','suresh']

const name=new Set();

for(const n of array){
    name.add(n)
}
console.log(name)