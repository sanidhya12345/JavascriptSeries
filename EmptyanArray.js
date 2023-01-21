const array=[1,2,3,4,5,6,7,8,9]

let empty=(array)=>{
    while(!isEmpty(array)){
        array.pop();
    }
    console.log(array)
}

function isEmpty(array){
    return array.length==0;
}

empty(array);