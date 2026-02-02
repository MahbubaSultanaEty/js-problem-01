/* 
if an  array has same items ,keep that item only for once . remove the duplicate numbers 
*/

function duplicate(arr) {
    const unique = [];
    for (let item of arr) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    } console.log(unique);
}

let friends = ["mamun", "shumon", "mamun", "babul", "bulbul", "babul"];
duplicate(friends);