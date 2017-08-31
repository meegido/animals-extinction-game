var player = new Player();
var cards = new Cards(animals);
var game = new Game(animals, player, cards, player.score);


$(document).ready(function(){
  game.startGame(animals, cards, player.score);


  // var counter = 10;
  //
  // function timmerDown() {
  //   console.log("hola", counter)
  //   counter --
  //   if(counter < 0) {
  //     clearInterval(timer)
  //   }
  // }
  //
  // var timer = setInterval(timmerDown, 1000);

});
