// Dynamically generate the footer with social media links
document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `
    <div class="footer-content">
    <div class="social-media">
        <a href="https://www.facebook.com/TechFlowSolutions" target="_blank" rel="noopener" aria-label="Follow us on Facebook">
            <img src="images/facebook.svg" alt="Facebook" loading="lazy" onerror="this.onerror=null;this.src='images/facebook.png';">
        </a>
        <a href="https://twitter.com/TechFlowSol" target="_blank" rel="noopener" aria-label="Follow us on Twitter">
            <img src="images/twitter.svg" alt="Twitter" loading="lazy" onerror="this.onerror=null;this.src='images/twitter.png';">
        </a>
        <a href="https://www.linkedin.com/company/techflow-solutions" target="_blank" rel="noopener" aria-label="Connect with us on LinkedIn">
            <img src="images/linkedin.svg" alt="LinkedIn" loading="lazy" onerror="this.onerror=null;this.src='images/linkedin.png';">
        </a>
        <a href="https://www.instagram.com/techflow_solutions" target="_blank" rel="noopener" aria-label="Follow us on Instagram">
            <img src="images/instagram.svg" alt="Instagram" loading="lazy" onerror="this.onerror=null;this.src='images/instagram.png';">
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
