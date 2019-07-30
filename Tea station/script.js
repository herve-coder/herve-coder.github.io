const navbtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navclose = document.getElementById("navclose");

navbtn.addEventListener("click", () => {
  navbar.classList.add("shownav");
});

navclose.addEventListener("click", () => {
  navbar.classList.remove("shownav");
});
