// Empty because no typed text is needed
console.log("JS Loaded");
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    alert("This feature is under construction");
  });
});
