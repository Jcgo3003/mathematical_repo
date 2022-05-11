/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let landX = [];
let landY = [];

const surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (let i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
    landX.push(parseInt(inputs[0])); // X coordinate of a surface point. (0 to 6999)
    landY.push(parseInt(inputs[1])); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}
// function to determinate final speed
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
	
// game loop
while (true) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    const hSpeed = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
    const vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
    const fuel = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
    const rotate = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
    const power = parseInt(inputs[6]); // the thrust power (0 to 4).

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
	let h = Y;
    const G = 4;
    let a = G - power;
	let speed = Math.abs(vSpeed);
    let sol = power;

    let speedF = 0;

	if(a > 0){
		speedF = Math.trunc((vf(h, a, speed)));
	} else{
		speedF = speed;
	}


	if(speedF > 40){ // 
		if(power >= 0){
			sol += 1;
		}else if(power == 4){
			sol -= 1;
		}
        console.log(`0 ${sol}`);
	}else if(speedF <= 40){
		if(power > 2){
			sol -= 1;
		}
		console.log(`0 ${sol}`);
	}else{
		console.log(`0 ${power}`);
	}
}
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
