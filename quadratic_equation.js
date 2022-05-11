/// Calculando ecuaciones cuadraticas

let a = (3.711/2);
let b = 25;
let c = -2000;

let x1 = 0, x2 = 0, sol = 0;

let discriminant =  Math.pow(b, 2) - (4*a * c);
if(discriminant < 0 ){		// discriminant tiene que ser mayor que 0 si no hay solucion
	console.log('No hay solucion');
	sol = 'No hay solucion';
}
else{
	x1 = ( -(b) + Math.sqrt( discriminant ) ) / (2*a);
	x2 = ( -(b) - Math.sqrt( discriminant ) ) / (2*a);

	if(x1 === x2){
		console.log('Solucion unica');

		let comp = (Math.pow(x1, 2) * a) + (b*x1) + c;
		console.log(`x ${x1} Comp ${comp}`);
		sol = x1

	}else{
		console.log('Solucion Multiple');
		console.log(`x1 ${x1}   x2 ${x2}`);

		let comp1 = (Math.pow(x1, 2) * a) + (b*x1) + c;
		let comp2 = (Math.pow(x2, 2) * a) + (b*x2) + c;
		// console.log(`x1 ${x1} Comp ${comp1}`);
		// console.log(`x2 ${x2} Comp ${comp2}`);

		/// La respuesta que mas se acerque a 0 es la correta
		let res = Math.min(...[Math.abs(comp1), Math.abs(comp2)]);
		if( comp1 === res){
			sol = x1;
		}
		else{
			sol = x2;
		}
	}
}

console.log(`La solucion final es:`)
console.log(sol)





