var lince = new Animal;
var tigre = new Animal;
var dropLince = new DropContainer;
var dropTigre = new DropContainer;
var player1 = new Player;



$(document).ready(function(){
  $( function() {
    $( "#draggable-element" ).draggable({
      cursor: 'move',
      revert: function() {
        return false;
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

//Esta comprobación va al final de cada drag
// Game.prototype.checkCoincidence = function(animal, container) {
//   return animalLince.extintionStatus === container1.categoryStatus
// }
