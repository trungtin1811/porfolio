const $ = document.querySelector.bind(document);

window.onload = function () {
  setTimeout(preload, 1000);
};

function preload() {
  $("#preload").classList.add("mask-disactive");
  $("#main").classList.add('body-active');
  console.log($("#preloading"));
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal-active");
    } else {
      reveals[i].classList.remove("reveal-active");
    }
  }
}

window.addEventListener("scroll", reveal);
