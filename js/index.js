var player = new Player();
var cards = new Cards(animals);
var game = new Game(animals, player, cards);


$(document).ready(function(){
  game.startGame(animals, cards);
});
