function toggleBackgroundColor() {
  document.body.classList.toggle("dark");
}

document
  .getElementById("toggleButton")
  .addEventListener("click", toggleBackgroundColor);
