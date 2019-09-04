e = 0

function factorial(op) {

  var z = op + 1;
  var p = [1.000000000190015, 76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 1.208650973866179E-3, -5.395239384953E-6];

  var d1 = Math.sqrt(2 * Math.PI) / z;
  var d2 = p[0];

  for (var i = 1; i <= 6; ++i)
    d2 += p[i] / (z + i);

  var d3 = Math.pow((z + 5.5), (z + 0.5));
  var d4 = Math.exp(-(z + 5.5));

  d = d1 * d2 * d3 * d4;

  return d;
}

function setup() {
  createCanvas(400, 400);
  e = Math.E
  initvar()
  values()
  dis()
}

n = 50*10**16
c = {
  u: 0.9,
  v: 0.1
}
rate = 5
f = 0
function draw() {
  background(220);
  f++
  if (f % rate == 0) {
    n--;
    emit();
  }
}

q = 0.5
u = 0.5
v = 0.1
Q = {
  i: 0,
  il: 0,
  u: 0,
  v: 0,
  vl: 0,
  z: 0
}
e0 = 0
e1 = 0
e1u = 0
E = {
  u: 0,
  v: 0,
}
ua = 0
fpp = 0

function H2(x) {
  return -x*(log(x)/log(2))-(1-x)*(log(1-x)/log(2))
}

function initvar() {
  e0 = 0.5 // 8.5*(10**-7)
  Q.u = 8.246*(10**-3)
  E.u = 9.463*(10**-3)
  q = 0.4444
  Q.v = 1.273*(10**-3)
  E.v = 2.835*(10**-2)
  fpp = 1.17
  ua = 10
  print(Q)
}

function values() {
  Q.vl = Q.v*(1-ua/sqrt(n*c.v*Q.v))
  print(Q.vl)
  Q.il = (((u**2)*(e**-u))/(u*v-v**2))*(Q.vl*(e**v)-Q.u*(e**u)*(v**2/u**2)-E.u*Q.u*(e**u)*(u**2-v**2)/(e0*u**2))
  e1u = (E.u*Q.u)/Q.il
  print(Q.vl, Q.il, e1u)
}

function dis(k) {
  p = (e ** -u) * (u ** k) / factorial(k)
  return p
}

function emit() {
  dice = random()
  sum = 0
  for (k = 0; k < 100; k++) {
    p = dis(k)
    if (dice < sum+p) {
      break
    } else {
      sum += p
    }
  }
  // print(k)
}

/**
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

**/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
