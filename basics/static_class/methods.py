class B(object):

    clas_var = "im a class variable"

    def clas_fun():
        print ("im a class function")

    def constructor(self):
        print ("im a constructor")
        self.clas_fun

    @classmethod
    def class_foo(cls, x):
        print ("executing class_foo(%s, %s)" % (cls, x))
        print (cls.clas_var)
        cls.clas_fun()

    @staticmethod
    def static_foo(x):
        print ("executing static_foo(%s)" % x)