var player = new Player();
var game = new Game(animals, player);


$(document).ready(function(){

  $( function() {
    $( "#extinted, #danger-specie" ).draggable({
      cursor: 'move',
      snap: "#danger"
    });

    $( "#danger" ).droppable({
      accept: "#danger-specie",
      drop: function(event, ui) {
        console.log(ui);
        }
      });
    });
});
