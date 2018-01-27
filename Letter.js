module.exports = Letter;

function Letter(letter) {
  this.letter = letter;
  this.isVisible = false;
  this.display = function () {
    return (this.isVisible ? this.letter : "_");
  };
  this.guess = function (guess) {
    if (guess == this.letter) {
      this.isVisible = true;
    } else {
      return;
    }
  };
}
