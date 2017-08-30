function Game(animals, player, cards) {
  this.animals = animals;
  this.player = player;
  this.cards = cards;
}



Game.prototype.startGame = function(animals, cards) {
  //return animal.extintionStatus;

  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  cards.addAnimalsPile(animals);
  cards.addDrops();

}

Game.prototype.reStart = function() {

}

Game.prototype.checkCoincidence = function() {
  return animal.extintionStatus === true
}
