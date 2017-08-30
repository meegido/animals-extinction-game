function Game(animals, player) {
  this.animals = animals;
  this.player = player;
  this.cards = cards;
}


Game.prototype.startGame = function(animal) {
  //return animal.extintionStatus;

  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  cards.addAnimalsPile(animals);
  cards.addDrops();
  cards.handleCardDrop(event, ui);



}

Game.prototype.reStart = function() {

}

Game.prototype.checkCoincidence = function() {
  return animal.extintionStatus === true
}
