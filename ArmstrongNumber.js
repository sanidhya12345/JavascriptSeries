//check whether the number is armstrong or not.

var num=153;
var temp=num
function checkArmStrong(num){
    var sum=0;
    while(num!=0){
        var n=num%10;
        sum+=(n*n*n);
        num=parseInt(num/10);
    }
    if(temp==sum){
        console.log("It is an armstrong number")
    }
    else{
        console.log("It is not an armstrong number")
    }
}
checkArmStrong(num)