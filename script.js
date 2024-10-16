// Navbar.js

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector("ul");

  let isSticky = false;
  let isMobileMenuOpen = false;

  // Handle scroll to toggle sticky class
  window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
      if (!isSticky) {
        nav.classList.add("dark-nav");
        isSticky = true;
      }
    } else {
      nav.classList.remove("dark-nav");
      isSticky = false;
    }
  });

  // Toggle mobile menu
  menuIcon.addEventListener("click", function () {
    isMobileMenuOpen = !isMobileMenuOpen;
    menu.classList.toggle("hide-mobile-menu", !isMobileMenuOpen);
  });
});
