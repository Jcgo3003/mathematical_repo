# A prime is a natural number greater than  that has no positive divisors 
# other than  and itself. Given a number, , determine and print whether it is  or .
# Opcion 1 - Peor Algoritmo - Uno por uno - O(n)
def prime_worst(arr):
    for num in arr:
        count = 0
        res = 'Prime'
        for elem in range(2,num):
            count+= 1
            if num%elem == 0: 
                res = 'Not prime'
        print(num, res if num>1 else 'Not prime', f', after {count} counts')


# Opcion 2 - mal Algoritmo - uno por uno hasta num/2 - O(n/2)
def prime_bad(arr):
    for num in arr:
        count = 0
        res = 'Prime'
        for elem in range(2,num//2):
            count+=1
            if num%elem == 0: 
                res = 'Not prime'
        print(num, res if num>1 else 'Not prime', f', after {count} counts')

# Opcion 3 - O(n^(1/2)) Algorithm
# The latter range is based on the fact that a composite number must 
# have a factor less than or equal to the square root of that number. 
# Otherwise, the number is prime.
import math

def prime_ok(arr):
    for num in arr:
        count = 0
        res = 'Prime'
        for elem in range(2,math.floor(math.sqrt(num)+1)):
            count+= 1
            if num%elem == 0: 
                res = 'Not prime'
                break               # Also this break stop using more resources if a factor found
        print(num, res if num>1 else 'Not prime', f', after {count} counts')


# Opcion 4 Mejor de todos - como el anterior pero solo los numeros odd - O(n/2^(1/2)) 
import math

l = [1000000000 ,1000000001 ,1000000002,1000000003, 2147483646]
def prime_best(arr):
    for num in arr:
        count = 0
        res = 'Prime'
        for elem in range(3,math.floor(math.sqrt(num)+1), 2):
            count += 1
            if num%elem == 0: 
                res = 'Not prime'
                break               # Also this break stop using more resources if a factor found
        print(num, res if num>1 else 'Not prime', f', after {count} counts')

l_easy = [129, 2313, 11234]
l_hard = [1000000000 ,1000000001, 2147483647]

# l_easy = [5, 9, 12, 15, 3 , 23, 32]
# l_hard = [1000000000 ,1000000001 ,1000000002,1000000003, 2147483646]

# prime_worst(l_easy)
# 129 Not prime , after 127 counts
# 2313 Not prime , after 2311 counts
# 11234 Not prime , after 11232 counts

# prime_worst(l_hard)
# [Cancelled]           - TOMO DEMASIADO TIEMPO

# prime_bad(l_easy)
# 129 Not prime , after 62 counts
# 2313 Not prime , after 1154 counts
# 11234 Not prime , after 5615 counts

# prime_bad(l_hard)
# [Cancelled]           - TOMO DEMASIADO TIEMPO


# prime_ok(l_easy)
# 129 Not prime , after 2 counts
# 2313 Not prime , after 2 counts
# 11234 Not prime , after 1 counts

# prime_ok(l_hard)
# 1000000000 Not prime , after 1 counts
# 1000000001 Not prime , after 6 counts
# 2147483647 Prime , after 46339 counts



# prime_best(l_easy)
# 129 Not prime , after 1 counts
# 2313 Not prime , after 1 counts
# 11234 Not prime , after 20 counts

# prime_best(l_hard)
# 1000000000 Not prime , after 2 counts
# 1000000001 Not prime , after 3 counts
# 2147483647 Prime , after 23169 counts




