function formValidation() {
    const pwd = document.getElementById('pwd').value;
    const coPwd = document.getElementById('co-pwd').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;

    if (pwd) {
        checkPassword(pwd, coPwd);
    }
    if (contact) {
        checkContact(contact);
    }

    checkEmails(email);
}

function hasUpperCase(pwd) {
    return /[A-Z]/.test(pwd);
}

function hasLowerCase(pwd) {
    return /[a-z]/.test(pwd);
}

function hasNumber(pwd) {
    return /[0-9]/.test(pwd);
}

function checkPassword(pwd, coPwd) {
    if (pwd !== coPwd) {
        alert('Password and confirm password should be matched!')
    }
    else {
        if (pwd.length < 8) {
            alert(`Password should have min length of 8!`);
        }
        else if (!hasUpperCase(pwd) || !hasLowerCase(pwd) || !hasNumber(pwd)) {
            alert("Should have both alphanumeric, should have at least one upper case and one the lower case!");
        }
    }
}

function checkContact(contact) {
    const regex = '/^\d+$/';
    if (!regex.test(contact)) {
        alert("Contact should be a number!");
    }
    else if (contact.length != 11) {
        alert(`Contact should have length of 11!`);
    }
}

function checkEmails(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const emails = email.split(',').map(e => e.trim());

    const allValid = emails.every(email => regex.test(email));

    if (!allValid) {
        alert('One or more emails are invalid!');
    }
}
