function Player(animal, cards, score, game) {
  this.animals = animals;
  this.cards = cards;
  this.score = 0;
  this.game = game;


}

Player.prototype.countCorrectCards = function() {
  this.score += 1;
  if(this.score == 10 ) {
    win()
  } else if (this.score < 0) {
    loose()
  }

}


function win() {
  console.log("hola")
      $('#cardPile').css('background', 'red')
}

function loose() {
  
}
