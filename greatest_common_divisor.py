# The greates common divisor/factor of two numbers
# is the largest factor that all the numbers share.
import math

x = 18
y = 63

m = min(x, y)
sol = 0;
for i in range(1, m+1):
	if(x % i == 0 and y % i ==0):
		sol = i
		
print('- Sol 1 -')
print('The greatest common factor')
print(sol) # >> 9

# sol 2
def func_gcd(x,y): 
    return y and func_gcd(y, x % y) or x

print('- Sol 2 -')
print(func_gcd(18, 63))



# Math
a = math.gcd(x, y)

print('- Sol 3 -')
print('The greatest common factor is ')
print(a)
print(int(x / a), int(y /a))

# From percentages to fractions its kind of similar
# Look at percentanges_to_fractions.py	