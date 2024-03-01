/* ================================= */
/* :::::::: 1. Page Loader ::::::::: */
/* ================================= */

// https://github.com/ttcksf/woody-html-template/blob/50804222dd46ae963524da063a2b4e85e9616dc1/Woody%20-%20Template%20(Particles%20Animation)/js/main.js#L70
function mt_page_loader() {
  setTimeout(function () {
    const loaderIcon = document.querySelector(".loader-icon");
    if (loaderIcon) {
      loaderIcon.style.transition = "opacity 0.5s";
      loaderIcon.style.opacity = "0";
    }
  }, 500);

  setTimeout(function () {
    var pageLoader = document.getElementById("page-loader");
    if (pageLoader) {
      pageLoader.style.transition = "opacity 0.5s";
      pageLoader.style.opacity = "0";
    }
  }, 700);
}

function mt_image_background() {
  let imageBoxes = document.querySelectorAll(".image-box");

  imageBoxes.forEach(function (imageBox) {
    imageBox.style.backgroundImage = "url('./images/slides/background1.png')";
    imageBox.style.backgroundRepeat = "no-repeat";
    imageBox.style.backgroundSize = "cover";
    imageBox.style.backgroundPosition = "center center";
    imageBox.style.filter = "grayscale(40%)";
  });
}

mt_page_loader();
mt_image_background();
