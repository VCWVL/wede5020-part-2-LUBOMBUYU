// Dynamically generate the contact-info address block
document.addEventListener('DOMContentLoaded', function () {
    const addressHTML = `
        <p><a href="tel:+27123456799">📞 +27 12 345 6799</a></p>
        <p><a href="mailto:info@techflow.co.za">✉️ info@techflow.co.za</a></p>
    `;
    const address = document.querySelector('address.contact-info');
    if (address) {
        address.innerHTML = addressHTML;
    }
});
