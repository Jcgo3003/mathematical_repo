// Print 1 if the seesaw is in balance, 0 otherwise.
// Distance is the distance between the mass and 
// the fulcrum('A')
//
// w1 * d1 == w2 * d2.
// 
// 10kg      10kg
// |         |
// v         v
// ___________
//     A      

let seesaw = ['10kg      10kg', '|         |', '___________', '    A'];
// console.log(seesaw[0].split(' '));
let [a, b] = seesaw[0].match(/\d+/g);
let total_distance = seesaw[2].length;
let ful = seesaw[3].indexOf('A')+1;
let d1 = ful-1;
let d2 = total_distance - ful;
console.log(d1*a == d2*b? 1: 0);