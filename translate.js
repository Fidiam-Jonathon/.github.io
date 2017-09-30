let thingToMove = document.getElementById('stuff');
thingToMove.addEventListener("click", move);

function move(){
  thingToMove.classList.add("move");
}
