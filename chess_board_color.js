// Getting the color a chess board by name

let [l, n] = 'a2';// 
let place = l.charCodeAt(0) - 97;
if((place*8)+parseInt(n) % 2 == 0){
    console.log('light');
}
else{ 
    console.log('black');
}


