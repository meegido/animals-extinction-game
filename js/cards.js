function Cards(animals, extinctionDrop, countCorrectCards, game, score) {
  this.animals = animals;
  this.extinctionDrop = ["extinguido", "en-peligro", "vulnerable", "riesgo-bajo"];
  this.countCorrectCards = countCorrectCards;
  this.game = game;
  this.score = score;
}

// Pintamos cartas de animales
Cards.prototype.addAnimalsPile = function(animals) {
  animals.sort( function() { return Math.random() - .5 } );

  for( var i = 2; i < this.animals.length; i++ ) {
    $('<div>' + '<p>' + this.animals[i].name + '</p>' + '</div>')
      .data( 'animal', this.animals[i].extintionStatus )
      .attr( 'id', 'animal-'+ this.animals[i].name )
      .appendTo( '#cardPile' )
      .css("background-image","url("+ this.animals[i].image +")")
      .css("background-size", "contain")
      .css('background-repeat', 'no-repeat')
      .css('background-position', 'center')
      .draggable( {
        containment: '#universe',
        stack: '#cardPile div',
        cursor: 'move',
        revert: true,
        tolerance: "touch",
        scope: this.animals[i].extintionStatus
      } );
  }
}
// Pintamos cajas donde metemos animales
Cards.prototype.addDrops = function(extinctionDrop) {
  for( var i = 0; i < this.extinctionDrop.length; i++ ) {
    $('<div>' + '<p>' + this.extinctionDrop[i] + '</p>' + '</div>')
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
      ui.draggable.position( {
        my: 'left top',
        at: 'left top' }
      );
      ui.draggable.draggable('option', 'revert', false);

      game.countCorrectCards();
      game.showScore();
    }

}
