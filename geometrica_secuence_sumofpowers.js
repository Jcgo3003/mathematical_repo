// Geometric Sequences - Suma de dobles /// Sum of first 10 powers of 2
// Un rey quiere repartir monedas de oro entre un numero N de personas
// En este numero de personas la persona siguiente
// obtiene el doble que la anterior
// 1 2 4 8 16 32 -
// Obtener la suma del numero de monedas que se 
// requiren para entregar a las personas
// Eje. N 3 = 1 + 2 + 4 
// N = 7 	- Requerira 7 monedas 
// --- Formula --- 
// Comon ratio es por que numero se va multiplicar el numero siguiene
// // 1 2 4 8 16 32 - En este caso es 2
// (numero comienzo - common ratio^ Numero de veces que ocurrira)/ -1

// Soluccion matematica
let N = 3; 						// 3 Personas
let sol = Math.pow(2, N) - 1	// 1 + 2 + 4  = 7 
console.log(sol);				// 7  	Es correcto!.

N = 6; 							// 3 Personas
sol = Math.pow(2, N) - 1		// 1 + 2 + 4 + 8 + 16 + 32 = 63
console.log(sol);				// 63  	Es correcto.

// Solucion loop
let start = 1;
let lista = [];
for(var i = 0; i < N; i++){
	lista.push(start);
	start *= 2;
}
console.log(lista.reduce((acu, x) => x+acu, 0)); // -> 63

// Referencia
// https://www.mathsisfun.com/algebra/sequences-sums-geometric.html