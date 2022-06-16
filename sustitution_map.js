// 1000101    -> 1100111
// 0100111

let a = '1000101'.split('');
let b = '0100111'.split('');

let sol = a.map((x,i) => x=='0'&&b[i]=='1'? 1:x);
console.log(sol.join(''));