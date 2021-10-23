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

// Display String Length
function stringLength_function() {
  var str = "Quality is everyone's responsibility.";
  document.getElementById("StringLength").innerHTML =
    "This quote has " + str.length + " Characters.";
}

// Function to display item using For loop
function for_loop() {
  const ItemList = ["Banana", "Appel", "Berries"];
  let result = "";
  for (i = 0; i < ItemList.length; i++) {
    result += ItemList[i] + "<br>";
  }
  document.getElementById("List_of_foods").innerHTML = result;
}

// Display Array Function
function array_function() {
  var cat_picture = ["sleeping", "playing", "eating", "purring"];
  document.getElementById("Cat").innerHTML =
    "In this picture, the cat is " + cat_picture[2] + ".";
}

// Using Const Keyword in this function
// NO the change variable.
function constant_function() {
  const musical_instrument = {
    type: "guitar",
    brand: "Fender",
    color: "black",
  };
  musical_instrument.color = "blue";
  musical_instrument.price = "$900";
  document.getElementById("constant").innerHTML =
    "The cost of the " +
    musical_instrument.type +
    " was " +
    musical_instrument.price;
}
// Dislplay Let Keyword value
var x = "Hello this is var keyword";
document.writeln("<br>" + x);
{
  let x = "Hello this is let keyword.";
  document.writeln("<br>" + x);
}
document.writeln("<br>" + x + "<br><br>");

// Using Object
let car = {
  make: "Nissan",
  model: "Sonatra",
  year: "2014",
  color: "grey",
  description: function () {
    return (
      "The car is a " +
      this.year +
      " " +
      this.color +
      " " +
      this.make +
      " " +
      this.model
    );
  },
};
document.getElementById("car_object").innerHTML = car.description();
