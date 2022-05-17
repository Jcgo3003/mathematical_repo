// Mostrar 'Yes' si los caracteres de word se pueden encontrar en una de las listas de abajo
// Mostrar 'No' si no es posible 
let word = 'qwerty';

let rg0 = /[`1234567890-=']/;
let rg1 = /[qwertyuiop\[\]\\]/; 
let rg2 = /[asdfghjkl;'"]/;
let rg3 = /[zxcvbnm,./]/;

let sol0 = [...  word].every(x => rg0.test(x));
let sol1 = [...  word].every(x => rg1.test(x));
let sol2 = [...  word].every(x => rg2.test(x));
let sol3 = [...  word].every(x => rg3.test(x));
 
if(sol0 == true || sol1 == true || sol2 == true || sol3 == true){
    console.log('Yes');
}else{
    console.log('No');
}

// Opcion matrices e indexOf
rg0 = '`1234567890-=';
rg1 = 'qwertyuiop[]\\'; 
rg2 = "[asdfghjkl;'";
rg3 = "zxcvbnm,./";

sol0 = [...  word].every(x => [...rg0].indexOf(x) != -1);
sol1 = [...  word].every(x => [...rg1].indexOf(x) != -1);
sol2 = [...  word].every(x => [...rg2].indexOf(x) != -1);
sol3 = [...  word].every(x => [...rg3].indexOf(x) != -1);

if(sol0 == true || sol1 == true || sol2 == true || sol3 == true){
    console.log('Yes');
}else{
    console.log('No');
}

// Problemas encontrados y soluciones
// Escape characters 
// Algunos carateres como \ [ ] se tienen que poner con
// \\ -> \    \[ -> [      \] -> ] para que sean buscados 
// Como debe ser

