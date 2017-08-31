function Player(animal, cards, score) {
  this.animals = animals;
  this.cards = cards;
  this.score = 0;
}

Player.prototype.countCorrectCards = function() {
  console.log(this.score);
  this.score += 1;
}
