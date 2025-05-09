const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('admin-button');

const correctUsername = 'username1';
const correctPassword = 'password2';

function openEnquiries () {

    const usernameEntry = usernameInput.value;
    const passwordEntry = passwordInput.value;

    if (usernameEntry === correctUsername && passwordEntry === correctPassword) {
        window.location.href = 'view-enquiries.html';
    } else if (usernameEntry !== correctUsername && passwordEntry === correctPassword) {
        alert("incorrect username");
    } else if (usernameEntry === correctUsername && passwordEntry !== correctPassword) {
        alert("incorrect password");
    } else {
        alert("incorrect username and password");
    }
};

loginButton.addEventListener('click', openEnquiries);