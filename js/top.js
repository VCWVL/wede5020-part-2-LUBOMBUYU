// Scroll-to-top button functionality
document.addEventListener('DOMContentLoaded', function () {
    // Create the button
    const btn = document.createElement('button');
    btn.innerHTML = '↑ Top';
    btn.id = 'scrollToTopBtn';
    btn.style.position = 'fixed';
    btn.style.bottom = '32px';
    btn.style.right = '32px';
    btn.style.padding = '0.75rem 1.5rem';
    btn.style.fontSize = '1.25rem';
    btn.style.background = 'var(--primary-color, #0057a3)';
    btn.style.color = 'var(--text-light, #fff)';
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.boxShadow = '0 2px 8px rgba(0,87,163,0.12)';
    btn.style.cursor = 'pointer';
    btn.style.display = 'none';
    btn.style.zIndex = '999';
    document.body.appendChild(btn);

    // Show/hide button on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    // Scroll to top on click
    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
