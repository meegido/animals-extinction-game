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
  this.countDown();
}

Game.prototype.showScore = function() {
  $("#score").text(player.score)
}

Game.prototype.countDown = function() {
  var that = this;
  var timmer = setInterval(function(){
    that.count--;
    if(that.count <= 0) clearInterval(timmer)
    that.render();
  }, 1000)
}

Game.prototype.render = function() {
  $("#timmerDown").text(this.count)
}

Game.prototype.reStart = function(count) {

}
