// Björn owns a small company with 6 employees. He has decided to give a gift for the most secure password in the company, given the following rules:

// A password s is valid only if:

// - its length is 8 <= s <= 15
// - it contains at least one number
// - it contains at least one upper-case character
// - it doesn't contain any space

// He attributes points like this:

// - each space char gives 0 point
// - each upper-case char gives 10 points
// - each lower-case char gives 5 points
// - each number gives only 1 point
// - every other char (like " ! . , & - @) gives 25 points.

// For example, !Bash&234a.r, ====> returns True, 138 where 138 is the sum of the points of each char.


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const pass = 'blAOueaoeua9';

let test = {upper: /[A-Z]/g, lower: /[a-z]/g, spa: /\s/g, num: /\d/g, other: /!.,&-@/g}
let score = {upper: 10, lower: 5, spa: 0, num: 1 , other: 25}

let sol = 0;
let eval = (pass) => {
    if(pass.length >= 8 && pass.length <= 25){
        sol = Object.keys(test).map(x => pass.match(test[x])?.length);
    }
    if(sol[2] >= 1){
        return 'No valid password';
    }
    sol = sol.map(x => Number.isInteger(x)? x : 0);
    console.log(sol)
    sol = sol.reduce((acu, x, i) => x * Object.values(score)[i] + acu, 0);

    return sol;
}

console.log(eval(pass));



