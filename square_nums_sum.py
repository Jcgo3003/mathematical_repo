# Formula 
# ( n(n+1)(2n+1) )/6
# Example for 12 numbers

lista = [x*x for x in list(range(13))]
print(sum(lista))							# -> 650

# Using the formula
print(round(12*(((12+1)*(2*12+1))/6)))		# -> 650