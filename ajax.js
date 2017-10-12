let button = document.getElementById("ajaxButton");

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
  let xml = new XMLHttpRequest();
  xml.onReadyStateChange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("story").innerHTML = this.responseText;
    }
  };
  xml.open("GET", "story1.txt");
  xml.send();
}

function getStoryPartTwo() {
  let xml = new XMLHttpRequest();
  xml.onReadyStateChange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("story").innerHTML = this.responseText;
    }
  };
  xml.open('GET', 'story2.txt');
  xml.send();
}
