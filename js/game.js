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
  console.log(this.score);
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

Game.prototype.countCorrectCards = function() {
  this.score += 1;
}

Game.prototype.showTimmer = function() {
  $("#timmerDown").text(this.count)
}

Game.prototype.win = function() {
  if(this.score === 10) {
     $('#cardPile').addClass('win').text('')

  }
  console.log(this.count);
  if(this.count === 1){
    $('#cardPile').addClass('loose').text('')
  }
}

Game.prototype.loose = function() {

}
