window.onscroll = function() {scrolllock()};

var line = document.getElementById("myHeader");
var line1 = line.offsetTop;

function scrolllock() {
  if (window.pageYOffset > line1) {
    line.classList.add("lock");
  } else {
    line.classList.remove("lock");
  }
}

function expand() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
  }
