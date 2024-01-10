//for hambergur menu
const mobile_nav = document.querySelector(".menu");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());
//for dropdown
// Get all the dropdown contents
const dropdownContent = document.querySelectorAll(".dropdown__contents");
// Get all the links
const openLinks = document.querySelectorAll(".dropdown .open-link");
// Get all the arrowIcons
const arrowIcon = document.querySelectorAll(".arrow-icon");

openLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Toggle show and rotate classes for the clicked link
    dropdownContent[index].classList.toggle("show");
    arrowIcon[index].classList.toggle("rotate");

    // remove show and rotate classes for other links and arrowIcon
    for (let i = 0; i < openLinks.length; i++) {
      if (i !== index) {
        dropdownContent[i].classList.remove("show");
        arrowIcon[i].classList.remove("rotate");
      }
    }
  });
});
