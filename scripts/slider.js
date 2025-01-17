let imgSlideIndex = 1;
imgAutoSlider();
function imgAutoSlider() {
  let i;
  let slides = document.getElementsByClassName("image-slide");
  for (i = 0; i < slides.length; i++) {
    console.log(slides[i]);
    slides[i].style.display = "none";
  }
  imgSlideIndex = imgSlideIndex + 1;
  if (imgSlideIndex > slides.length) {
    imgSlideIndex = 1;
  }
  slides[imgSlideIndex - 1].style.display = "block";
  setTimeout(imgAutoSlider, 3000);
}
