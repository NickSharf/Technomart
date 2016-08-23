var link = document.querySelectorAll(".buy");
var popup = document.querySelector(".cart-wrapper");
var close = document.querySelector(".close-popup");

for(var i=0; i < link.length; i++) {
  link[i].addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("show-wrapper");
    popup.classList.remove("close-wrapper");
  }, false);
}

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("show-wrapper");
  popup.classList.add("close-wrapper");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("show-wrapper")) {
      popup.classList.remove("show-wrapper");
      popup.classList.add("close-wrapper");
    }
  }
});
