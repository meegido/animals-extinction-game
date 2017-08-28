
$(document).ready(function(){
  $( function() {
    $( ".leon, .lince" ).draggable({
      cursor: 'move'
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

//Esta comprobación va al final de cada drag
// Animal.prototype.checkCoincidence = function(animal, dropContainer) {
//   return animalLince.extintionStatus === container1.categoryStatus
// }
