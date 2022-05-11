# counting numbers like
# [1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 10]

rango = 10

counter = 1
print(counter)
back_forward = True
lista_final = [counter]

for x in range(rango):
	counter = min(counter + [3, - 1][back_forward] , rango)
	back_forward = not back_forward
	print(counter)
	lista_final.append(counter)

print(lista_final)