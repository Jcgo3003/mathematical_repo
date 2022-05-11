# Encuentra el tiempo expresado en ano entre date_of_birth y current_date
# Como utilizar map, como utilizar fechas, como utilizar statements inversamente, como colocar false o true para que sumen o resten
import re

# --- Mi codigo ----

# date_of_birth = input()
# current_date = input()

date_of_birth = '22.03.2002'
current_date = '02.11.2040'

# ES DEMASIADO CODIGO PARA ALGO MAS SENCILLO
regex = '\d+'
dob = re.findall(regex, date_of_birth)
cd = re.findall(regex, current_date)

# ESTA CONDENADO A FALLAR 
y = int(cd[2])- int(dob[2]) 		# Years
m = abs(int(cd[1])- int(dob[1]))	# months 
d = int(cd[0])- int(dob[0])			# days

# LO UNICO BIEN
# if (y < 0):
#     print('Invalid Date')
# else:
#     print(y)
  
# MUCHO MEJOR ABORDADO
bd,bm,by = map(int, '21.12.2001'.split("."))# Date of birth
td,tm,ty = map(int, '21.12.2002'.split("."))# Current


# UN CODIGO MAS CLARO Y BIEN HECHO
print(f'{(td, tm)} {(bd, bm)} {(td, tm) < (bd, bm)}')# Si el mes y dia de date_of_birth son mayores encontes se resta uno
print(f'{(td, tm)} {(bd, bm)} {(td, tm) < (bd, bm)}')# Si el mes y dia de date_of_birth son mayores encontes se resta uno
age = ty - by - ((td, tm) < (bd,bm))				# porque el ano no ha pasado, para que pase un dia ambos deben ser
													# SI mes y dia de date_of_birth son menores que current_day entonces
# current month y day tienen que ser ambos menores que date_of_birth month y day
# current month y day ambos mayores o iguales que date_of_birth month y day - True  1 
# current month y day ambos menores que date_of_birth month y day - False 			0  				

# El ano es la diferencia entre ano current_day y date_of_birth
# El ano se debe corregir si current mes y dia son iguales o mayores que date_of_birth, se deja asi
# El se le debe resta un ano porque ese ano aun no se ha completado

# El truco aqui es que >= cuando un ano no es igual o mayor - da true  =  1
# Pero cuando < es la misma idea solo que en este caso va a dar false y es lo que se necesita
# >=  - cuando se cumple me da true pero necesito que me de false
# <   - cumple el mismo statement pero me da false

# >= 	Inverso que  < por lo que puede ser util


# Current date mes y dia deben ser mayor o igual que 
# False resta 0		
# True 	resta 1		Para correjir el ano debo saber si los meses de date_of_birth son mayores o iguales que current date

# Aqui esta utilisando el BOOLEAN statement para restar por lo que el esta corriendo al reves
# meses, dias de date_of_birth son mayores o iguales que current date no se le quita nada a la fecha porque ya paso el ano
# meses, dias de date_of_birth son menor que current date se le quita 1 a la fecha porque NO ha pasado er ano

print(age)
resta = ((td, tm) < (bd,bm))
print(resta)
age2 = ty - by - resta
print(age2)