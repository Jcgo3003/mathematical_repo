# Hello world  -> Hello world
# Th3 br0nw    -> Th brnw
# Letra_palabra-> Letrapalabra

# Mi respuesta
import re 

s = 'Th3 br0nw'
sol = re.findall(' *[A-Z]*[a-z]*', s)
print(''.join(sol))


# mejor respuesta
s = 'Th3 br0nw'
for x in s:
    if x.isalpha() or x==" ":print(x,end="")
print()