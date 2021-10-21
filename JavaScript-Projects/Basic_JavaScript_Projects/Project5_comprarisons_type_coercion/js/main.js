// Using Coercion
document.writeln("234" + 56);

// Display typeof this value
document.writeln(typeof "Hello");

// This function display if value is NaN (not a number)
function my_function() {
  document.getElementById("Test").innerHTML = isNaN("This is a string");
}
// Display Large value (positive and negative)
document.getElementById("infinity").innerHTML = 2e310;
document.getElementById("Ninfinity").innerHTML = -3e310;

// Boolean
document.writeln(54 > 32);
document.writeln(43 > 1234);
// Display information into the console
console.log("Hello world!");
console.log(32 > 54);
// Display comparison using double equal sign
document.writeln(20 == 20);
document.writeln("Hello" == "Hell");
// Display comparison using triple equal sign for same data and data type
document.writeln(10 === 10);
document.writeln(20 === 3);
document.writeln("10" === 10);
document.writeln("hello" === "World");

// Boolean Operator
document.writeln(5 > 2 && 10 > 4);
document.writeln(14 > 7 || 54 > 74);
// Using Not Operator sign
function not_function() {
  document.getElementById("Not").innerHTML = !(20 > 10);
}
