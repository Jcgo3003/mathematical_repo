# Input Expected output
# 75%		3 : 4
# Input Expected output
# 35%     7 : 20
# Input Expected output
# 99%    99 : 100
# Input Expected output
# 2%      1 : 50

from fractions import Fraction

percentage = '35%'

num = float('0.' + percentage.split('%')[0]) # Getting the number to a float
num = int(percentage.split('%')[0])/100 # Getting the number to a float
print(num)		

sol = num.as_integer_ratio()
print(f'{sol[0]} : {sol[1]}')		# -> 3152519739159347 : 9007199254740992  	Float as_integer_ratio

final = str(Fraction(num).limit_denominator()).split('/') 
print(f'{final[0]} : {final[1]}')	# -> 7 : 20 			Con limit_denominator
	


# MEJOR RESPUESTA
print('MEJOR RESPUESTA')
percentage = int('75%'[:-1])
n = percentage
d = 100
counter = 0
for i in reversed(range(1,100)):    # Range de 100 en reversa para al final salgan los denominadores mas pequenos
	print(i ,end='')				# Se activo con 25 
	if n%i==0 and d%i==0:			# SI percentage % i == 0    y 100 % i == 0
		print(f'n {n} d {d} i {i}')
		counter +=1 				#
		n//=i 						# n a ella misma 75/25 = 3 		Por si acaso utilizo division floor 
		d//=i 						# 
		print(f'n {n} d {d} i {i}')

print(n,':',d)
# Conclusiones
# Al hacer un rango en de mayor a menor
# Los numeros se pueden ir haciendo mas y mas pequenos con forme se acerca a 0