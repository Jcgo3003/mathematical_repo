// 5 dados de 6 caras
// Cada ronda va de 3 tiradas de estos 5 dados
// Puedes elegir si quieres seguir tirando o no despues del primer tiro o segundo -- NO IMPORTA
const dice = () => Math.floor(Math.random() * 6 + 1);
// console.log(dice());

// Revisar si el contenido numerico de un tiro contiene una 
// Escalera si al menos 4 dados  tienen una secuencia 
// (e.g. 1,2,3,4 or 2,3,4,5 or 6,5,4,3).
let roll1 = [1, 2, 3, 4, 6]; // Revisar si esta secuencia tiene escalera

let roll2 = [2, 3, 4, 5, 1];
let roll3 = [3, 4, 5, 6, 2];

let n1 = roll1[0], n2 = roll1[3];

let min = Math.min(n1, n2);
let max = Math.max(n1, n2);

let total =  4 * ((n1 + n2)/2);

console.log(total)
let sl1 = roll1.slice(0,4).reduce((acu,x) => x+acu, 0);
console.log(sl1);

let sl2 = roll1.slice(1,6).reduce((acu,x) => x+acu, 0);
console.log(sl2);

// if(total == sl1 || total == sl2){
// 	console.log('Escalera');
// }


// Creando una funcion final que reciba una lista con x cantidad de elementos
// Y verifique si en esa lista de elementos secuenciales, hay una escalera de
// 4 elemento

const escalera = arr => {
	let total = [], min = 0, max = 0;
	let lista = [], p1 = 0, p2 = 0;


	for(var i = 0; i < arr.length - 4; i++){
		p1 = i;
		p2 = p1 + 4;
		
		lista.push(arr.slice(p1, p2).reduce((acu,x) => x+acu, 0));

		min = Math.min(arr[p1], arr[p2]);
		max = Math.max(arr[p1], arr[p2]);
		
		total.push(4 * (min + max/ 2));
	}


	return lista.some(x => total.indexOf(x) != -1);
}
arr = [ 6, 5, 4, 3, 2, 1 ];

console.log(escalera(arr));





