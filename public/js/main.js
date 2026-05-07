document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
});
function initializeEventListeners() {
    initializeSmoothScrolling();
    initializeIntersectionObserver();
    initializeCTAButtons();
    initializeLogoClick();
}
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
function initializeIntersectionObserver() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    document.querySelectorAll('.phase-card, .stat-card, .mission-item').forEach(el => {
        observer.observe(el);
    });
}
function initializeCTAButtons() {
    document.querySelectorAll('.cta-button, .secondary-button').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent.trim());
        });
    });
}
function initializeLogoClick() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = '/';
        });
    }
}
