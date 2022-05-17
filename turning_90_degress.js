// Imprimir la entrada 90 gradoso volteada en sentido 
// de las manesillas de relog
//       Entrada
//   # @        1 2 3
//   @ #        4 5 6
//              7 8 9
//
//       Salida
//   @ #        7 4 1
//   # @        8 5 6
//              9 6 3

// Entrada

// const N = parseInt(readline());
// for (let i = 0; i < N; i++) {
//     const line = readline();
//     lines.push(line.split(' '));
// }
// let lines = [['#', '@'], ['@','#']];
let lines = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let counter = 0;

while(counter < lines[0].length){ 
    for(var i = lines.length -1; i >= 0 ; i--){
        process.stdout.write(`${lines[i][counter]} `)
    }
        counter += 1;
        console.log('')
}