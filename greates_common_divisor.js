// Find the greates common divisor/factor of two numbers
// is the largest factor that all the numbers share.

let x = 30, y = 18;

let min = Math.min(x, y);
let sol = 0;
for(var i = 1; i <=min; i++ ){
	if(x % i == 0 && y % i ==0){
		sol = i;
	}
}
console.log('The greatest common divisor is ');
console.log(sol);
console.log(`${x/sol} ${y/sol}`)

// From percentages to fractions its kind of similar
// Look at percentanges_to_fractions.py	