document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.querySelector('.main-nav');

    // Highlight the active navigation link
    if (mainNav) {
        const navLinks = mainNav.querySelectorAll('a');
        const currentPage = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            // Handle index.html being the root
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
});
