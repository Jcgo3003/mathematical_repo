// Since the CoC validation requirements went down, a spate of poor 
// quality submissions has befallen us. 
// Some even speculate as to the existence of sockpuppet rings to farm the puny XP such moderation provides.
// You are given a list of the recent votes on community submissions. 
// You must determine whether that subset forms a bidirectional clique, 
// i.e. each user has both voted for all others and been voted on by all others.

// Input
// Line 1: N number of users; L number of lines
// Next L lines: Vi voter's user number, Si submission author's user number

// CLIQUE or NOTHING TO SEE HERE
// Constraints
// N < 50
// L < 2500
// 0 < Vi, Si ≤ N
// Example
// Input
// 3 6
// 1 2
// 1 3
// 2 1
// 2 3
// 3 1
// 3 2

// var inputs = readline().split(' ');
// const N = parseInt(inputs[0]); // # Users
// const L = parseInt(inputs[1]); // # Lines
// for (let i = 0; i < L; i++) {
//     var inputs = readline().split(' ');
//     const V = parseInt(inputs[0]); // # User 
//     const S = parseInt(inputs[1]); // # vote    
// 	   dit[v].append(S)
// }

let N = 3;
let L = 6;
let lines = '3 6  1 2  1 3  2 1  2 3  3 1  3 2';
let dic = {}
for(var i = 1; i <= N; i++){
	dic[i] = [];
}

for(var i = 1; i <= Object.keys(dic).length; i++){
	let test = [...Array(N+1).keys()]; // Creo un test
	test.splice(i, 1); // Elimina i
	test.shift(); 	   // Elimina 0
	let sol = test.every(x => dic[i].indexOf(x)!== -1); // Todos tienen que estar en el dic
	if(!sol && (dic[i].length == N-1 )){
		console.log('Nothing to see here');
		break;
	}
}
console.log('CLICK');




















