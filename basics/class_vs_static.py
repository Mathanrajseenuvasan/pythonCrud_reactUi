class Number():
    def __init__(self, value):
        self.value = value

    @staticmethod
    def sum(value1, value2):
        return Number(value1+value2)

    @classmethod
    def zum(cls, value1, value2):
        return cls(value1+value2)

    def print(self):
        print(str(self.value))


class Float(Number):
    # Skip defining an __init__ method, and it uses the same as Number
    # Skip defining the sum() method, and it uses the same as Number
    # Skip defining the print method, and it uses the same as Number
    # Or we could define our own print method for this class.
    def print(self):
        # Prints the number with 2 decimal places
        print("{:.2f}".format(self.value))


f = Float.sum(0.11, 0.1593)
f.print()

f1 = Float.zum(0.11, 0.1593)
f1.print()

m = Number.sum(15, 15)
m.print()

n = Number(0.15647)
n.print()
f = Float(0.15647)
f.print()
