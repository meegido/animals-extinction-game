$(document).ready(function(){
  $( function() {
    $( "#draggable-element" ).draggable({
      // cursor: 'move',
      // revert: true
    });

    $( "#droppable-element" ).droppable({
      drop: function() {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "¡BIEN HECHO!" );
        }
      });
    });
});
