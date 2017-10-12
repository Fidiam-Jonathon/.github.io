let thingToMove = document.getElementById('stuff');
thingToMove.addEventListener("click", move);
let textToChange = document.getElementById("text");


function move(){
  thingToMove.classList.add("move");
  textToChange.innerHTML = "I moved!";

}

let img = document.getElementById("large");
let count = 0;
img.addEventListener("click", animate);

function animate(){
  if (count % 2 == 0){
      img.classList.add("makeLarge");
  }
  else{
    img.classList.add("makeSmall");
  }
  count++;
  console.log(count);
  console.log(count % 2);
}
