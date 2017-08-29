function Game(animals, player) {
  this.animals = animals;
  this.player = player;
}


Game.prototype.addPile = function(animals) {
  animals.sort( function() { return Math.random() - .5 } );
  console.log(this.animals);

  for( var i = 1; i < this.animals.length; i++ ) {
    $('<div>' + this.animals[i].name + '</div>').data( 'animal', this.animals[i].name ).attr( 'id', 'animal-'+ this.animals[i].name ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }
  console.log("done");
}

Game.prototype.addDrops = function() {
var extinctionDrop = [ "danger", "no-danger", "extinct", "super" ];

  for( var i = 0; i < extinctionDrop.length; i++ ) {
    $('<div>' + extinctionDrop[i] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      //drop: handleCardDrop
    } );
  }
}


Game.prototype.startGame = function(animal) {
  //return animal.extintionStatus;
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  this.addPile(animals);
  this.addDrops();



}

Game.prototype.reStart = function() {

}

Game.prototype.checkCoincidence = function() {
  return animal.extintionStatus === true
}
