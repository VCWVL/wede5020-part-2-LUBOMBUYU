
// Dynamically generate the footer with social media links
document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `
    <div class="social-media">
        <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener" aria-label="Facebook">
            <img src="images/facebook.svg" alt="Facebook" loading="lazy">
        </a>
        <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener" aria-label="Twitter">
            <img src="images/twitter.svg" alt="Twitter" loading="lazy">
        </a>
        <a href="https://www.linkedin.com/company/YourCompany" target="_blank" rel="noopener" aria-label="LinkedIn">
            <img src="images/linkedin.svg" alt="LinkedIn" loading="lazy">
        </a>
        <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener" aria-label="Instagram">
            <img src="images/instagram.svg" alt="Instagram" loading="lazy">
        </a>
    </div>
    <p>&copy; 2025 <strong>TechFlow Solutions</strong>. All rights reserved.</p>
    `;
    const footer = document.querySelector('footer.footer');
    if (footer) {
        footer.innerHTML = footerHTML;
    }
});
