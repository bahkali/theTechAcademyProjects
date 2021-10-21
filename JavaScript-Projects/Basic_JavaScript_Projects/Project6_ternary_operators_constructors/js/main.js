// Function Using Ternary to determine if value condition is true or false
function Ride_function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Function to determine if you are elligable to vote
function Vote_function() {
  var Vote, Can_vote;
  Vote = document.getElementById("Age").value;
  Can_vote = Vote < 18 ? "You are not old enough to vote" : "You can vote!";
  document.getElementById("Vote").innerHTML = Can_vote;
}
