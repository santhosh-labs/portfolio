// Hamburger Menu Logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// Parallax Effect for Stickers
const stickers = document.querySelectorAll('.sticker');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    stickers.forEach((sticker, index) => {
        // Vary the speed based on index so they move differently
        const speed = (index + 1) * 20; 
        
        const moveX = (x * speed) - (speed / 2);
        const moveY = (y * speed) - (speed / 2);
        
        // Preserve original rotation by reading inline style if possible, 
        // but for simplicity we'll just add the translation to the base transform
        sticker.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    });
});

document.addEventListener('mouseleave', () => {
    stickers.forEach(sticker => {
        sticker.style.transform = `translate(0px, 0px)`;
    });
});

// Reveal Animations on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply initial state and observe all cards and section headers
const animatedElements = document.querySelectorAll('.card, .section-header, .timeline-item');

animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
});
