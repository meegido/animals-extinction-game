function Game(animals, player, cards, score) {
  this.animals = animals;
  this.player = player;
  this.cards = cards;
  this.score = score;
}



Game.prototype.startGame = function(animals, cards) {

  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  cards.addAnimalsPile(animals);
  cards.addDrops();
  this.showScore();
}

Game.prototype.reStart = function() {

}

Game.prototype.showScore = function(score) {
  $("#score").text(player.score)
}
