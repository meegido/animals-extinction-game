function Game(animals, player, cards) {
  this.animals = animals;
  this.player = player;
  this.cards = cards;
}



Game.prototype.startGame = function(animals, cards) {

  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  cards.addAnimalsPile(animals);
  cards.addDrops();
}

Game.prototype.reStart = function() {

}
