
//button to toggle the theme

let body = document.querySelector('body');
      function toggleTheme() {
        if (body.className == 'default') {
          body.className = 'dark';
        } else {
          body.className = 'default';
        }
      }

//navigation functions

let nav = document.querySelector('.nav');
let menuOpen = false;
function toggleNav(){
  if (!menuOpen){
    nav.style.transform = `translateX(-100%)`
    menuOpen = !menuOpen;
  }
  else{
    nav.style.transform = `translateX(0)`
    menuOpen = !menuOpen;
  }
}




    
      

      