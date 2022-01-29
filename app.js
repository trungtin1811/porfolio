const $ = document.querySelector.bind(document);

window.onload = function () {
  setTimeout(preload, 1000);
};

function preload() {
  $("#preload").style.display = "none";
  $("#main").style.display = "block";
  console.log($("#preloading"));
}
