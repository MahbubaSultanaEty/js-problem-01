// check if a year is a leap year
// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400.

function leap(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } return false;
}

let thisYear = leap(2026);


let lastYear = 2024;
check = leap(lastYear);
console.log(check, thisYear);