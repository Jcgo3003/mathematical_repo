
let a = 98;		// Numero inicial
let b = 2;		// Salto
let c = 5;		// Columnas
let d = 3;		// Rows

column = 0;
for(var i=0; i < c*d; i++){

	process.stdout.write(`${a} `);
	a += b;
	column += 1;
	if(column == c){
		console.log('');
		column = 0;
	}
}
console.log('');

// 98 100 102 104 106 
// 108 110 112 114 116 
// 118 120 122 124 126 

////// utilizando formula de secuencia geometrica
// 

a = 98;
r = 2
let times = ((c * d) - 1 ) * 2; // Getting the final number 126

column = 0;
for(var i=a; i < a + times; i+= b){
	process.stdout.write(`${i} `);
	column += 1
	if(column == c){
		console.log('');
		column = 0;
	}
}
console.log('');

// 98 100 102 104 106 
// 108 110 112 114 116 
// 118 120 122 124 126 