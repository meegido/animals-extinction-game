function Game(animals, player, cards, score) {
  this.animals = animals;
  this.player = player;
  this.cards = cards;
  this.score = score;
}



Game.prototype.startGame = function(animals, cards) {

  cards.addAnimalsPile(animals);
  cards.addDrops();
  this.showScore();
}

Game.prototype.showScore = function() {
  $("#score").text(player.score)
}

Game.prototype.reStart = function() {

}
