//button to toggle the theme

let body = document.querySelector("body");
function toggleTheme() {
  if (body.className == "default") {
    body.className = "dark";
  } else {
    body.className = "default";
  }
}

//navigation functions

let nav = document.querySelector(".nav");
let menuOpen = false;
function toggleNav() {
  if (!menuOpen) {
    nav.style.transform = `translateX(-100%)`;
    menuOpen = !menuOpen;
  } else {
    nav.style.transform = `translateX(0)`;
    menuOpen = !menuOpen;
  }
}



let typed = new Typed('.section__subtitle--intro p', {
  strings: ['a coder girl :) ^1000', 'front-end dev ^1000'],
  smartBackspace: false, 
  typeSpeed: 40,
  backSpeed: 30,
  cursorChar: '',
  shuffle: true,
  loop: true,
});