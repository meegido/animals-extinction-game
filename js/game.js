function Game(animals, player, cards, score) {
  this.animals = animals;
  this.player = player;
  this.cards = cards;
  this.score = 0;
  this.count = 30;
}

Game.prototype.startGame = function(animals, cards) {
  cards.addAnimalsPile(animals);
  cards.addDrops();
  this.showScore();
  this.showTimmer();
}

Game.prototype.showScore = function() {
  $("#score").text(this.score)
}

Game.prototype.countDown = function() {
  var that = this;
  var timmer = setInterval(function(){
    that.win();
    that.count--;
    if(that.count <= 0) clearInterval(timmer)
    that.showTimmer();
  }, 1000)
  this.count = 31;
}


Game.prototype.showTimmer = function() {
  $("#timmerDown").text(this.count)
}

Game.prototype.win = function () {
  console.log(this.score);
  console.log("holi");
}

Game.prototype.countCorrectCards = function() {
  this.score += 1;
}
