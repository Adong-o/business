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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.service-card, .step-card, .about-content, .contact-form');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-hidden');
        observer.observe(el);
    });
});

// Add this small CSS snippet to your styles.css for the animation
/*
.fade-in-hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-visible {
    opacity: 1;
    transform: translateY(0);
}
*/
