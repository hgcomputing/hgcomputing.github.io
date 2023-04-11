function updateTime() {
  let now = new Date();
  let utcString = now.toUTCString();
  document.getElementById('utc-clock').innerHTML = utcString.slice(5, -4);
}

setInterval(updateTime, 1000);

let isDragging = false;
let dragStartX;
let dragStartY;
let postIt = document.getElementById("post-it");

postIt.addEventListener("mousedown", function(e) {
  isDragging = true;
  dragStartX = e.clientX - postIt.offsetLeft;
  dragStartY = e.clientY - postIt.offsetTop;
});

postIt.addEventListener("mouseup", function(e) {
  isDragging = false;
});

postIt.addEventListener("mousemove", function(e) {
  if(isDragging) {
    postIt.style.top = (e.clientY - dragStartY) + "px";
    postIt.style.left = (e.clientX - dragStartX) + "px";
  }
});
