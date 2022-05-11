# let dic =  Remplazar las letra segun este diccionario
# 'O':'0',	 la entrada puede estar en mayusculas o minusculas
# 'L': '1',
# 'Z': '2',
# 'E': '3',
# 'A': '4',
# 'S': '5',
# 'G': '6',
# 'T': '7',
# 'B': '8',
# 'Q': '9' };

s = input()
l = 'OLZEASGTBQolzeasgtbq' # El truco de este diccionario es que una vez que temina
						   # Comienza con 0 de nuevo, para eso utiliza %10 
for i in s:
    if i in l:
        print(l.index(i)%10,end='')
    else:
        print(i,end='')

# Para que funcione apropiadamente 
# 1 - Una coleccion finita este caso 10, llega hasta 9
# 2 - Como una vez que termina comieza otra vez con 0