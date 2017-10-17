let btn = document.getElementById("drawButton");
btn.addEventListener("click", draw);

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    // Tri-Force 1st triangle
    ctx.beginPath();
    ctx.moveTo(25, 50);
    ctx.lineTo(100, Math.random() * 10);
    ctx.lineTo(Math.random() * 50, 150);
    ctx.lineTo(25, 50);
    ctx.stroke();
  }
}
