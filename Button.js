// Get the button element
const button = document.querySelectorAll(".marvelous-button");

// Add a click event listener
button.addEventListener("click", function() {
  // Add the animate-click class
  button.classList.add("animate-click");

  // Remove the class after the animation finishes
  setTimeout(function() {
    button.classList.remove("animate-click");
  }, 300); // 300ms is the duration of the animation
});
