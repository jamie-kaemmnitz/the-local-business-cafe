//chat gpt used to help with javascript coding

const contactForm = document.getElementById('enquiry-form');

const enquiryDetails = document.getElementById('enquiry-details');

function getEnquiries () {
    return JSON.parse(localStorage.getItem('enquiries')) || [];
};

function saveEnquiries (enquiries) {
    localStorage.setItem('enquiries', JSON.stringify(enquiries))
}

if (contactForm) {

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const contactFormData = new FormData(contactForm);

        const formData = {};

        contactFormData.forEach((value, key) => {
            formData[key] = value;
        });

        const enquiries = getEnquiries();
        enquiries.push(formData);
        saveEnquiries(enquiries);

        alert('Thank you for your enquiry, we will respond to you as soon as possible');
        contactForm.reset();
    });
};

function renderEnquiries () {
    const enquiries = getEnquiries(); 

    if (enquiries.length === 0) {
        enquiryDetails.innerHTML = `<p>You currently have 0 enquiries</p>`;
        return;
    }

    enquiryDetails.innerHTML = enquiries.map((enquiry, index) => {
        const listItems = Object.entries(enquiry)
            .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('');
        return  `<div class="enquiry" data-index="${index}">
                    <h3>Enquiry ${index + 1}</h3>
                    <ul>${listItems}</ul>
                    <button class="remove-enquiry" data-index="${index}">Clear Enquiry</button>
                </div>
                <br>
                <br>`; 
    }).join('');

    document.querySelectorAll('.remove-enquiry').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const updatedEnquiries = getEnquiries();
            updatedEnquiries.splice(index, 1);
            saveEnquiries(updatedEnquiries);
            renderEnquiries();
        });
    });
}

if (enquiryDetails) {
    renderEnquiries();
}
//

const logOutButton = document.getElementById('log-out');

logOutButton.addEventListener('click', function() {
    window.location.href = 'admin-access.html';
})

