# Formula para obtener el resultado de una secuencia numerica con ratio=1
# 1 + 2 + 3 + 4 + 5 ...

# 		numero total de elementos * (primer elemento + ultimo elemento / 2)

lista = [*range(13)]
print(lista)
print(sum(lista)) 

# Aplicando formula 
suma = round(10 * ((1 + 10)/ 2))
print(suma)


# Referencia
# https://es.quora.com/C%C3%B3mo-se-calcula-1-2-3-4-5-6-7-8-9-10-de-la-maner-m%C3%A1s-r%C3%A1pida-posible