let button = document.getElementById("ajaxButton");
let xml1 = null;
let xml2 = null;
let count = 0;
button.addEventListener("click", pickStory);


function pickStory() {
  switch (count) {
    case 0:
      getStoryPartOne();
      count++;
      break;
    case 1:
      let pic = document.getElementById("pic").src = "floyd.jpg";
      document.getElementById("heading").innerHTML = "Hello, my name is Floyd";
      document.getElementById("story").innerHTML = "I'm much better than that other guy!";
      document.getElementById("ajaxButton").innerHTML= "Learn about Floyd";
      count++;
      break;
    case 2:
      getStoryPartTwo();
      count++;
      break;
    default:
      document.getElementById("story").innerHTML = "the story is over =(";
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
  document.getElementById("story").innerHTML = xml1.responseText;
  console.log(xml1.responseText);
}

function getStoryPartTwo() {
  xml2 = new XMLHttpRequest();
  xml2.onload = putStoryTwo;
  xml2.open('GET', 'story2.txt', true);
  xml2.send();
}

function putStoryTwo() {
  document.getElementById("story").innerHTML = xml2.responseText;
  console.log(xml2.responseText);
}
