/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
*/

/**
 * 1. put odd numbers in an array
*/
function odd_avg(arr) {
    let oddArr = [];
    for (let num of arr) {
        // console.log(num)
        if (num % 2 !== 0) {
            oddArr.push(num);
        }
    }
        let oddSum = 0; 
        for (let oddNum of oddArr) {
            oddSum += oddNum;
        }
    let result = oddSum / oddArr.length;
    console.log(result.toFixed(2));
}
let arr = [23, 45, 56, 46, 51];
odd_avg(arr);