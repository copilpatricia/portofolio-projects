const arrowUpBtn = document.getElementById("arrow-up");

arrowUpBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 20) {
    arrowUpBtn.style.display = "block";
  } else {
    arrowUpBtn.style.display = "none";
  }
}
