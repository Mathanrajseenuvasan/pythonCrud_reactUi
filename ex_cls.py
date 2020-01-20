class Person():
    _number = 0
    person_name = None
    person_age = 0

    @classmethod
    def __init__(cls, new_name, age):
       cls.person_name = new_name
       cls.person_age = age


    @classmethod
    def getter(cls):
        print(cls.person_name, cls.person_age)


class Person2():
    person_name = None
    person_age = 0

    def __init__(self, new_name, age):
       self.person_name = new_name
       self.person_age = age

    def getter(self):
        print(self.person_name, self.person_age)


class Person3(Person):

    self._number


person1 = Person('Mani', 20)
person1.getter()

person2 = Person('Ram', 34)
person3 = Person('Senthil', 25)
person2.getter()
person3.getter()

print("=================================================")

person1 = Person2('Mani', 20)
person1.getter()

person2 = Person2('Ram', 34)
person3 = Person2('Senthil', 25)
person2.getter()
person3.getter()

print("=================================================")

Person("mani",12).getter()
Person('Ram', 34).getter()
Person('Senthil', 25).getter()
