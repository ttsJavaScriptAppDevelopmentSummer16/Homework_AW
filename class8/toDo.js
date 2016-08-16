
var inputs = document.querySelector('input');

var firstButton = document.querySelector('button');
var list = document.querySelector('ul');
var listItem = document.querySelector('li');
var itemLIst = document.querySelector('ul');

firstButton.addEventListener('click', function(event){
  var newLI = document.createElement('li');
  newLI.innerHTML = inputs.value;
  list.appendChild(newLI);
  console.log(inputs);
  inputs.value = "";
})

itemLIst.addEventListener('click', function(event) {
  event.target.remove();
  console.log('clicked');
})
