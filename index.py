number = int(input("Enter the number of rows: "))

for i in range(1, number + 1):
    for j in range(1, i + 1):
        print(2 * j - 1, end="")  
    print("")  
