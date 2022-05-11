//

function vf(h, a, v0){
	a = (a/2);
	let b = v0;
	let c = -1 *(h);
	let t1 = 0, t2 = 0, t_final = 0;

	let discriminant =  Math.pow(b, 2) - (4*a*c);
	if(discriminant < 0 ){		// discriminant tiene que ser mayor que 0 si no hay t_finalucion
			return null;
	}
	else{
		t1 = ( -(b) + Math.sqrt( discriminant ) ) / (2*a);
		t2 = ( -(b) - Math.sqrt( discriminant ) ) / (2*a);
		console.log(t2);

		if(t1 === t2){
			let comp = (Math.pow(t1, 2) * a) + (b*t1) + c;
			t_final = t1;

		}else{
			let comp1 = (Math.pow(t1, 2) * a) + (b*t1) + c;
			let comp2 = (Math.pow(t2, 2) * a) + (b*t2) + c;

			/// La respuesta que mas se acerque a 0 es la correta
			let res = Math.min(...[Math.abs(comp1), Math.abs(comp2)]);
			if( comp1 === res){
				t_final = t1;
				t_final < 0? t_final = t2: t_final = t1;

			}
			else{
				t_final = t2;
				t_final < 0? t_final = t1: t_final = t2;
			}
		}
	}
	let vf = h / t_final;
	return vf; 
}

function vf2(h, a){
	let t = Math.sqrt((h*2)/a);
	console.log(`t ${t}`)
	return (h/t);
}



let v = vf(2424, 0, 12);
console.log(v);

// - Importante -
// Si a = 0, la funcion entrega NaN al intentar ejecutar una divisio entre 0.
// La acerelacion nunca puede ser 0 
// Es este caso especial 
// Para calcular la vf con acereleracion 0  vf = vi + a*t
// De esta manera protejo mi funcion de NaN
// let speedF = 0;
//
// 	if(a > 0){
// 		speedF = Math.trunc((vf(h, a, speed)));
// 	} else{
// 		speedF = speed; 
// 	}

// Referencia
// https://www.codingame.com/ide/puzzle/mars-lander-episode-1b
//
// Ejem Datos 
// X=2500m, Y=2424m, HSpeed=0m/s VSpeed=-12m/s
// Fuel=475l, Angle=0°, Power=4 (4.0m/s2)