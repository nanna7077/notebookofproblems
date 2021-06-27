from random import randint

def worst_sort(lst):
	s = False
	while s != True:
		s = True
		for i in range(len(lst) - 1):
			if lst[i] > lst[i+1]:
				s = False
				x = randint(0, len(lst) - 1)
				y = randint(0, len(lst) - 1)
				lst[x], lst[y] = lst[y], lst[x]
				# print(">>>", lst)

lst = [1, 5, 9, 6, 3, 7, 4, 8, 2]
worst_sort(lst)
print(lst)
