const contactForm = document.getElementById('enquiry-form');

if (contactForm) {

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const contactFormData = new FormData(contactForm);

        const formData = {};

        contactFormData.forEach((value, key) => {
            formData[key] = value;
        });

        localStorage.setItem('enquiryData', JSON.stringify(formData));

        alert('Thank you for your enquiry, we will respond to you as soon as possible');
        contactForm.reset();
    });
};

const enquiryDetails = document.getElementById('enquiry-details');

if (enquiryDetails) {

    const enquiryDataString = localStorage.getItem('enquiryData');

    if (enquiryDataString) {
        const enquiryData = JSON.parse(enquiryDataString);

        const output = '<ul>' + 
            Object.keys(enquiryData).map(key => `<li><strong>${key}:</strong> ${enquiryData[key]}</li>`).join('')
            + '</ul>';

        enquiryDetails.innerHTML = output;
    } else {
        enquiryDetails.innerHTML = '<p>No current enquiries</p>';
    };
};