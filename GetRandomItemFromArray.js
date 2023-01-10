const array=[1,2,3,4,5,6,7,8,9];

function getRandomItemFromArray(array){
    let index=Math.floor(Math.random()*array.length);
    return array[index];
}
console.log(getRandomItemFromArray(array))