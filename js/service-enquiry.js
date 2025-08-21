document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent the click from propagating if the user clicks on a link inside the item
            if (e.target.tagName === 'A') {
                return;
            }

            const serviceName = item.getAttribute('data-service');
            if (serviceName) {
                // Encode the service name to be used in a URL and redirect
                window.location.href = `enquiry.html?service=${encodeURIComponent(serviceName)}`;
            }
        });
    });
});