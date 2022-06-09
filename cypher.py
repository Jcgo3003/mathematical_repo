key = 1
l = ['IA', 'FA', 'MB', 'PA']

final = ''
for x in l:
    letter = (chr(ord(x[0])- key))
    nb = ord(x[1]) - 64
    final += letter * nb 

print(final)