// Permutacion y combinaciones | Permutations and Combinations
// Cuantos numeros pueden ser formados con una serie de 4 numeros 
// para crear un nuevo numero de 3 digitos

// Si esos numeros se pueden repetir 
// (tamano de la serie) * (tamano de la serie) * (tamano de la serie)
// ( numero de numeros en la serie  ^ numero de digitos )

let serie_n = [1, 2, 3];  // Serie de numeros
let numero_digitos = 3;   // Tamano del numero final

// Para una serie de 3 numeros distintos para crear un numero de 3 digitos
console.log(Math.pow(3, 3)) // -> 27		Combinaciones distintas
// Para una serie de 4 numeros distintos para crear un numero de 7 digitos
console.log(Math.pow(4, 7)) // -> 16384 	Combinaciones distintas


// Repeticion no permitida
serie_n = [1, 2, 3];  // Serie de numeros
numero_digitos = 3;   // Tamano del numero final

// Para una serie de 3 numeros distintos para crear un numero de 3 digitos
console.log(3*2*1);	  // 6 combinaciones distintas		
// Para una serie de 5 numeros distintos para crear un numero de 3 digitos
console.log(5*4*3)	  // 60

// (tamano de la serie) * (tamano de la serie - 1) * (tamano de la serie - 1)o
// (4)*(3)*(2) = 24 
// Por definicion 
// Un numero que no repita numeros,
// NO puede tener mas digitos que el tamano de la serie de numeros


// Repetir y no repetir
// Ejem una serie de numeros 1,2,3,4,5,6, cuantos numeros de 3 digits pueden hacerse si solo
// se pueden tener numeros pares(que terminen en 2,4,6)
// como los primeros 2 digitos se pueden repetir si mayor problema se multiplican normalmente
// pero como los ultimos 3 digitos solo pueden ser 2,4,6 entonces se reduncen a solo 3
// (6)*(6)*(3)



//







