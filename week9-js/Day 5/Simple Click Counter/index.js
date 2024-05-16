document.getElementById("clickButton").addEventListener("click", updateCounter);

function updateCounter() {
  const currentCount = parseInt(document.getElementById("counter").textContent);
  document.getElementById("counter").textContent = currentCount + 1;
}
