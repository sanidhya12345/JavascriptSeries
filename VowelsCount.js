const array=['a','e','i','o','u','A','E','I','O','U']
let string="sanidhya varshney"
var vowel=0;
for(let i=0;i<string.length;i++){
    if(array.includes(string[i])){
        vowel++;
    }
}
console.log(vowel)