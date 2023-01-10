var array=[1,2,3,4,5,6,7,8,89];
var deleteElement=3;

function removeSpecific(array,deleteElement){
    if(array.indexOf(deleteElement)==-1){
        console.log("Deletion is not performed");
    }
    for(let i=0;i<array.length;i++){
        if(array[i]==deleteElement){
            array[i]=0;
        }
    }
    for(let i=0;i<array.length-1;i++){
        if(array[i]==0){
            array[i]=array[i+1];
            array[i+1]=0;
        }
    }
    array.pop();
    console.log(array);
}
removeSpecific(array,deleteElement);