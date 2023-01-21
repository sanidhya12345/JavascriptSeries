let answer=document.getElementById("answer");

//Exercise Level-1:-
//1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge='30 Days of JavaScript'

//2.Print the string on the browser console using console.log()

console.log(challenge)


//3.Print the string on the browser console using console.log()

console.log(challenge.length)

//4.Change all the string characters to capital letters using toUpperCase() method

console.log(challenge.toUpperCase())

//5.Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase())

//6.Cut (slice) out the first word of the string using substr() or substring() method

console.log(challenge.substr(0,2))
console.log(challenge.substring(0,3))

//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(challenge.substring(3))

//8.Check if the string contains a word Script using includes() method

console.log(challenge.includes('Script'))

//9.Split the string into an array using split() method

console.log(challenge.split())

//10.Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(' '))

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let vari='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(vari.split(', '))

//12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(challenge.replace('JavaScript','Python'))

//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15))

//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(challenge.charCodeAt(12))

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(challenge.indexOf('a'))

//16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(challenge.lastIndexOf('a'))

//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let v='You cannot end a sentence with because because because is a conjunction'

console.log(v.indexOf('because'))

//18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(v.lastIndexOf('because'))

//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(v.search('because'))

//20.Use trim() to remove any trailing whitespace at the beginning and the end of a string

console.log(str.trim())

//21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.startsWith('3'))

//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.endsWith('Script'))

//23.Use match() method to find all the a’s in 30 Days Of JavaScript

console.log(challenge.match('a'))

//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

console.log('30 Days','JavaScript')

//25.Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2))

//Exercise Level-2:-

//1.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let h='10'
let g=10

console.log(typeof(parseInt(h))==typeof(g))

//2.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(parseFloat(Math.ceil(9.8))==parseFloat(10))

//3.Check if 'on' is found in both python and jargon

console.log('python'.includes('on') && 'jargon'.includes('on'))

//4.I hope this course is not full of jargon. Check if jargon is in the sentence

let sentence='I hope this course is not full of jargon'

console.log(sentence.includes('jargon'))

//5.Generate a random number between 0 and 100 inclusively

console.log(Math.random()*100)

//6.Generate a random number between 50 and 100 inclusively.

console.log(Math.random()*51+50)

//7.Generate a random number between 0 and 255 inclusively.

console.log(Math.random()*256)

//8.Access the 'JavaScript' string characters using a random number.

let c='JavaScript'
console.log(c[Math.floor((Math.random()*10))])


//Exercise Level-3:-

//1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sen='Love is the best thing in this world. Some found their love and some are still looking for their love.' 
let pattern=/love/gi
console.log(sen.match(pattern).length)

//2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let q='You cannot end a sentence with because because because is a conjunction'
let pat=/because/gi
console.log(q.match(pat).length)

//3.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let r='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let p=/\d+/gi

console.log(parseInt(r.match(p)[0])+parseInt(r.match(p)[1])+parseInt(r.match(p)[2]))