function Cards(animals, extinctionDrop, countCorrectCards) {
  this.animals = animals;
  this.extinctionDrop = ["extinguidos", "peligro-exincion", "amenazados", "casi-amenazados"];
  this.countCorrectCards = countCorrectCards;
}

// Pintamos cartas de animales
Cards.prototype.addAnimalsPile = function(animals) {
  animals.sort( function() { return Math.random() - .5 } );

  for( var i = 0; i < this.animals.length; i++ ) {

//cuando genero el draggable le meto el background que cojo de las propiedades de animal
    $('<div>' + this.animals[i].name + '</div>')
      .data( 'animal', this.animals[i].extintionStatus )
      .attr( 'id', 'animal-'+ this.animals[i].name )
      .appendTo( '#cardPile' )
      .draggable( {
        containment: '#universe',
        stack: '#cardPile div',
        cursor: 'move',
        revert: true,
        scope: this.animals[i].extintionStatus
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
      scope: this.extinctionDrop[i],
      hoverClass: 'hovered',
      drop: this.handleCardDrop
    } );

  }
}


Cards.prototype.handleCardDrop = function(event, ui) {
  var slotBoxNumber = $(this).data( 'dropBox' );
  var animalCardNumber = ui.draggable.data( 'animal' );

  console.log($(this).data( 'dropBox' ))
  console.log( ui.draggable.data( 'animal' ))

  if(slotBoxNumber == animalCardNumber) {
      ui.draggable.addClass('correct');
      ui.draggable.draggable('disable');

console.log(this)
      ui.draggable.position( {
        my: 'left top',
        at: 'left top' }
      );

      ui.draggable.draggable('option', 'revert', false);

      player.countCorrectCards()
        // llamar a la función de count...,
    }

}
