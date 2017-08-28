function DropContainer(extintionCategory) {
  this.extintionCategory = extintionCategory;
  this.animals = []
}



DropContainer.prototype.checkCoincidence = function(animal) {
  if(animal.extintionStatus === this.extintionCategory) {
      console.log("corresponde!")
  }
}

DropContainer.prototype.addAnimal = function(animal) {
  //push
}
