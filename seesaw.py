# Print 1 if the seesaw is in balance, 0 otherwise.
# w1 * d1 == w2 * d2.

# 10kg      10kg
# |         |
# v         v
# ___________
#     A     

# Best answer Python
r = '10kg      10kg'.split()      # primera entrada, pasa de str a list
print(r);
for i in range(2):       # itera dos veces
    r[i] = int(r[i][:-2])# transforma a int, cada una elimina kg
a,b=r                    # asigna masas

exec('input();'*2)     # evade 2 inputs que son informacion no necesaria
le = len(input())      # Obtiene distancia total del balacin
f = len(input())       # obtiene distancia total del fulcrum
    
d1,d2 = f-1,le-f        # Asigna ditancias 
print((int(a*d1==d2*b)))# Pasa un booleano a int 