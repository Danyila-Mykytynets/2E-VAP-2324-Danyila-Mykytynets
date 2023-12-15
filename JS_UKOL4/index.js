let PopupWindow =document.createElement("popup");

class Osoba {
    constructor(jmeno, prijmeni, vek) {
      this.jmeno = jmeno;
      this.prijmeni = prijmeni;
      this.vek = vek;
    }
  
    toString() {
      return "Jméno: " + this.jmeno + ", Příjmení: " + this.prijmeni + ", Vek " + this.vek;
    }
  }
  
  var tlacitko = document.getElementById("tlacitko");
  tlacitko.addEventListener("click", function() {
    var jmeno = document.getElementById("jmeno").value;
    var prijmeni = document.getElementById("prijmeni").value;
    var vek = document.getElementById("vek").value;
  
    var osoba = new Osoba(jmeno, prijmeni, vek);
    console.log(osoba.toString());
  });