// Replace Text In Header
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

/**  Make the navigation bar change color when we scroll more than X pixels vertically
 * @param {int} startPixel Number of pixels when the navbar will change color
 * @param {string} colorChange Color of navbar background
 * */
function userScroll(startPixel, colorChange) {
    const navbar = document.querySelector('.navbar');
    // To Show or Hide the top button when we scroll
    const toTopBtn = document.querySelector('#to-top');

    window.addEventListener('scroll', () => {
        if(window.scrollY > startPixel) {
            navbar.classList.add(colorChange);           
            navbar.classList.add('navbar-sticky');
            toTopBtn.classList.add('show');
        } else {
            navbar.classList.remove(colorChange);           
            navbar.classList.remove('navbar-sticky');
            toTopBtn.classList.remove('show');
        }
    });
}

// Once the DOM id loaded the functions will be executed
document.addEventListener('DOMContentLoaded', userScroll(50, 'bg-dark'));