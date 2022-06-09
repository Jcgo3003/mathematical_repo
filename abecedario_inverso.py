# test AABBC
a = 'AABBC'
p=''
for i in a:
    p+=chr(26-ord(i)+129)
    print(f'{i} {ord(i)}  {(26-ord(i))} {(26-ord(i)+129)}  {chr(26-ord(i)+129)}')
print(p[::-1])

for i in a:
	print(chr(155+(ord(i)*-1)))



print(chr(90))
# Resto a 26 numero de elementos en el abcedario el numero de ord
# esto se traduce en que ahora los numeros aumentaran pero en negativo
# A | 65 | - 39     	Se puede entender que los numeros estan aumentando pero en negativo
# B | 66 | - 40			Haciendose mas negativos 'caminando hacia atras'
# C | 67 | - 41
# 
# 
# sumamos 129 
# A | 65 | - 39 | 90 | 	Z	Al decreser y sumarle la direncia que al acazar la  Z(90)+ 39
# B | 66 | - 40	| 89 |  Y	Haciendose mas negativos 'caminando hacia atras'
# C | 67 | - 41 | 88 | 	X	Es decir mostrando el abecedario al reves


