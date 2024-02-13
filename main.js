document.addEventListener("DOMContentLoaded", function () {
  var greetingBttn = document.getElementById("greetingBttn");

  // adding an event for the button
  greetingBttn.addEventListener("click", function () {
    var newGreet = prompt("New greeting:");

    // Updating the greeting once you enter something in the box
    if (newGreet !== null && newGreet !== "") {
      document.getElementById("greeting").innerHTML = newGreet;
    }
  });
});
