x = 7
y = "8"

if not type(x) is int:
    raise TypeError ("Only integers are allowed")
elif not type(y) is str:
    raise TabError ("Only strings are allowed")
else:
    print(x, y)