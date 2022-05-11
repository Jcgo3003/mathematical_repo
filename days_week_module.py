# Los dias de la semana son 7(1-Lunes, 2-Martes, 3-Miercoles...)
# m - Hoy
# n - Dia para la fecha final
# Como saber que dia va a caer un dia en concreto
# Modulo me lo permite saber, modulo = el resultante de la division de un numero, 5/3 = 1.6 Mod = 2
# El unico problema es que cuando la division es precisa 7/7 en este caso sera 0 y necesito que sea 1
# Para evitar ese problema (m+n-1)% 7+1

m = 1
n = 13
print(m+n)			

print((m+n)%7+1)
print((m+n-1)%7)
print((m+n-1)%7+1)

# Cuando la suma es 14 mod = 0 pero de esta manera 0 pasa a ser 7
# Ademas que no afecta el correcto funcionamiento en los demas casos
# Solo cuando 7 es 0
# CONCLUCION JS PY
# EN js con la libreria/modulo random ocurre lo mismo
# Math.floor(Math.random() * 10) + 1;
# se tiene que sumar 1 para que el ran vaya de 1 a 10 de otra manera ira del 0 - 9
