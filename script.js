// Scroll Animations
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(3, 26, 36, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(3, 26, 36, 0.85)';
        header.style.boxShadow = 'none';
    }
});

// Custom Cursor Trail Effect (Optional extra for professional feel)
// We already have a CSS cursor set, but this adds a subtle interactive trailing dot
const trail = document.createElement('div');
trail.style.position = 'fixed';
trail.style.width = '10px';
trail.style.height = '10px';
trail.style.backgroundColor = 'var(--accent-1)';
trail.style.borderRadius = '50%';
trail.style.pointerEvents = 'none';
trail.style.zIndex = '9998';
trail.style.transition = 'transform 0.1s ease-out, width 0.2s, height 0.2s';
trail.style.transform = 'translate(-50%, -50%)';
trail.style.opacity = '0.5';
document.body.appendChild(trail);

document.addEventListener('mousemove', (e) => {
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
});

const interactiveElements = document.querySelectorAll('a, button, input, textarea');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        trail.style.width = '30px';
        trail.style.height = '30px';
        trail.style.backgroundColor = 'var(--accent-2)';
        trail.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
        trail.style.width = '10px';
        trail.style.height = '10px';
        trail.style.backgroundColor = 'var(--accent-1)';
        trail.style.opacity = '0.5';
    });
});
