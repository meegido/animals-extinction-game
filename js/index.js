
var cards = new Cards(animals);
var game = new Game(animals, cards, score);


$(document).ready(function(){
  game.startGame(animals, cards);
  $('.start').on('click', function() {
    game.countDown();
    game.win();
  });

});
