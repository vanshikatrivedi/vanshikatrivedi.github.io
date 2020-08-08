
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

      const navToggle = document.querySelector('.nav-toggle');
      const navLinks = document.querySelectorAll('.nav__link')
      
      navToggle.addEventListener('click', () => {
          document.body.classList.toggle('nav-open');
      });
      
      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              document.body.classList.remove('nav-open');
          })
      })

      //typing effect
      //smart backspacing

    
      

      