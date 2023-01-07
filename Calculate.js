let num1=document.getElementById("id1");
let num2=document.getElementById("id2");
let ans=document.getElementById("answer");
function Multiply(){
    ans.innerHTML=`The result is :- ${num1.value*num2.value}`
    num1.value="";
    num2.value=""
}

function Divide(){
    ans.innerHTML=`The result is :- ${num1.value/num2.value}`
    num1.value="";
    num2.value=""
}