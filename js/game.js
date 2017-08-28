var lince = new Animal("lince", "inDanger");
var leon = new Animal("leon", "notDanger");
var inDangerContainer = new DropContainer("inDanger");




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
