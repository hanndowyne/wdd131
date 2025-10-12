document.addEventListener("DOMContentLoaded", () => {
 
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});


document.getElementById('year').textContent = new Date().getFullYear();

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const hour = new Date().getHours();
  const message = hour < 12 ? "Good morning, anime lover!" : "Good evening, anime fan!";
  console.log(message);
});