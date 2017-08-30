function Player(animal, cards) {
  this.animals = animals;
  this.cards = cards;
  this.score = 0;
}

Player.prototype.countCorrectCards = function() {
  this.score += 1;
  console.log(this.score);
  
}
