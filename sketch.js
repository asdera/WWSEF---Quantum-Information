n = 16
dirac = false
alice = [
  [],
  [],
  []
]
bob = [
  [],
  [],
  []
]
dd = []
keyAlice = ""
keyBob = ""

function setup() {
  createCanvas(650, 450)
  init()
}

function init() {
  textAlign(CENTER, CENTER)
  strokeWeight(2)
  n = 16
  n = 16
  dirac = false
  alice = [
    [],
    [],
    []
  ]
  bob = [
    [],
    [],
    []
  ]
  dd = []
  key = ""
  for (i = 0; i < n; i++) {
    alice[0].push(random([0, 1]))
    alice[1].push(random([
      [
        [1, 0],
        [0, 1]
      ],
      [
        ["√2/2", "√2/2"],
        ["√2/2", "-√2/2"]
      ]
    ]))
    bob[1].push(random([
      [
        [1, 0],
        [0, 1]
      ],
      [
        ["√2/2", "√2/2"],
        ["√2/2", "-√2/2"]
      ]
    ]))
    alice[2].push(alice[1][i][alice[0][i]])
    bob[2].push(m(alice[2][i], bob[1][i]))
    bob[0].push(cm(bob[2][i], bob[1][i]))
    dd.push(alice[1][i][0][0] == bob[1][i][0][0])
    if (dd[i]) {
      keyAlice += alice[0][i];
      keyBob += bob[0][i];
    }
  }
}

function draw() {
  background(20)
  textSize(16)
  fill(255)
  if (dirac) {
    stroke(0)
    for (i = 0; i < n; i++) {
      y = (i + 0.75) * (375 / n)
      if (mouseX < 525 || dd[i]) {
        text("()=>", 125, y)
        textSize(8)
        text("[" + alice[1][i] + "]", 225, y)
        text("[" + bob[1][i] + "]", 325, y)
        textSize(16)
        text("[<>]", 425, y)
        text("Key", 525, y)
        fill("red")
        if (mouseX < 125) {
          text("?", mouseX, y)
        } else if (mouseX < 225) {
          text(alice[0][i], mouseX, y)
        } else if (mouseX < 325) {
          textSize(12)
          text("[" + alice[2][i] + "]", mouseX, y)
          textSize(16)
        } else if (mouseX < 425) {
          textSize(12)
          text("[" + bob[2][i] + "]", mouseX, y)
          textSize(16)
        } else {
          text(bob[0][i], mouseX, y)
          text(alice[0][i], 75, y)
        }
        fill(255)
      }
    }
  } else {
    for (i = 0; i < n; i++) {
      y = (i + 0.75) * (375 / n)
      if (mouseX < 525 || dd[i]) {
        noFill()
        stroke("pink")
        triangle(135, y, 115, y + 10, 115, y - 10)
        if (alice[1][i][0][0] == 1) {
          stroke("red")
          line(225, y - 10, 225, y + 10)
          line(225 - 10, y, 225 + 10, y)
        } else {
          stroke("skyblue")
          line(225 - 7.071, y - 7.071, 225 + 7.071, y + 7.071)
          line(225 - 7.071, y + 7.071, 225 + 7.071, y - 7.071)
        }
        rect(215, y - 10, 20, 20)
        if (bob[1][i][0][0] == 1) {
          stroke("red")
          line(325, y - 10, 325, y + 10)
          line(325 - 10, y, 325 + 10, y)
        } else {
          stroke("skyblue")
          line(325 - 7.071, y - 7.071, 325 + 7.071, y + 7.071)
          line(325 - 7.071, y + 7.071, 325 + 7.071, y - 7.071)
        }
        rect(315, y - 10, 20, 20)
        stroke("pink")
        quad(435, y, 425, y + 10, 415, y, 425, y - 10)
        stroke("yellow")
        ellipse(525, y, 15, 15)
        line(533, y, 550, y)
        line(545, y - 5, 545, y)
        line(550, y - 5, 550, y)
        push()
        if (mouseX < 125) {
          // text("?", mouseX, y)
        } else if (mouseX < 225) {
          push()
          strokeWeight(0)
          fill(255)
          text(alice[0][i], mouseX, y)
          pop()
        } else if (mouseX < 325) {
          if (alice[2][i][0] == 1) {
            stroke("red")
            line(mouseX, y - 10, mouseX, y + 10)
          } else if (alice[2][i][0] == 0) {
            stroke("red")
            line(mouseX - 10, y, mouseX + 10, y)
          } else if (alice[2][i][1] == "√2/2") {
            stroke("skyblue")
            line(mouseX - 7.071, y - 7.071, mouseX + 7.071, y + 7.071)
          } else {
            stroke("skyblue")
            line(mouseX - 7.071, y + 7.071, mouseX + 7.071, y - 7.071)
          }
        } else if (mouseX < 425) {
          if (bob[2][i][0] == 1) {
            stroke("red")
            line(mouseX, y - 10, mouseX, y + 10)
          } else if (bob[2][i][0] == 0) {
            stroke("red")
            line(mouseX - 10, y, mouseX + 10, y)
          } else if (bob[2][i][1] == "√2/2") {
            stroke("skyblue")
            line(mouseX - 7.071, y - 7.071, mouseX + 7.071, y + 7.071)
          } else {
            stroke("skyblue")
            line(mouseX - 7.071, y + 7.071, mouseX + 7.071, y - 7.071)
          }
        } else {
          push()
          strokeWeight(0)
          fill(255)
          text(bob[0][i], mouseX, y)
          text(alice[0][i], 75, y)
          pop()
        }
        if (mouseX < 525) {
          ellipse(mouseX, y, 20)
        }
        pop()
      }
    }
  }
  if (mouseX > 525) {
    push();
    strokeWeight(0)
    fill(255)
    text("Alice's Key: " + keyAlice, 175, 425)
    text("Bob's Key: " + keyBob, 475, 425)
    pop();
  }
}

function m(state, basis) {
  a = JSON.stringify(state);
  b = JSON.stringify(basis);
  if (b.indexOf(a) != -1) {
    return state
  } else {
    return random(basis)
  }

}

function cm(state, basis) {
  a = JSON.stringify(state);
  b = JSON.stringify(basis);
  if (b.indexOf(a) > 5) {
    return 1
  }
  if (b.indexOf(a) > 0) {
    return 0
  } else {
    return random([0, 1])
  }
}

function mousePressed() {
  if (mouseButton == LEFT) {
    init()
  } else {
    dirac = !dirac
  }
}