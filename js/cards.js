function Cards(animals) {
  this.animals = animals;
}

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

Cards.prototype.addDrops = function() {
var extinctionDrop = [ "extinct", "super-danger", "danger", "no-danger"  ];

  for( var i = 0; i < extinctionDrop.length; i++ ) {
    $('<div>' + extinctionDrop[i] + '</div>')
      .data( 'dropBox', extinctionDrop[i] )
      .attr( 'class', 'col-md-3' )
      .appendTo( '#cardSlots' )
      .droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: this.handleCardDrop()
    } );

  }
}


Cards.prototype.handleCardDrop = function(event, ui) {
  var slotBoxNumber = $(this).data( 'number' );
  var animalCardNumber = ui.draggable.data( 'number' );

  console.log(ui)
  if(slotBoxNumber == animalCardNumber) {
    correctCards = 0;

      ui.draggable.addClass('correct');
      ui.draggable.draggable('disable');

      //con disable desactivado en el droppable, puedo meter los que quiera
      //$(this).droppable('disable');

      //con this.animal[i] puedo meterlos
      //(porque creo que hace un top y left para cada uno)
      //y no se solapan pero no pilla el scope de animal y da error de consola.
      ui.draggable.position( { of: $(this.animals), my: 'left top', at: 'left top' } );

      ui.draggable.draggable('option', 'revert', false);

      correctCards ++;
    }
}
