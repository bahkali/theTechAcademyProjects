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

// Using This keyword to build an constructor function
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_function() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}