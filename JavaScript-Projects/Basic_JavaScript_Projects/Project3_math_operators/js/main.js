function add_function() {
  let additon = 2 + 2;
  document.getElementById("mathP").innerHTML = "2 + 2= " + additon;
}

function subtract_function() {
  let subtract = 5 - 2;
  document.getElementById("mathS").innerHTML = "5 + 2= " + subtract;
}

function multiplication_function() {
  let multiplication = 6 * 8;
  document.getElementById("mathM").innerHTML = "6 x 8= " + multiplication;
}
function division_function() {
  let division = 48 / 6;
  document.getElementById("mathD").innerHTML = "48 / 6= " + division;
}

function modulus_function() {
  let modulus = 25 % 6;
  document.getElementById("mathU").innerHTML =
    "When you divide 25 by 6 you have a remainder of: " + modulus;
}
function increment_function() {
  var x = 5;
  x++;
  document.getElementById("countN").innerHTML = x;
}
function decrement_function() {
  var x = 5;
  x--;
  document.getElementById("countN").innerHTML = x;
}
