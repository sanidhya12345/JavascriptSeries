let str="sanidhyavarshney";

let arr=str.split('')

var start=0;
var end=arr.length-1;

while(start<=end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr)