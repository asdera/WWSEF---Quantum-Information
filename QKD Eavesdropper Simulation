from random import *
from math import *

def rbasis():
  return choice([[[1,0],[0,1]],[[2,2],[2,-2]]])

def pp():
  print "XXXXXXXXXXXXXXXX"
  for a in [alice, eve, bob]:
    print "\n"
    for b in a:
      print b

def r(x):
  for a in [alice, eve, bob]:
    for b in a[:-1]:
      if len(b) >= 1:
        b.pop(x)

def m(state, basis):
  # if bit == 0:
  #   return basis[0]
  # elif bit == 1:
  #   return basis[1]
  # el
  if basis == None or state in basis:
    # print "bit", state
    return state
  else:
    # print "bit4"
    return choice(basis)
    # return [bit[0]*basis[0][0] + bit[1]*basis[1][0], bit[0]*basis[0][1] + bit[1]*basis[1][1]]

def cm(state, basis):
  if basis == None:
    return randint(0,1)
  elif state in basis:
    return basis.index(state)
  else:
    return randint(0,1)
    # return [bit[0]*basis[0][0] + bit[1]*basis[1][0], bit[0]*basis[0][1] + bit[1]*basis[1][1]]

def keying():
  global sub
  print "\nkeying sub="+str(sub)
  aq = []
  bq = []
  bfb = len(alice[2])
  for ii in range(bfb/sub+1)[::-1]:
    ssa = 0
    ssb = 0
    for i in range(ii*sub, min(ii*sub+sub, len(alice[2]))):
      ssa += alice[0][i]
      ssb += bob[0][i]
    if ssa == ssb:
      r(min(ii*3+sub, len(alice[2]))-1)
    else:
      for ir in range(ii*sub, min(ii*sub+sub, len(alice[2])))[::-1]:
        r(ir)
    aq.append(ssa%2)
    bq.append(ssb%2)
  #sub -= 1

  # print "nnnnnnnnnnnn\n" + str(aq)
  # print bq

  # print "huidhuid\n", alice[2]
  # print bob[2]

alice = [[],[],[],[],"Alice"]
eve = [[],[],[],[],"Eve"]
bob = [[],[],[],[],"Bob"]

n = 2000
sub = 3

# 0 - bit value
# 1 - basis
# 2 - state
# 3 - photon per pulse

alice[0] = [randint(0, 1) for i in range(n)]
alice[1] = [rbasis() for i in range(n)]
bob[1] = [rbasis() for i in range(n)]
eve[1] = [choice([rbasis()] + [None for j in range(4)]) for i in range(n)]

alice[2] = [alice[1][i][alice[0][i]] for i in range(n)]
eve[2] = [m(alice[2][i], eve[1][i]) for i in range(n)]
bob[2] = [m(eve[2][i], bob[1][i]) for i in range(n)]

bob[0] = [cm(bob[2][i], bob[1][i]) for i in range(n)]
eve[0] = [cm(eve[2][i], eve[1][i]) for i in range(n)]

print(alice, eve, bob)

# print(eve[0], eve[1])
# pp()



# pp()

# print "\n", alice[2]
# print bob[2]

def err(subb):
  subb -= 1;
  aq = []
  bq = []
  bfb = len(alice[2])
  for ii in range(bfb/sub+1)[::-1]:
    ssa = 0
    ssb = 0
    for i in range(ii*sub, min(ii*sub+sub, len(alice[2]))):
      ssa += alice[0][i]
      ssb += bob[0][i]
    aq.append(ssa%2)
    bq.append(ssb%2)
  akey = "".join(list(map(str, aq)))
  bkey = "".join(list(map(str, bq)))

  print "\nAlice's Key: " + akey
  print "\nBob's Key:   " + bkey

  e = 0
  for c in range(len(str(akey))): 
    if akey[c] != bkey[c]:
      e += 1

  print "\nError Rate:  " + str(e/float(len(akey)))

def teststates(a, b):
  l = len(a)
  c = 0
  for i in range(l):
    if a[i] == b[i]:
      c += 1
  print "Difference:"
  print c / float(l)



teststates(alice[0], bob[0])
teststates(alice[0], eve[0])
teststates(bob[0], eve[0])

for i in range(n)[::-1]:
  if alice[1][i] != bob[1][i]:
    r(i)

teststates(alice[0], bob[0])
teststates(alice[0], eve[0])
teststates(bob[0], eve[0])

err(sub)
for i in range(3):
  keying()
  err(sub)

