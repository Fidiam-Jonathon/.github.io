let blank_button_event = document.getElementById("blank_button");
blank_button_event.addEventListener("click", function() {

  if (!document.getElementById("blank_p")){
    let blank_p = document.createElement("div");
    blank_p.id = "blank_p";
    blank_p.innerHTML = "I just appeared out of nowhere!";
    let append = document.getElementById("blank_button");
    append.before(blank_p);
  }


});

let seq_button = document.getElementById("table_button");
seq_button.addEventListener("click", function() {
  let num3 = document.createElement('td');
  num3.innerHTML = "3";
  let table_seq = document.getElementById("numbers");
  if (table_seq.cells.length < 10)
    table_seq.insertBefore(num3, table_seq.children[2]);
});
