const tables = document.getElementsByClassName("highlightable");

for (let i = 0; i < tables.length; i++) {
  const table = tables[i];
  table.addEventListener("mouseover", function () {
    this.classList.toggle("highlighted");
  });

  table.addEventListener("mouseout", function () {
    this.classList.remove("highlighted");
  });
}
