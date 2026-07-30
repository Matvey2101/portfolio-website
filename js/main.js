const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("back-to-top--show");
  } else {
    backToTop.classList.remove("back-to-top--show");
  }
});

const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".header__nav-link");

overlay.addEventListener("click", function () {
  nav.classList.remove("header__nav--active");
  burger.classList.remove("header__burger--active");
  overlay.classList.remove("overlay--active");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const linkAddress = link.getAttribute("href");

    nav.classList.remove("header__nav--active");
    burger.classList.remove("header__burger--active");
    overlay.classList.remove("overlay--active");

    setTimeout(function () {
      window.location.href = linkAddress;
    }, 300);
  });
});

burger.addEventListener("click", function () {
  nav.classList.toggle("header__nav--active");
  burger.classList.toggle("header__burger--active");
  overlay.classList.toggle("overlay--active");
});
