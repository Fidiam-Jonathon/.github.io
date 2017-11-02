function setupHandlers() {
  var el = document.getElementById("wrapper");
  el.addEventListener("touchstart", handleStart);
  el.addEventListener("touchend", handleEnd);
  el.addEventListener("touchcancel", handleCancel);
  el.addEventListener("touchmove", handleMove);
}
setupHandlers();

let x = 0;

function handleStart(evt) {
  x = evt.targetTouches[0].clientX;
}

function handleEnd(evt) {
  x = 0;
}

function handleCancel(evt) {
  x = 0;
}

function handleMove(evt) {
  evt.preventDefault();

  if (evt.targetTouches[0].clientX > (x + 150)) {
    storyForward();
    x = evt.targetTouches[0].pageX;
  } else if (evt.targetTouches[0].clientX < (x - 150)) {
    storyBackward();
    x = evt.targetTouches[0].pageX;
  }

}

let xml1 = null;
let xml2 = null;
let count = 0;


function storyForward() {

  switch (count) {
    case 0:
      let pic0 = document.getElementById("pic").src = "smoothie.jpg";
      document.getElementById("heading").innerHTML = "Hello, my name is Smoothie";
      getStoryPartOne();
      count++;
      break;
    case 1:
      let pic1 = document.getElementById("pic").src = "floyd.jpg";
      document.getElementById("heading").innerHTML = "Hello, my name is Floyd";
      document.getElementById("story").innerHTML = "I'm much better than that other guy!";
      count++;
      break;
    case 2:
      getStoryPartTwo();
      count++;
      break;
    default:
      let pic = document.getElementById("pic").src = "smoothie.jpg";
      document.getElementById("heading").innerHTML = "Hello, my name is Smoothie";
      document.getElementById("story").innerHTML = "I can't wait to tell you about myself!";
      count = 0;
      break;

  }
}

function getStoryPartOne() {
  xml1 = new XMLHttpRequest();
  xml1.onload = putStoryOne;
  xml1.open("GET", "story1.txt", true);
  xml1.send();
}

function putStoryOne() {
  let el = document.getElementById("story");
  el.innerHTML = xml1.responseText;
  el.classList.add("slideIn");

}

function getStoryPartTwo() {
  xml2 = new XMLHttpRequest();
  xml2.onload = putStoryTwo;
  xml2.open('GET', 'story2.txt', true);
  xml2.send();
}

function putStoryTwo() {
  let el = document.getElementById("story");
   el.classList.remove("slideIn");
  el.innerHTML = xml1.responseText;
  el.classList.add("slideIn");

}

function storyBackward() {
  count -= 2;
  storyForward();
}
