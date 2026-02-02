// Swap variable , swap without Temp , destructing

// method 01 - using temp
let a = 8;
let b = 10;
const temp = a;
a = b;
b = temp;
console.log(a, b);

// method 02 without using temp but confusing 
let num = 12;
let num2 = 16;
 
num = num + num2;
num2 = num - num2;
num = num - num2;

// method 03 - easiest and cleanest one
let c = 23;
let d = 19;

[c, d] = [d, c];
console.log(c, d);