# Amount = Principal(1+(interes rate/time)^time)	
import math

N = 10000
I = 50
M = 5

sol = N * (math.pow((1 + (I / N)), M))
print(round(sol, 1))