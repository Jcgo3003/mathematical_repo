// Recibiendo dos filas de numeros  0 1 0 
// hacer la operacion or

let n1 = "001";
let n2 = "011";

for(let x in n1){

    process.stdout.write(`${parseInt(n1[x]) || parseInt(n2[x])}`)
    // process.stdout.write(`${n1[x] || n2[x]}`)
}
