// converting inches to feet
// formula: feet = inch / 12

function toFeet(inch) {
    const feet = parseInt(inch / 12);
    const remain = inch % 12;
    const result = feet + " ft " + remain + " inch";
    console.log(result);
}

toFeet(89);


// converting miles to kilometer
function toKm(mile){
    const km = parseInt(mile / 1.60934);
    const miles = parseInt(mile % 1.60934);
    return km + "km " + miles + " miles"; 
}
let distanceM = 124;
let miles = toKm(distanceM);
console.log(miles);