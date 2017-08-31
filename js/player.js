function Player(animal, cards, score, game) {
  this.animals = animals;
  this.cards = cards;
  this.score = 0;
  this.game = game;
}

Player.prototype.countCorrectCards = function() {
  this.score += 1;
}

Player.ptototype.loose = function() {
  
}
