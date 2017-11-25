function Game(animals, cards, score) {
  this.animals = animals;
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
    that.lose();
    if(that.count <= 0) clearInterval(timmer)
    that.showTimmer();
  }, 1000)
}

Game.prototype.countCorrectCards = function() {
  this.score += 1;
}

Game.prototype.showTimmer = function() {
  $("#timmerDown").text(this.count)
}

Game.prototype.win = function() {
  const maxScore = 10;
  if(this.score !== maxScore) { return; }

  $('#cardPile').addClass('win').text('')
}

Game.prototype.lose = function() {
  const minCount = 0
  if(this.count !== minCount){ return; }

  $('#cardPile').addClass('loose').text('')
}
