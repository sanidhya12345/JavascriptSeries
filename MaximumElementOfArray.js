const array=[2,3,4,5,890,2234,170,2882,654]

let maximum=(array)=>{
    let max=array[0]
    for(element of array){
        if(max<element){
            max=element;
        }
    }
    return max;
}
console.log(maximum(array))