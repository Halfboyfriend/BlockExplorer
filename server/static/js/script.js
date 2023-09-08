const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navItemEls = document.querySelectorAll('.nav__item');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navItemEls.forEach(navItemEl => {
  navItemEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
  });
});



// ANIMATIONS
// window.addEventListener('scroll', function () {
//   const hidden = document.querySelector('.hidden');
//   const hiddenHeight = hidden.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight;

//   console.log(hiddenHeight);
//   console.log(windowHeight);

//   if (hiddenHeight < windowHeight){
//     hidden.classList.add('show');
//   }else {
//     hidden.classList.remove('show');
//   }
// })


document.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  
  sections.forEach(function(section) {
    var rect = section.getBoundingClientRect();
    var isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
      section.classList.add('section-animation');
    } else {
      section.classList.remove('section-animation');
    }
  });
});
