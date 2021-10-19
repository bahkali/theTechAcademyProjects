function my_dictionary() {
  var animal = {
    species: "Dog",
    color: "Black",
    Breed: "Labrador",
    Age: 5,
    Sound: "Bark!",
  };
  delete animal.Sound;
  document.getElementById("Dictionary").innerHTML = animal.Sound;
}
