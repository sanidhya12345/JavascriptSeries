//Exercise Level-1:-

//1.Iterate 0 to 10 using for loop, do the same using while and do while loop

//for loop:-

// for(let i=0;i<=10;i++){
//     console.log(i)
// }

//while loop:-

// let i=0;
// while(i<=10){
//     console.log(i)
//     i++;
// }

//do-while loop:-
// let k=0;
// do{
//     console.log(k)
//     k++;
// }
// while(k<=10)

//2.Iterate 0 to n using for loop

// let n=prompt('Enter the value of n')
// for(let i=0;i<n;i++){
//     console.log(i)
// }

//3.Write a loop that makes the following pattern using console.log():

/**
 *  #
    ##
    ###
    ####
    #####
    ######
    #######
 */

// let string="";
// for(let i=0;i<7;i++){
//     for(let j=0;j<i+1;j++){
//         string+='#';
//     }
//     string+='\n';
// }
// console.log(string)


//4.Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for(let i=0;i<=10;i++){
//     console.log(i+" x "+i+" = "+i*i)
// }


//5.Use for loop to iterate from 0 to 100 and print only even numbers

for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}

//6.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

const array=Array();

let sumeven=0;
let sumodd=0;

for(let i=0;i<=100;i++){
    if(i%2==0){
        sumeven+=i;
    }
    else{
        sumodd+=i;
    }
}
array.push(sumeven)
array.push(sumodd)
console.log(array)

//7.Develop a small script which generate array of 5 random numbers
const arr=[]
for(let i=1;i<=6;i++){
    arr.push(Math.random())
}
console.log(arr)

//8.Develop a small script which generate a six characters random id:
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
console.log(result)

//9.Write a script which generates a random rgb color number.

const a=[]
for(let i=0;i<3;i++){
    a.push(Math.floor(Math.random()*256))
}
console.log(`rgb(${a[0]},${a[1]},${a[2]})`)

//10.Write a script which generates a random hexadecimal number.

let characters='0123456789abcdef'

let answer=''
let length=characters.length;

for(let i=0;i<7;i++){
    answer+=characters.charAt(Math.floor(Math.random()*length))
}
console.log(answer)
