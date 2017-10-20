let counter = 0;
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
  let input = document.getElementById("movie").value;

  localStorage.setItem('movie' + counter, input);
  counter++;
}
else {
  alert("LocalStorage is not available")
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
