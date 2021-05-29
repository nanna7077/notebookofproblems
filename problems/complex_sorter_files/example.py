print("output:\n",[complex(x,y)for x,y in sorted([(int(input(f"Complex number{i+1}:\n\tReal part: ")),int(input("\tImag part: ")))for i in range(int(input("number of complex numbers:")))])])
