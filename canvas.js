function draw() {
  let canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(50, 0);
  ctx.lineTo(100, 0);
  ctx.lineTo(75, 75);
  ctx.closePath();
  ctx.stroke();


}
draw();
