var a = 0;
var b = 0;

function zvysitA() {
    a += 1;
    console.log(a);
  }
  
function zvysitB() {
    b += 1;
    console.log(b);
  }

function vypsatCisla() {
    var nasobek = a*b;

for (var i=1; i<=nasobek; i+=2) {
    console.log(i);
 }
}

function resetovat(){
    var a = 0;
    var b = 0;  
}