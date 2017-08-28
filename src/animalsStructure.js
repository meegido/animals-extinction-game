function Animal(name, extintionStatus, isCorrect) {
  this.name = name,
  this.image = image,
  this.extintionStatus = extintionStatus,
  this.region = region,
  this.threats = threats,
  this.isCorrect = false;
}


Animal.prototype.dragAnimal = function() {
  var linceDraggable = $(".lince");
  var leonDraggable = $(".leon");
//tengo que poder coger un animal o div en el dom con id dentro de la función droppable.
}
