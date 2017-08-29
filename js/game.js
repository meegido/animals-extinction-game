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
      stack: '#content div',
      cursor: 'move',
      revert: true
    } );
  }
  console.log("done");
}

Game.prototype.addDrops = function() {
var extinctionDrop1 = [ "danger", "no-danger"];

  for( var i = 0; i < extinctionDrop1.length; i++ ) {
    $('<div>' + extinctionDrop1[i] + '</div>').data( 'drop', i ).attr( 'id', 'drop-'+ extinctionDrop1[i] ).appendTo( '#cardSlots1' ).droppable( {
      accept: '#content div',
      hoverClass: 'hovered',
      //drop: handleCardDrop
    } );
  }

  var extinctionDrop2 = ["extinct", "super"];
  for( var i = 0; i < extinctionDrop2.length; i++ ) {
    $('<div>' + extinctionDrop2[i] + '</div>').data( 'drop', i ).attr( 'id', 'drop-'+ extinctionDrop2[i] ).appendTo( '#cardSlots2' ).droppable( {
      accept: '#content div',
      hoverClass: 'hovered',
      //drop: handleCardDrop
    } );
  }
    console.log("done");
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
