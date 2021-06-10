from itertools import permutations

n = int(input("Enter a number: "))
lst = [x for x in str(n)]
lst = list(permutations(lst))
num = []
for i in lst:
    s = ''.join(i)
    num.append(int(s))
num.remove(x)
diff = 0
minval = num[0]
for i in num:
    x = abs(i - x)
    if diff > x:
        diff = x
        minval = i

print(minval)