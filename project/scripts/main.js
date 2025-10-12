document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const yearSpan = document.getElementById('year');


  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('show');

      
      if (navLinks.classList.contains('show')) {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
      } else {
        navLinks.style.maxHeight = null;
      }
    });
  }

 
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  
  const hour = new Date().getHours();
  const message = hour < 12 ? "Good morning, anime lover!" : "Good evening, anime fan!";
  console.log(message);
});