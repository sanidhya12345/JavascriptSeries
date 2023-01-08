// program to display the date and time
// get date and time
const date = new Date(2023, 1, 8, 5, 35, 30);

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);