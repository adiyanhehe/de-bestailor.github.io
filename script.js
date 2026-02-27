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