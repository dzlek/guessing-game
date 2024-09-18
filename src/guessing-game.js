class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.currentGuess = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.currentGuess = Math.floor((this.min + this.max) / 2);
    return this.currentGuess + 1;
  }

  lower() {
    this.max = this.currentGuess;
  }

  greater() {
    this.min = this.currentGuess + 1;
  }
}

module.exports = GuessingGame;
