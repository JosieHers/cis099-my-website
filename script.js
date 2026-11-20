const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {
  message.textContent = "I have finished three books this week! I am currently reading 'if only i had told her' by Laura Nowlin.";
});