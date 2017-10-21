let counter = 0;
function storageAvailable(type) {
  let input = document.getElementById("movie").value;
  localStorage.setItem('movie' + counter, input);
  counter++;
}

function getFromStorage(){

  let list = document.getElementById("list");
  for (let i = 0; i < localStorage.length; i++){
    let listItem = document.createElement("li");
    listItem.innerHTML = localStorage.getItem('movie' + i);
    list.appendChild(listItem);
  }
}

let showMovies = document.getElementById("movieBtn");
showMovies.addEventListener("click", getFromStorage);
let inputMovies = document.getElementById("button");
inputMovies.addEventListener("click", storageAvailable);

let doOver = document.getElementById("clear");
doOver.addEventListener("click", function(){

  localStorage.clear();
});
