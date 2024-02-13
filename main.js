document.addEventListener("DOMContentLoaded", function () {
  let greetingBttn = document.getElementById("greetingBttn");

  // adding an event for the button
  greetingBttn.addEventListener("click", function () {
    let newGreet = prompt("New greeting:");

    // Updating the greeting once you enter something in the box
    if (newGreet !== null && newGreet !== "") {
      document.getElementById("greeting").innerHTML = newGreet;
    }
  });
});
