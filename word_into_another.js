
let counter = 0;
let s = 'humble bun'; // source  
let t = 'turtle gre'; // Target

while(counter <= s.length){
	console.log(t.slice(0, counter) + s.slice(counter));
	counter += 1;
}
