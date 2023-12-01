function vytvoritTabulku() {
  var pocetRadku = document.getElementById("pocet-radku").value;
  var pocetSloupcu = document.getElementById("pocet-sloupcu").value;

  var table = document.createElement("table");

  for (var i = 0; i < pocetRadku; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < pocetSloupcu; j++) {
      var cell = document.createElement("td");
      cell.textContent = (i * pocetSloupcu) + j + 1;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  document.body.appendChild(table);
}