// Wordle is game where you have to guess a word w. 
// For each guess g you are given hints if any of the 
// used characters are included or at the right position of the word. 
// Your task is to output these hints.
// For each character at the right position print X, 
// for each character that is included but at the wrong position print /, 
// 	for every other character print _. Note that if a guess contains a character more often than it occurs in the actual word, you need to ignore the redundant occurrences.

// Input
// ACTRESS
// SUCCESS

// Output
// __/_XXX

let w = 'ACTRESS';
let g = 'SUCCESS';

// x character at right possition
// / character right wrong possition
// other _

// Tengo que para cada uno de los charaters
w = w.split('');
g = g.split('');


let sol = [];

for(let x in w){
	if(w[x] === g[x]){
		sol[x] = 'X';
		w[x]= '-';
		g[x]= '-';
	}
}

for(let x in w){
	if(w.indexOf(g[x]) != -1 && w[x] != '-'){ // Si existe la letra
		sol[x]= '/';
		w[w.indexOf(g[x])] = '-';
		g[x] = '-';
	}else if(w[x] != '-' && w[x] != 'X'){
		sol[x] = '_';
	}	
}

console.log(sol.join(''));













