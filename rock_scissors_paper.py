p1, p2 = 'scissors', 'rock'

if(p1 == p2):
    print('draw')

if(p1 == 'rock' and p2 == 'scissors' or p1 == 'paper' and   p2 == 'rock' or p1 == 'scissors' and  p2 == 'paper'):
    print('Player1')
else:
    print('Player2')