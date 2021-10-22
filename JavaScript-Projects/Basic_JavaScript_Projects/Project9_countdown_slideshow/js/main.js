// Countdown Function using input form users
function Countdown() {
  var seconds = document.getElementById("seconds").value;
  var timer = document.getElementById("timer");
  function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    var time = setTimeout(tick, 1000);
    if (seconds == -1) {
      alert("Time's up!");
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
  tick();
}
