// Mostrar el numero de teclas a presionar para crear un mensaje dado
// ejem HOLA -> 446665552
// ###################
// #  1  #  2  #  3  #
// # O_O # ABC # DEF #
// #     #     #     #
// ###################
// #  4  #  5  #  6  #
// # GHI # JKL # MNO #
// #     #     #     #
// ###################
// #  7  #  8  #  9  #
// #PQRS # TUV # WXYZ#
// #     #     #     #
// ###################
// #  *  #  0  #     #
// #  +  #  _  #  #  #
// #     #     #     #
// ###################

let mess = 'NOKIA';

let dic = [...Array(26).keys()].map(x => String.fromCharCode(x+65));
let s = dic.reduce((ac,x,i)=>(i>=15&& i<= 18)?({...ac, [x]: (7).toString().repeat(i-14)})
							:(i>=19&& i<= 21)?({...ac, [x]: (8).toString().repeat(i-18)})
						    :(i> 21)         ?({...ac, [x]: (9).toString().repeat(i-21)})
						    :({...ac, [x]: (Math.floor(i/3)+2).toString().repeat(i%3+1)}), {});

console.log(mess.split('').map(x=> s[x]).join(''));

// const MESSAGE = 'NOKIA';
// let dic1 = [...Array(15).keys()].map(x => String.fromCharCode(x + 65)); 
// let dic2 = [...Array(12).keys()].map(x => String.fromCharCode(x + 80)); 
// let num = [...Array(8).keys()].map(x => (x+ 2).toString());

// let all1 = dic1.reduce((ac, x, i) =>  ({...ac, [dic1[i]]:Array.from({ length: (i%3)+1 }, () => num[Math.floor(i/3)]).join('') }), {});
// let all2 = dic2.reduce((ac, x, i) =>  ({...ac, [dic2[i]]:
// 		Array.from({ length: (i%3)+1 }, () => num[Math.floor(i/3)]).join('') }), {});

// console.log(dic1);
// console.log(dic2);
// console.log(num);
// console.log(all1);
// console.log(Array.from({ length: 3 }, () => 'bla').join(''));


// VERSION 2
// const MESSAGE = 'NOKIA';
// let dic1 = [...Array(15).keys()].map(x => String.fromCharCode(x + 65)); 
// let dic2 = [...Array(11).keys()].map(x => String.fromCharCode(x + 80)); 

// let all1 = dic1.reduce((ac, x, i) =>  ({...ac, [dic1[i]]: (Math.floor(i/3)+2).toString().repeat(i%3+1) }), {});

// let all2 = dic2.reduce((ac, x, i) =>  ((Math.floor(i/3)+7)%2)?({...ac, [dic2[i]]: (Math.floor(i/4)+7).toString().repeat(1) })
// 														      :({...ac, [dic2[i]]: (Math.floor(i/4)+7).toString().repeat(3) })
// 	      							, {});
// // let all2 = dic2.reduce((ac, x, i) =>  ({...ac, [dic2[i]]:
// 		// Array.from({ length: (i%3)+1 }, () => num[Math.floor(i/3)]).join('') }), {});


// console.log(dic1);
// console.log(dic2);
// console.log(all1);
// console.log(all2);
// // Notas 
// Por alguna razon no funciona repeat detro de este loop, a veces si a veces no
// console.log(Array.from({ length: 3 }, () => 'bla').join(''));
// let all1 = dic1.reduce((ac, x, i) =>  ({...ac, [dic1[i]]: num[Math.floor(i/3)].repeat(i%3+1) }), {});
// De esta manera funciona correctamente, pero  asi ...

// let all1 = dic1.reduce((ac, x, i) =>  ({...ac, [dic1[i]]: num[Math.floor(i)].repeat(i%3+1) }), {});
// Cannot read properties of undefined (reading 'repeat')
// No funciona

// let s = dic.reduce((ac,x,i)=> ({...ac, [x]: (Math.floor(i/3)).repeat(2)}), {});
// TypeError: Math.floor(...).repeat is not a function

// Para eso idee esta funcion, solo asi funciona pero es muy larga y compleja
let all2 = dic2.reduce((ac, x, i) =>  ({...ac, [dic2[i]]:
		Array.from({ length: (i%3)+1 }, () => num[Math.floor(i/3)]).join('') }), {});
// Al final opte por borrar la matriz con los numeros