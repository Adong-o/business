document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Navigation (Hamburger Menu)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // 2. Navbar Shadow on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // 3. Smooth Scrolling for Anchor Links
    // This is handled by CSS `scroll-behavior: smooth;` in the new stylesheet.

    // 4. Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would send this data to a server.
            alert('Thank you for your message! We will be in touch shortly.');
            contactForm.reset();
        });
    }

    // 5. Fade-in Animation on Scroll
    const fadeInElements = document.querySelectorAll('.fade-in');

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(el => {
        fadeInObserver.observe(el);
    });
});
