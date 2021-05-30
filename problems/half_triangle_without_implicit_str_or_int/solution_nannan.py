[(lambda y: [print(y, end='') if x!=(y) else print() for x in range(y+1)])(i) for i in range(1, (eval(input())+1))]
