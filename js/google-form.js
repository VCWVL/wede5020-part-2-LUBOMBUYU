document.addEventListener('DOMContentLoaded', () => {
    // Pre-select service from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const serviceFromUrl = urlParams.get('service');
    const serviceSelect = document.getElementById('service');

    if (serviceFromUrl && serviceSelect) {
        // Check if an option with this value exists
        const optionExists = Array.from(serviceSelect.options).some(option => option.value === serviceFromUrl);
        if (optionExists) {
            serviceSelect.value = serviceFromUrl;
        }
    }

    const enquiryForm = document.getElementById('enquiryForm');
    if (!enquiryForm) {
        return; // Exit if the form is not on this page
    }

    // --- IMPORTANT ---
    // Replace with your actual Google Form URL and Entry IDs.
    // To find these IDs: 
    // 1. Open your live Google Form.
    // 2. Right-click on an input field and choose "Inspect".
    // 3. Find the `name` attribute of the <input> tag (e.g., name="entry.123456789").
    // 4. Replace 'YOUR_UNIQUE_FORM_ID' and 'YOUR_..._ENTRY_ID' in your enquiry.html file first.
    //    This script will then pick them up.

    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_UNIQUE_FORM_ID/formResponse';
    
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const form = this;
        const formData = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');
        const statusDiv = document.getElementById('formStatus');
        
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        const params = new URLSearchParams();
        
        for (let [key, value] of formData.entries()) {
            if (value.trim()) {
                params.append(key, value);
            }
        }
        
        fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: params
        })
        .then(() => {
            statusDiv.innerHTML = '<p>Thank you! Your enquiry has been submitted successfully. We will contact you within 24 hours.</p>';
            statusDiv.className = 'form-status success';
            form.reset();
        })
        .catch(error => {
            statusDiv.innerHTML = '<p>Sorry, there was an error submitting your form. Please try again or contact us directly.</p>';
            statusDiv.className = 'form-status error';
            console.error('Error:', error);
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Enquiry';
        });
    });
});