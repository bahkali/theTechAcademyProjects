// using the while loop
function Call_loop() {
  var msg = "";
  var x = 1;
  while (x < 11) {
    msg += "<br>" + x;
    x++;
  }
  document.getElementById("Loop").innerHTML = msg;
}
