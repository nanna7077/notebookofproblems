List = [int(x) for x in input().split()]
for i in range(len(List)-1):
    print([*range(List[i],List[i+1]+1)])
