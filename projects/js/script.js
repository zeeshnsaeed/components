function handleMouseEnter() {
  const element = document.querySelector(".pro__img_1");
  element.style.transform = "translateY(-70%)";
  element.style.transition = "transform 6s ease-in-out";
}

function handleMouseLeave() {
  const element = document.querySelector(".pro__img_1");
  element.style.transform = "translateY(0%)";
  element.style.transition = "transform 6s ease-in-out";
}
