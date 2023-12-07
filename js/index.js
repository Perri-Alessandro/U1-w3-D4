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

// ESTRAGGO UN NUMERO CASUALE DA 1 A 76 E LO EVIDENZIO NEL TABELLONE
const estraiN = function () {
  const min = 1;
  const max = 76;
  let numeroRandom;
  do {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    // ESTRAGGO UN NUOVO NUMERO, FINCHè NON è STATO ESTRATTO IN PRECEDENZA
  } while (numeriEstratti.includes(numeroRandom));
  // ORA AGGIUNGO QUESTO NUMERO AD ARRAY CREATO INIZIALMENTE
  console.log("ATTUALMENTE è USCITO IL NUMERO:", numeroRandom);
  numeriEstratti.push(numeroRandom);
  // ORA DEVO MOSTRARE IL NUMERO ESTRATTO NELLA CELLA
  const cella = document.getElementById("cella" + numeroRandom);
  cella.classList.add("estratti");
  cella.textContent = numeroRandom;
  document.getElementById("numeroEstratto").textContent =
    "ULTIMO NUMERO ESTRATTO: " + numeroRandom;
};
