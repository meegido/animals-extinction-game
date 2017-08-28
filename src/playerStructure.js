function Player(counterGuesses) {
  this.counterGuesses = counterGuesses
}


Player.prototype.updateGuesses = function() {
  var guessOk = game.checkCoincidence(); //un acierto es una coincidencia
}

Player.prototype.updateScore = function() {
  this.counterGuesses += updateGuesses()
}
