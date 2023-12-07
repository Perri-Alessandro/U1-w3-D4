// CREO IL TABELLONE
const numeriEstratti = [];
const creaTabellone = function () {
  const tabellone = document.getElementById("tabellone");
  for (let numeroCella = 1; numeroCella <= 76; numeroCella++) {
    const cella = document.createElement("div");
    cella.textContent = numeroCella;
    cella.classList.add("cella");
    cella.id = "cella" + numeroCella;
    tabellone.appendChild(cella);
  }
};
creaTabellone();
