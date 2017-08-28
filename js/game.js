var game = new Game(animals);
var player = new Player();


$(document).ready(function(){

  $( function() {
    $( ".leon, .lince" ).draggable({
      cursor: 'move',
      snap: "#droppable-element"
    });

    $( "#droppable-element" ).droppable({
      accept: ".leon",
      drop: function(event) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "¡BIEN HECHO!" );
        }
      });
    });
});
