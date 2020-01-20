class MyError(Exception):
    def __init__(self, message):
        self.message = message


var = False
if var == True:
    print("no issues")
else:
    raise MyError("var is false")
    # import sys
    # sys.exit("var is false")
