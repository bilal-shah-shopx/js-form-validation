const btn = document.querySelector('.btn');

let fName = document.getElementById('f-name');
let lName = document.getElementById('l-name');
let pwd = document.getElementById('pwd');
let coPwd = document.getElementById('co-pwd');
let age = document.getElementById('age');
let contact = document.getElementById('contact');
let emails = document.getElementById('email');

const fNameError = document.querySelector('.f-name');
const validfNameError = document.querySelector('.valid-f-name');
const lNameError = document.querySelector('.l-name');
const validlNameError = document.querySelector('.valid-l-name');
const pwdError = document.querySelector('.pwd');
const coPwdError = document.querySelector('.co-pwd');
const ageError = document.querySelector('.age');
const validAgeError = document.querySelector('.valid-age');
const contactError = document.querySelector('.contact');
const emailError = document.querySelector('.email');
const validEmailError = document.querySelector('.valid-email');

let isValidated = true;
fName.addEventListener('input', function () { validatefName(fName.value) });
lName.addEventListener('input', function () { validatelName(lName.value) });
pwd.addEventListener('input', function () { validatePwd(pwd.value) });
coPwd.addEventListener('input', function () { validateCoPwd(coPwd.value) });
age.addEventListener('input', function () { validateAge(age.value) });
contact.addEventListener('input', function () { validateContact(contact.value) });
emails.addEventListener('input', function () { validateEmails(emails.value) });

function validatefName(name) {
    if (name) {
        if (isInvalidName(name)) {
            btn.classList.add('disabled');
            isValidated = false;
            validfNameError.classList.remove('d-none');
        }
        else {
            btn.classList.remove('disabled');
            validfNameError.classList.add('d-none');
        }
        fNameError.classList.add('d-none');
    }
    else {
        btn.classList.add('disabled');
        isValidated = false;
        validfNameError.classList.add('d-none');
        fNameError.classList.remove('d-none');
    }
}

function validatelName(name) {
    if (name) {
        if (isInvalidName(name)) {
            btn.classList.add('disabled');
            isValidated = false;
            validlNameError.classList.remove('d-none');
        }
        else {
            btn.classList.remove('disabled');
            validlNameError.classList.add('d-none');
        }
        lNameError.classList.add('d-none');
    }
    else {
        btn.classList.add('disabled');
        isValidated = false;
        validlNameError.classList.add('d-none');
        lNameError.classList.remove('d-none');
    }
}

function validatePwd(pwd) {
    if (pwd) {
        if (isInvalidPwd(pwd)) {
            btn.classList.add('disabled');
            isValidated = false;
            pwdError.classList.remove('d-none');
        }
        else if (!isEqual(pwd, coPwd)) {
            btn.classList.add('disabled');
            isValidated = false;
            pwdError.classList.add('d-none');
            coPwdError.classList.remove('d-none');
        }
        else {
            btn.classList.remove('disabled');
            pwdError.classList.add('d-none');
            coPwdError.classList.add('d-none');
        }
    }
}

function validateCoPwd(coPwd) {
    if (coPwd) {
        if (!isEqual(pwd, coPwd)) {
            btn.classList.add('disabled');
            isValidated = false;
            coPwdError.classList.remove('d-none');
        }
        else {
            btn.classList.remove('disabled');
            coPwdError.classList.add('d-none');
        }
    }
}

function validateAge(age) {
    if (age) {
        if (isInvalidAge(age)) {
            btn.classList.add('disabled');
            isValidated = false;
            validAgeError.classList.remove('d-none');
        }
        else {
            btn.classList.remove('disabled');
            validAgeError.classList.add('d-none');
        }
        ageError.classList.add('d-none');
    }
    else {
        btn.classList.add('disabled');
        isValidated = false;
        validAgeError.classList.add('d-none');
        ageError.classList.remove('d-none');
    }
}

function validateContact(contact) {
    if (contact) {
        if (isInvalidContact(contact)) {
            btn.classList.add('disabled');
            isValidated = false;
            contactError.classList.remove('d-none');
        }
        else {
            btn.classList.remove('disabled');
            contactError.classList.add('d-none');
        }
    }
}

function validateEmails(emails) {
    if (emails) {
        if (areInvalidEmails(emails)) {
            btn.classList.add('disabled');
            isValidated = false;
            validEmailError.classList.remove('d-none');
        }
        else {
            isValidated = true;
            btn.classList.remove('disabled');
            validEmailError.classList.add('d-none');
        }
        emailError.classList.add('d-none');
    }
    else {
        btn.classList.add('disabled');
        isValidated = false;
        validEmailError.classList.add('d-none');
        emailError.classList.remove('d-none');
    }
}

btn.addEventListener('click', function formValidation() {
    let fName = document.getElementById('f-name').value;
    let lName = document.getElementById('l-name').value;
    let pwd = document.getElementById('pwd').value;
    let coPwd = document.getElementById('co-pwd').value;
    let age = document.getElementById('age').value;
    let contact = document.getElementById('contact').value;
    let emails = document.getElementById('email').value;

    validatefName(fName);
    validatelName(lName);
    if (pwd) {
        validatePwd(pwd);
    }
    if (coPwd) {
        validateCoPwd(coPwd);
    }
    validateAge(age);
    if (contact) {
        validateContact(contact);
    }
    validateEmails(emails);
    if (isValidated) {
        alert('Form is Validated!');
    }
}
);

function isInvalidName(name) {
    return !(/^[A-Za-z]+$/.test(name));
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

function isInvalidPwd(pwd) {
    return pwd.length < 8 || !hasUpperCase(pwd) || !hasLowerCase(pwd) || !hasNumber(pwd);
}

function isEqual(pwd, coPwd) {
    return pwd === coPwd;
}

function isInvalidAge(age) {
    return !(age >= 18 && age <= 151) || !hasAllDigits(age);
}

function hasAllDigits(contact) {
    return /^\d+$/.test(contact);
}

function isInvalidContact(contact) {
    return contact.length != 11 || !hasAllDigits(contact);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function areInvalidEmails(emails) {
    const allEmails = emails.split(',').map(e => e.trim());
    return !(allEmails.every(email => isValidEmail(email)));
}