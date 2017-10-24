
let start = 0;
let element = document.getElementById("animate");

function step(timestamp) {
  if (!start) start = timestamp;
  let progress = timestamp - start;
  element.style.left = Math.random() * 50 +'px';
  element.style.top = Math.random() * 50 + 'px';
  if (progress < 2500) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
