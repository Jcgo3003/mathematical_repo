// Dada nb si es numero odd imprimir una piramide con s1 para la piramide y s2 para los espacios
// Dada nb si es numero even sumar 1 a nb  e imprimir una piramide invertida con s1 para la piramide y s2 para los espacios

let nb = 6;
let s1 = '*';
let s2 = ' ';

if(nb % 2 === 0){ // even | Invert
    nb += 1;
    for(let i = nb; i >= 0; i-=2){    
        console.log(s2.repeat(Math.floor((nb - i)/2)) + s1.repeat(i) + s2.repeat(Math.floor((nb - i)/2)));
    }
} 
else{
    for(let i = 1; i <= nb; i+=2){    
        console.log(s2.repeat(Math.floor((nb - i)/2)) + s1.repeat(i) + s2.repeat(Math.floor((nb - i)/2)));
    }
}