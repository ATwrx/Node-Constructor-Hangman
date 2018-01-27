module.exports = Word;
const Letter = require("./Letter.js");

function Word(word) {
  this.wordArr = word.split("");
  this.LetterArr = makeLetterArr(this.wordArr);
  this.wordStr = () => {
    let temp = [];
    for (letters in this.LetterArr) {
      temp.push(this.LetterArr[letters].display())
    }
    return temp.join(" ");
  }
  this.checkGuess = (guess) => {
    if (this.wordArr.includes(guess)) {
      let letterPos = this.wordArr.indexOf(guess);
      this.LetterArr[letterPos].guess(guess)
      console.log('Correct')
      console.log(this.wordStr())
      makeLine();
      return true;
    } else {
      console.log('Wrong')
      console.log(this.wordStr())
      makeLine()
      return false;
    }
  }
}

function makeLine() {
  console.log('---------------------------------------------------------------')
}
function makeLetterArr(arr) {
  let tempArr = [];
  for (chars in arr) {
    let newLetter = new Letter(arr[chars])
    tempArr.push(newLetter);
  }
  return tempArr
}
