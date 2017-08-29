function Game(animals, player) {
  this.animals = animals;
  this.player = player;
}


Game.prototype.addAnimalsPile = function(animals) {
  animals.sort( function() { return Math.random() - .5 } );


  for( var i = 1; i < this.animals.length; i++ ) {
    var grades = Math.random() * 45;

    $('<div>' + this.animals[i].name + '</div>')
      .data( 'animal', this.animals[i].checkControl )
      .attr( 'id', 'animal-'+ this.animals[i].name )
      .appendTo( '#cardPile' )
      .draggable( {
        containment: '#universe',
        stack: '#cardPile div',
        cursor: 'move',
        revert: true
      } );
  }

}

Game.prototype.addDrops = function() {
var extinctionDrop = [ "extinct", "super-danger", "danger", "no-danger"  ];

  for( var i = 0; i < extinctionDrop.length; i++ ) {
    $('<div>' + extinctionDrop[i] + '</div>')
      .data( 'dropBox', i )
      .attr( 'class', 'col-md-3' )
      .appendTo( '#cardSlots' )
      .droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );

  }
}

function handleCardDrop(event, ui) {
  var slotBoxNumber = $(this).data( 'number' );
  var animalCardNumber = ui.draggable.data( 'number' );
  correctCards = 0;

  if ( slotBoxNumber === animalCardNumber ) {
      ui.draggable.addClass( 'correct' );
      ui.draggable.draggable( 'disable' );

      $(this).droppable( 'disable' );

      ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
      ui.draggable.draggable( 'option', 'revert', false );

      correctCards++;
    }
}


Game.prototype.startGame = function(animal) {
  //return animal.extintionStatus;

  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  this.addAnimalsPile(animals);
  this.addDrops();



}

Game.prototype.reStart = function() {

}

Game.prototype.checkCoincidence = function() {
  return animal.extintionStatus === true
}
