//both array contains unique elements.

var array1=[1,2,3,4,5]
var array2=[1,2,7,4,5]

function compare(array1,array2){
    let count=0;
    for(element of array1){
        if(array2.includes(element)){
            count++;
        }
    }
    if(count==array1.length){
        return true;
    }
    return false;
}
console.log(compare(array1,array2));