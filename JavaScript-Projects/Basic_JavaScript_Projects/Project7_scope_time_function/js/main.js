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
