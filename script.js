window.addEventListener("scroll", function(e) {
  const target = document.querySelector(".scroll");

  let posX = window.pageYOffset * target.dataset.ratex;
  let posY = window.pageYOffset * target.dataset.ratey;
  target.style.transform = "translate3d(" + posX + "px, " + posY + "px, 0px)";
});
