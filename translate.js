let thingToMove = document.getElementById('stuff');
thingToMove.addEventListener("click", move);
let textToChange = document.getElementById("text");


function move(){
  thingToMove.classList.add("move");
  textToChange.innerHTML = "I moved!";

}
