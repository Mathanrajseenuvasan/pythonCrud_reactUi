
# def integer_value(value):
#     try:
#         data = int(value)
#         print(data)
#         return data
#     except Exception as e :
#         print(e.args)
#         return e


# def string_value(value):
#     try:
#         data = str(value)
#         print(data)
#         return data
#     except Exception as e :
#         print(e.args)
#         return e

# # string_value(33)
# integer_value("ss")

def trace(f):
    def g(*args):
        print(f.__name__, args)
        return f(*args)
    return g

@trace
def square(x):
    return x*x
@trace
def sum_of_squares(x, y):
    return square(x) + square(y)
    
print(sum_of_squares(3, 4))