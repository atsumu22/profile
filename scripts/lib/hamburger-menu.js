const isTouchable = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch);
const hamburger = document.querySelector(".hamburger")
const hidden_menu = document.querySelector(".hamburger-hidden")
const hidden_bg = document.querySelector(".background-hidden")
const navbar = document.querySelector(".navbar")
const link_tags = document.querySelectorAll(".link-tag")

if (isTouchable) {
  hamburger.addEventListener("touchstart", (event) => {
    event.currentTarget.classList.toggle('menu-open');
    hidden_menu.classList.toggle('menu-open');
    navbar.classList.toggle('menu-open');
  });
} else {
  hamburger.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle('menu-open');
    hidden_menu.classList.toggle('menu-open');
    navbar.classList.toggle('menu-open');
  });
}

link_tags.forEach((tag) => {
  tag.addEventListener("click", (event) => {
    hidden_menu.classList.remove('menu-open');
    hidden_bg.classList.remove('menu-open');
    hamburger.classList.remove('menu-open');
    navbar.classList.remove('menu-open');
  });
});
