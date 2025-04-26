 // DOM Elements
 const hamburger = document.querySelector('.hamburger');
 const navMenu = document.querySelector('.nav-menu');
 const navbar = document.querySelector('.navbar');
 const navLinks = document.querySelectorAll('.nav-link');
 const backToTop = document.getElementById('back-to-top');
 const expTabs = document.querySelectorAll('.exp-tab');
 const expPanels = document.querySelectorAll('.exp-panel');
 const awardTabs = document.querySelectorAll('.award-tab');
 const awardPanels = document.querySelectorAll('.award-panel');
 const contactForm = document.getElementById('contact-form');
 const successMessage = document.getElementById('success-message');
 
 // Mobile Menu Toggle
 hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     navMenu.classList.toggle('active');
 });
 
 // Close mobile menu when a nav link is clicked
 navLinks.forEach(link => {
     link.addEventListener('click', () => {
         hamburger.classList.remove('active');
         navMenu.classList.remove('active');
     });
 });
 
 // Navbar shadow on scroll
 window.addEventListener('scroll', () => {
     if (window.scrollY > 10) {
         navbar.classList.add('scrolled');
     } else {
         navbar.classList.remove('scrolled');
     }
     
     // Back to top button visibility
     if (window.scrollY > 300) {
         backToTop.classList.add('visible');
     } else {
         backToTop.classList.remove('visible');
     }
 });
 
 // Back to top functionality
 backToTop.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });
 
 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         if (targetId === '#') return;
         
         const targetElement = document.querySelector(targetId);
         if (targetElement) {
             const navbarHeight = navbar.offsetHeight;
             const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
             
             window.scrollTo({
                 top: targetPosition - navbarHeight,
                 behavior: 'smooth'
             });
         }
     });
 });
 
 // Experience tabs functionality
 expTabs.forEach(tab => {
     tab.addEventListener('click', () => {
         // Remove active class from all tabs and panels
         expTabs.forEach(t => t.classList.remove('active'));
         expPanels.forEach(p => p.classList.remove('active'));
         
         // Add active class to clicked tab
         tab.classList.add('active');
         
         // Display corresponding panel
         const tabId = tab.getAttribute('data-tab');
         document.getElementById(tabId).classList.add('active');
     });
 });
 
 // Awards tabs functionality
 awardTabs.forEach(tab => {
     tab.addEventListener('click', () => {
         // Remove active class from all tabs and panels
         awardTabs.forEach(t => t.classList.remove('active'));
         awardPanels.forEach(p => p.classList.remove('active'));
         
         // Add active class to clicked tab
         tab.classList.add('active');
         
         // Display corresponding panel
         const tabId = tab.getAttribute('data-tab');
         document.getElementById(tabId).classList.add('active');
     });
 });
 
 // Form submission
 contactForm.addEventListener('submit', function(e) {
     e.preventDefault();
     
     // Get form values (for future implementation)
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const subject = document.getElementById('subject').value;
     const message = document.getElementById('message').value;
     
     // Reset form
     contactForm.reset();
     
     // Show success message
     successMessage.classList.add('show');
     
     // Hide success message after 5 seconds
     setTimeout(() => {
         successMessage.classList.remove('show');
     }, 5000);
 });
 
 // Animation on scroll
 function revealOnScroll() {
     const sections = document.querySelectorAll('.section');
     const windowHeight = window.innerHeight;
     const revealPoint = 150;
     
     sections.forEach(section => {
         const sectionTop = section.getBoundingClientRect().top;
         if (sectionTop < windowHeight - revealPoint) {
             section.style.opacity = '1';
             section.style.transform = 'translateY(0)';
         }
     });
 }
 
 // Initialize animations
 window.addEventListener('DOMContentLoaded', () => {
     // Set initial styles for sections
     const sections = document.querySelectorAll('.section:not(.hero)');
     sections.forEach(section => {
         section.style.opacity = '0';
         section.style.transform = 'translateY(50px)';
         section.style.transition = 'all 0.8s ease';
     });
     
     // Check scroll position on load
     revealOnScroll();
 });
 
 // Run animation on scroll
 window.addEventListener('scroll', revealOnScroll);
 
 // Project card hover effect enhancement
 const projectCards = document.querySelectorAll('.project-card');
 projectCards.forEach(card => {
     card.addEventListener('mouseenter', function() {
         this.style.transform = 'translateY(-10px)';
         this.style.boxShadow = '0 10px 20px rgba(181, 104, 230, 0.2)';
     });
     
     card.addEventListener('mouseleave', function() {
         this.style.transform = 'translateY(0)';
         this.style.boxShadow = 'none';
     });
 });
 
 // Dynamic copyright year
 document.addEventListener('DOMContentLoaded', function() {
     const copyright = document.querySelector('.footer-copyright');
     const currentYear = new Date().getFullYear();
     copyright.innerHTML = `&copy; ${currentYear} Julian Collins. All rights reserved.`;
 });