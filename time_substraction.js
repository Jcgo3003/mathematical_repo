// - - Test 1 - - 
// Input
// 23:59:59  
// 00:00:01  
// Expected output
// - - Test 2 - - 
// Input
// Expected output
// 22:57:55
// 01:02:05
// - - Test 3 - - 
// Input
// Expected output
// 00:00:00
// 00:00:00
// - - Test 4 - - 
// Input
// Expected output
// 12:00:00
// 12:00:00
     
let [h, m, s] = '20:59:59'.split(':').map(Number);
console.log(`${h}:${m}:${s}`);
//  To seconds
let total_sec = h*3600 + m*60 + s;
let total_sec_day = 86400;

let rest = total_sec_day - total_sec;

// # hours in the rest | because 24 is the # hours in day, we can have 24 left so we use % 24
let hh = Math.floor(rest/3600) % 24; 

// # of seconds left by hours 
rest %= 3600;		
// From seconds to min 
let mm = Math.floor(rest/60);
// # of seconds left
let ss = rest % 60;

let stx = x => x.toString().padStart(2, '0');
console.log(`${hh.toString().padStart(2, '0')}:${stx(mm)}:${stx(ss)}`)
