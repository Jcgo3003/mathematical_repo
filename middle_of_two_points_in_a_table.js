// Help Jack Goff find a seat in classroom which is at equal distance from 
// his friend Bob and crush Erica such that he's as near to them as possible.
// It is guaranteed that a seat always exist in middle of Bob and Erica, as 
// they are either sitting in the same row or same column or sitting diagonally to each other.
let rb = 1; // Row  Bob
let cb = 3; // colum Bob
let re = 3; // Row Erica
let ce = 1; // column Erica

rb = 1; // Row Bob 
cb = 9; // colum Bob
re = 10; // Row Erica
ce = 1; // column Erica

// Mal !!!!
// Row
let min_r = Math.min(rb, re); 
let max_r = Math.max(rb, re);

// Column
let min_c = Math.min(cb,ce);
let max_c = Math.max(cb,ce);

let sol = [Math.ceil(max_r/2), Math.ceil(max_c/2)];
console.log(sol.join(' '));

// solucion 
console.log((rb+re)/2,(cb+ce)/2)