// Dynamically generate the navigation menu for all pages
document.addEventListener('DOMContentLoaded', function () {
    const navHTML = `
        <ul>
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="about.html" class="nav-link">About</a></li>
            <li><a href="services.html" class="nav-link">Services</a></li>
            <li><a href="portfolio.html" class="nav-link">Portfolio</a></li>
            <li><a href="enquiry.html" class="nav-link">Enquiry</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
    `;
    const nav = document.querySelector('nav.nav-links');
    if (nav) {
        nav.innerHTML = navHTML;
        // Optionally, set active class based on current page
        const links = nav.querySelectorAll('.nav-link');
        const current = window.location.pathname.split('/').pop();
        links.forEach(link => {
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    }
});
