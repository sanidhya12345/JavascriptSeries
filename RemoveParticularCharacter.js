let str="helloworld";
let delcharacter="w"
let newstr=""
let arrayofstr=str.split('');
arrayofstr.splice(str.indexOf(delcharacter),1)
for(let i=0;i<arrayofstr.length;i++){
    newstr+=arrayofstr[i]
}
console.log(newstr)