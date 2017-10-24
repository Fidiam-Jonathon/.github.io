let btn = document.getElementById("drawButton");
btn.addEventListener("click", draw);

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    // Tri-Force 1st triangle
    ctx.beginPath();
    for (var x = 0.5; x < 500; x += 10) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 375);
    }

    for (var y = 0.5; y < 375; y += 10) {
      ctx.moveTo(0, y);
      ctx.lineTo(500, y);
    }
    ctx.strokeStyle = "#eee";
    ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 40);
ctx.lineTo(240, 40);
ctx.moveTo(260, 40);
ctx.lineTo(500, 40);
ctx.moveTo(495, 35);
ctx.lineTo(500, 40);
ctx.lineTo(495, 45);

ctx.moveTo(60, 0);
ctx.lineTo(60, 153);
ctx.moveTo(60, 173);
ctx.lineTo(60, 375);
ctx.moveTo(65, 370);
ctx.lineTo(60, 375);
ctx.lineTo(55, 370);

ctx.strokeStyle = "#000";
ctx.stroke();

  }
}
