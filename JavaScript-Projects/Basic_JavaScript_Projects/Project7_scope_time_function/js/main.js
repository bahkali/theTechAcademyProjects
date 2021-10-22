// Global variable
var x = 10;
function add_num_1() {
  console.log(20 + x);
}
function add_num_2() {
  console.log(x + 100);
}
add_num_1();
add_num_2();

// Local Varialble
function add_num_3() {
  var y = 10;
  console.log(20 + y);
}
function add_num_4() {
  console.log(y + 100);
}
add_num_3();
add_num_4();

// IF Statement
function get_date() {
  if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
  }
}
//  Else Statement
function Age_function() {
  var Age = document.getElementById("Age").value;
  if (Age >= 18) {
    Vote = "You are old enough to vote!";
  } else {
    Vote = "You are not old enough to vote!";
  }
  document.getElementById("how_old_are_you").innerHTML = Vote;
}

// Else If Statemet
function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  } else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon.";
  } else {
    Reply = " It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}
