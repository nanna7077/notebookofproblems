from itertools import permutations

n=int(input("Enter a number: "))
lst=[x for x in str(n)]

perm=permutations(lst, len(lst))
nlst=[]
for i in perm:
    nlst.append(int(''.join(i)))
while (n in nlst):
    nlst.remove(n)
final=nlst.pop(0)
lastdiff=abs(final-n)
for i in nlst:
    if abs(i-n)<lastdiff:
        final=i
        lastdiff=abs(i-n)
print(final)