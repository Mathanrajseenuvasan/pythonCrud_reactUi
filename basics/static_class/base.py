from methods import B

class A(object):
    def foo(self, x):
        print ("executing foo(%s, %s)" % (self, x))

a = A()
a.foo(1)
b = B()
b.class_foo(1)
b.static_foo(1)
b.constructor()
# B.class_foo(1)
# B.static_foo(1)