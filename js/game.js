function Game(animals, player, cards, score) {
  this.animals = animals;
  this.player = player;
  this.cards = cards;
  this.score = score;
  this.count = 10;
}

Game.prototype.startGame = function(animals, cards) {
  cards.addAnimalsPile(animals);
  cards.addDrops();
  this.showScore();
  this.showTimmer();
}

Game.prototype.showScore = function() {
  $("#score").text(player.score)
}

Game.prototype.countDown = function() {
  var that = this;
  var timmer = setInterval(function(){
    that.count--;
    if(that.count <= 0) clearInterval(timmer)
    that.showTimmer();
  }, 1000)
  this.count = 11;
}

Game.prototype.showTimmer = function() {
  $("#timmerDown").text(this.count)
}
