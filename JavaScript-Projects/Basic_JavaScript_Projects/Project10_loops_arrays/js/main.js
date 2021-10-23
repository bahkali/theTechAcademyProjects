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
