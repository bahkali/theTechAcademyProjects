// this function will display the full sentence
// after concatenation
function full_sentence() {
  var part_1 = "I have ";
  var part_2 = "made this ";
  var part_3 = "into a complete ";
  var part_4 = "sentence.";
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Slice Method
function slice_method() {
  var sentence = "All work and no play makes Johnny a dull boy.";
  var section = sentence.slice(27, 33);
  document.getElementById("Slice").innerHTML = section;
}
// UpperCase Method
// Search Method

//Convert Number to string method
function string_method() {
  var X = 182;
  document.getElementById("Number").innerHTML = X.toString();
}

// Function that display precision point of number
function precision_method() {
  var x = 12938.3012987376112;
  document.getElementById("Precision").innerHTML = x.toPrecision(10);
}
