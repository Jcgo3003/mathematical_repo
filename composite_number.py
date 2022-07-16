# Número compuesto es cualquier número natural no primo, a excepción del 1. 
# Es decir, tiene uno o más divisores distintos a 1 y a sí mismo.
# composite number must have a factor less than or equal to 
# the square root of that number. Otherwise, the number is prime.
# Es lo contrario a un numero primo.

l = [*range(25)][1:]

for num in l:
	res = 'Prime'
	for i in range(2, num):
		if num%i == 0:
			res = "Composite"

	print(res if num > 3 else 'Composite' , num)
