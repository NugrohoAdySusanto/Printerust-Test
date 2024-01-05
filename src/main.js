//animatin text
var textElemnet = document.getElementById("text");
var textArray = ["Hello", "Selamat Datang", "Selamat Berbelanja"];
text.innerHTML = textArray[0];
var counter = 1;
var animationInterval = 1500;
setInterval(animateText, animationInterval);

function animateText() {
  text.innerHTML = textArray[counter];
  counter++;
  if (counter >= textArray.length) {
    counter = 0;
  }
}

//slider
let start = 0;
otomatis();

function otomatis() {
  const sliders = document.querySelectorAll(".slider");

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  if (start >= sliders.length) {
    start = 0;
  }
  sliders[start].style.display = "block";
  start++;

  setTimeout(otomatis, 3000);
}
