$(document).ready(function(){
  $( function() {
    $( "#draggable-element" ).draggable();
    $( "#droppable-element" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "DROPPED!" );
      }
    });
    });
});
