// script.js
// Adds interactivity: mobile nav toggle, smooth scrolling, contact form handling

// Mobile navigation toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Close mobile nav when a link is clicked (nice UX)
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('show'));
});

// Smooth scroll for in-page links (works with scroll-behavior too but helps with offset)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const targetId = this.getAttribute('href');
    if(targetId === '#') return;
    const target = document.querySelector(targetId);
    if(!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
});

// Contact form handling: prevent actual network submit and open mailto as an option
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  // Build a mailto link so the user's email client opens with prefilled subject/body
  const mailto = `mailto:awnishkumarojha10@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
  // Open the default mail client
  window.location.href = mailto;
});

// Small utility: set current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll using IntersectionObserver for light animations
const reveals = document.querySelectorAll('.section, .card, .skill-card, .contact-card');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

reveals.forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});
