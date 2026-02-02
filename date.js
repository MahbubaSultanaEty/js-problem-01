// date, time, year, month, day

const today = new Date(); //new Date() is built in method that outputs current date and time of the browsers local time.
console.log(today);

const date = new Date("2050-10-25");
console.log(date.getMonth());
console.log(date.getDate());

// changing date or month externally by using "set" method 
const specificDate = new Date("2034-11-21");

console.log(specificDate);
specificDate.setMonth(9);
specificDate.setDate(12);
console.log(specificDate);

// make the date a string
 console.log(specificDate.toLocaleString("en-GB")); // ("en-GB" outputs the date in great briten format)  as [day-month-yearThh-mm-ss]; 