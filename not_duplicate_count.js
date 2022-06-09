// let number = 12123;
let number = '112233445566778899';
let lista = number.split('');
let notDup = lista.filter((x, i) => lista.indexOf(x) == i)

let res = lista.reduce((acu,x) => x != lista[0]?  acu+1: acu+0,0 );

// console.log(res);

// Response
let count = 0;
let l = number[0];

for(var x of number.slice(1)){
    if (l !== x){
        count += 1;
    }
    l = x;
}
console.log(count);