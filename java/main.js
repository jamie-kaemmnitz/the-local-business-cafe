const contactForm = document.getElementById('enquiry-form');

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

const enquiryDataString = localStorage.getItem('enquiryData');

if (enquiryDataString) {
    const enquiryData = JSON.parse(enquiryDataString);
    const enquiryDetails = document.getElementById('enquiry-details');

    const output = '<ul>' + 
        Object.keys(enquiryData).map(key => `<li><strong>${key}:</strong> ${enquiryData[key]}</li>`).join('')
        + '</ul>';

    enquiryDetails.innerHTML = output;
    } else {
        document.getElementById('enquiry-details').innerHTML = '<p>No current enquiries</p>';
};