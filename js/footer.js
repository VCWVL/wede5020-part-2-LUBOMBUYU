// Dynamically generate the footer with social media links
document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `
    <div class="footer-content">
    <div class="social-media">
        <a href="https://www.facebook.com/TechFlowSolutions" target="_blank" rel="noopener" aria-label="Follow us on Facebook">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/TechFlowSol" target="_blank" rel="noopener" aria-label="Follow us on Twitter">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/company/techflow-solutions" target="_blank" rel="noopener" aria-label="Connect with us on LinkedIn">
            <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/techflow_solutions" target="_blank" rel="noopener" aria-label="Follow us on Instagram">
            <i class="fab fa-instagram"></i>
        </a>
    </div>
        <div class="footer-info">
            <p>&copy; 2025 <strong>TechFlow Solutions</strong>. All rights reserved.</p>
            <p>Empowering Your Digital Future | Custom Software • Mobile Apps • IT Consulting</p>
        </div>
    </div>
    `;
    const footer = document.querySelector('footer.footer');
    if (footer) {
        footer.innerHTML = footerHTML;
        console.log('Footer loaded successfully');
    } else {
        console.log('Footer element not found');
    }
});
