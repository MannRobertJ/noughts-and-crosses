let turn = 1;
const p1 = [];
const p2 = [];
let gameOver = false;
const p1Scores = [];
const p2Scores = [];
// Explanation: consider the following game: two players take it in turns to pick an integer from the set {1,...,9}.
// First player with 3 numbers that add to 15 wins. No number may be picked twice.
// This game is noughts & crosses in disguise.

class Button {
  constructor(number) {
    this.alreadyClicked = false;
    this.number = number;
    this.changeColour = function() {
      switch (this.number) {
        case 1: {
          const cell = document.getElementById("one");
          if (turn === 1) {
            cell.style.backgroundColor = "red";
          } else {
            cell.style.backgroundColor = "blue";
          }
          break;
        }
        case 2: {
          const cell = document.getElementById("two");
          if (turn === 1) {
            cell.style.backgroundColor = "red";
          } else {
            cell.style.backgroundColor = "blue";
          }
          break;
        }
        case 3: {
          const cell = document.getElementById("three");
          if (turn === 1) {
            cell.style.backgroundColor = "red";
          } else {
            cell.style.backgroundColor = "blue";
          }
          break;
        }
        case 4: {
          const cell = document.getElementById("four");
          if (turn === 1) {
            cell.style.backgroundColor = "red";
          } else {
            cell.style.backgroundColor = "blue";
          }
          break;
        }
        case 5: {
          const cell = document.getElementById("five");
          if (turn === 1) {
            cell.style.backgroundColor = "red";
          } else {
            cell.style.backgroundColor = "blue";
          }
          break;
        }
        case 6: {
          const cell = document.getElementById("six");
          if (turn === 1) {
            cell.style.backgroundColor = "red";
          } else {
            cell.style.backgroundColor = "blue";
          }
          break;
        }
        case 7: {
          const cell = document.getElementById("seven");
          if (turn === 1) {
            cell.style.backgroundColor = "red";
          } else {
            cell.style.backgroundColor = "blue";
          }
          break;
        }
        case 8: {
          const cell = document.getElementById("eight");
          if (turn === 1) {
            cell.style.backgroundColor = "red";
          } else {
            cell.style.backgroundColor = "blue";
          }
          break;
        }
        case 9: {
          const cell = document.getElementById("nine");
          if (turn === 1) {
            cell.style.backgroundColor = "red";
          } else {
            cell.style.backgroundColor = "blue";
          }
          break;
        }
      }
    };

    this.addToScore = function() {
      if (turn === 1) {
        p1.push(this.number);
        for (let i = 0; i < p1.length; i++) {
          for (let j = i + 1; j < p1.length; j++) {
            for (let k = j + 1; k < p1.length; k++) {
              p1Scores.push(p1[i] + p1[j] + p1[k]);
            }
          }
        }
      }

      if (turn === 2) {
        p2.push(this.number);
        for (let i = 0; i < p2.length; i++) {
          for (let j = i + 1; j < p2.length; j++) {
            for (let k = j + 1; k < p2.length; k++) {
              p2Scores.push(p2[i] + p2[j] + p2[k]);
            }
          }
        }
      }
    };

    this.click = function() {
      if (this.alreadyClicked === true || gameOver === true) {
        return false;
      }
      this.changeColour();
      this.addToScore();

      if (p1Scores.indexOf(15) > -1) {
        gameOver = true;
        alert("Player One Won!");
      }

      if (p2Scores.indexOf(15) > -1) {
        gameOver = true;
        alert("Player Two Won!");
      }

      if (turn === 1) {
        turn = 2;
      } else {
        turn = 1;
      }

      this.alreadyClicked = true;
    };
  }
}

const topLeft = new Button(8);
const topMiddle = new Button(1);
const topRight = new Button(6);
const middleLeft = new Button(3);
const middle = new Button(5);
const middleRight = new Button(7);
const bottomLeft = new Button(4);
const bottomMiddle = new Button(9);
const bottomRight = new Button(2);
