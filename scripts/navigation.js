window.addEventListener("load", (event) => {
  let navHamburger = document.querySelector(".nav__hamburger");
  let navBar = document.querySelector(".nav__bar");
  let hamburgerSvgBtn = document.querySelector(".hamburger");
  let isClicked = false;

  navHamburger.addEventListener("click", (event) => {
    if (!isClicked) {
      navBar.classList.add("nav__bar--drop-menu");
      hamburgerSvgBtn.classList.add("hamburger--cross");
      isClicked = true;
    } else {
      navBar.classList.remove("nav__bar--drop-menu");
      hamburgerSvgBtn.classList.remove("hamburger--cross");
      isClicked = false;
    }
  });
});
