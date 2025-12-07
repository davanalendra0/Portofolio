const photo = document.querySelector(".about-photo");
const tooltip = document.getElementById("hoverTooltip");

photo.addEventListener("mousemove", (e) => {
    tooltip.textContent = photo.dataset.name;
    tooltip.style.left = e.clientX + 15 + "px";
    tooltip.style.top = e.clientY + 15 + "px";
    tooltip.style.opacity = 1;
});

photo.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 10) {
    header.style.background = "rgba(9, 10, 12, 0.55)";
  } else {
    header.style.background = "rgba(9, 10, 12, 0.4)";
  }
});
