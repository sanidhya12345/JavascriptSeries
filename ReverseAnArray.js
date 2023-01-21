function reverse(arr){
    let newArray=Array();
    for(let i=arr.length-1;i>=0;i--){
       newArray.push(arr[i]);
    }
    return newArray;
}
const array=[1,2,3,4,5];
console.log(reverse(array));