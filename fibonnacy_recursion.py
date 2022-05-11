# Fibonaci secuence to return the fibonaci number at some place
# Fibonnacci number at 7  - 13
#

def fib(x):
	if x <= 1:
		return 1
	else:
		return fib(x - 2) + fib(x - 1)

print(fib(7))