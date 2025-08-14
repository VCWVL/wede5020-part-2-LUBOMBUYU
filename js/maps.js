document.addEventListener('DOMContentLoaded', function () {
    const mapSection = document.querySelector('.map');
    if (mapSection) {
        mapSection.innerHTML = `
            <h2>Find Us Here</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1253505835507!2d30.895508876222554!3d-30.033261474929237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7ad54608d6929%3A0x1cb46da3c87914b9!2sGalleria%20Mall!5e0!3m2!1sen!2sza!4v1754991007177!5m2!1sen!2sza"
                class="contact-iframe"
                title="Our location on Google Maps"
                allowfullscreen
                loading="lazy">
            </iframe>
        `;
    }
});