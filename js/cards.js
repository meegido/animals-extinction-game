function Cards(animals, extinctionDrop) {
  this.animals = animals;
  this.extinctionDrop = ["extinct", "super-danger", "danger", "no-danger"];
}

// Pintamos cartas de animales
Cards.prototype.addAnimalsPile = function(animals) {
  animals.sort( function() { return Math.random() - .5 } );

  for( var i = 1; i < this.animals.length; i++ ) {
    var grades = Math.random() * 45;

    $('<div>' + this.animals[i].name + '</div>')
      .data( 'animal', this.animals[i].extintionStatus )
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

// Pintamos cajas donde metemos animales
Cards.prototype.addDrops = function(extinctionDrop) {
  for( var i = 0; i < this.extinctionDrop.length; i++ ) {
    $('<div>' + this.extinctionDrop[i] + '</div>')
      .data( 'dropBox', this.extinctionDrop[i] )
      .attr( 'class', 'col-md-3' )
      .appendTo( '#cardSlots' )
      .droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: this.handleCardDrop
    } );

  }
}


Cards.prototype.handleCardDrop = function(event, ui) {
//console.log(event,ui);

  var slotBoxNumber = $(this).data( 'dropBox' );
  var animalCardNumber = ui.draggable.data( 'animal' );

  console.log($(this).data( 'dropBox' ))
  console.log( ui.draggable.data( 'animal' ))

  if(slotBoxNumber == animalCardNumber) {
      ui.draggable.addClass('correct');
      ui.draggable.draggable('disable');

      $(this).droppable( 'disable' );

      ui.draggable.position( {
        of: $(this.animals),
        my: 'left top',
        at: 'left top' }
      );

      ui.draggable.draggable('option', 'revert', false);

      correctCards ++;
    }
}
