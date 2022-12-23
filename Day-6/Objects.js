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

//2.Count logged in users, count users having greater than equal to 50 points from the following object.

let countLoggedInUsers=0;
for(let i=0;i<Object.keys(users).length;i++){
   if(users[`${arr[i]}`].isLoggedIn==true && users[`${arr[i]}`].points>=50){
     countLoggedInUsers++;
   }
}
console.log(countLoggedInUsers)

//3.Find people who are MERN stack developer from the users object

for(let i=0;i<Object.keys(users).length;i++){
   if(users[`${arr[i]}`].skills.includes('MongoDB') && users[`${arr[i]}`].skills.includes('Node') && users[`${arr[i]}`].skills.includes('Express') && users[`${arr[i]}`].skills.includes('React') ){
      console.log(arr[i])
   }
}

//4.Set your name in the users object without modifying the original users object

const copyUsers=Object.assign({},users)
copyUsers.sanidhya={
   email:'sanidhya@gmail.com',
   skills:['HTML','CSS','JS','Python','Java'],
   age:21,
   isLoggedIn:true,
   points:50
}
console.log(copyUsers)

//Exercise Level-3:-

const userss = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(){
  let email=prompt("Enter your email")
  for(let i=0;i<userss.length;i++){
      if(userss[i].email==email){
        alert('You have already an account,Re-enter mail or password')
        email=prompt("Enter your mail")
      }}
      let password=prompt("Enter your password")
       let name=prompt('Enter your name')
        let id=randomIdGenerator()
        
        let createdAt=new Date().getFullYear()
        let isloggedin=true
        let newUser={}
        newUser._id=id
        newUser.username=name
        newUser.email=email
        newUser.password=password
        newUser.createdAt=createdAt
        newUser.isLoggedIn=isloggedin
        userss.push(newUser)
  console.log(userss)
}
function randomIdGenerator(){
   let string="abcedfghijklmnopqrstuvwxyz"
   let result=''
   let lengthofstring=string.length

   for(let i=0;i<3;i++){
     if(i!=2){
        result+=Math.floor(Math.random()*10)+string.charAt(Math.floor(Math.random()*lengthofstring))
      }
     else{
        result+=string.charAt(Math.floor(Math.random()*lengthofstring))+string.charAt(Math.floor(Math.random()*lengthofstring))
      }
    }
    return result;
}
signUp()