$(document).ready(function(){
  $( function() {
    $( "#draggable-element" ).draggable({
      cursor: 'move',
      revert: function() {
        return true;
      }
    });

    $( "#droppable-element" ).droppable({
      drop: function(event) {
        console.log(event)
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "¡BIEN HECHO!" );
        }
      });
    });
});
