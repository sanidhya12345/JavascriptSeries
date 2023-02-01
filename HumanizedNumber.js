//Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanize(number) {
    if(number % 100 >= 11 && number % 100 <= 13)
        return number + "th";
    
    switch(number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    
    return number + "th";
}
console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));
