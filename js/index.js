var player = new Player();
var cards = new Cards(animals);
var game = new Game(animals, player, cards, player.score);


$(document).ready(function(){
  game.startGame(animals, cards, player.score);
});
