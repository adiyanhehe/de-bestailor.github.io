const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.port-item, .location-card').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)";
    observer.observe(item);

});

const menuBtn = document.getElementById('menuBtn');
const mobileOverlay = document.getElementById('mobileOverlay');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileOverlay.classList.toggle('active');
        // Optional: Animate the hamburger to an 'X'
        menuBtn.classList.toggle('is-active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
    });
});
