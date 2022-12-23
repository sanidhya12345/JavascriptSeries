//Exercise Level-1

//1.Create an empty object called dog

const dog={}

//2.Print the the dog object on the console

console.log(dog)

//3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name='spiky'
dog.legs=4
dog.color='brown'
dog.age='10 years'
dog.bark=function(){
    return 'woofwoof'
}
console.log(dog)

//4.Get name, legs, color, age and bark value from the dog object

console.log(dog.name)
console.log(dog['legs'])
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

//5.Set new properties the dog object: breed, getDogInfo

dog.breed='German'
dog.getDogInfo=function(){
    return `My dog name is ${this.name} of ${this.color} color.He has ${this.legs} legs.He is ${this.age} old.His Barking sound
    is ${dog.bark()}`
}
console.log(dog)


//Exercise Level-2:- 

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

//1.Find the person who has many skills in the users object.
let maxSkills=0;
let maxSkillsPerson=''
let arr=Object.keys(users)
for(let i=0;i<Object.keys(users).length;i++){
    if(maxSkills<users[`${arr[i]}`].skills.length){
        maxSkills=users[`${arr[i]}`].skills.length
        maxSkillsPerson=arr[i]
    }
}

console.log(maxSkillsPerson)