let b = document.getElementById("button");
let xml = new XMLHttpRequest();
xml.open("GET", "https://restcountries.eu/rest/v2/all", true);
xml.onload = populate;

b.addEventListener("click", ajax);
function ajax(){
xml.send();

}

function populate(){
  let temp = JSON.parse(xml.responseText);
  let table = document.getElementById("table");

  for (let i = 0; i < temp.length; i++){
    let row = table.insertRow(i + 1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = temp[i].name;
    cell2.innerHTML = temp[i].alpha2Code;
  }
}
