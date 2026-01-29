const btn = document.querySelector('.btn');
btn.classList.add('disabled');

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

let isValidated = false;
fName.addEventListener('input', function () { validatefName(fName.value); toggleDisable(); });
lName.addEventListener('input', function () { validatelName(lName.value); toggleDisable(); });
pwd.addEventListener('input', function () { validatePwd(pwd.value, coPwd.value); toggleDisable(); });
coPwd.addEventListener('input', function () { validateCoPwd(pwd.value, coPwd.value); toggleDisable(); });
age.addEventListener('input', function () { validateAge(age.value); toggleDisable(); });
contact.addEventListener('input', function () { validateContact(contact.value); toggleDisable(); });
emails.addEventListener('input', function () { validateEmails(emails.value); toggleDisable(); });

function toggleDisable() {
    isValidated = (validatefName(fName.value) && validatelName(lName.value) && validatePwd(pwd.value, coPwd.value) && validateCoPwd(pwd.value, coPwd.value) && validateAge(age.value) && validateContact(contact.value) && validateEmails(emails.value));
    if (isValidated) {
        btn.classList.remove('disabled');
    }
    else {
        btn.classList.add('disabled');
    }
}

function validatefName(name) {
    if (name) {
        if (isInvalidName(name)) {
            isValidated = false;
            validfNameError.classList.remove('d-none');
        }
        else {
            isValidated = true;
            validfNameError.classList.add('d-none');
        }
        fNameError.classList.add('d-none');
    }
    else {
        isValidated = false;
        validfNameError.classList.add('d-none');
        fNameError.classList.remove('d-none');
    }
    return isValidated;
}

function validatelName(name) {
    if (name) {
        if (isInvalidName(name)) {
            isValidated = false;
            validlNameError.classList.remove('d-none');
        }
        else {
            isValidated = true;
            validlNameError.classList.add('d-none');
        }
        lNameError.classList.add('d-none');
    }
    else {
        isValidated = false;
        validlNameError.classList.add('d-none');
        lNameError.classList.remove('d-none');
    }
    return isValidated;
}

function validatePwd(pwd, coPwd) {
    if (pwd) {
        if (isInvalidPwd(pwd)) {
            isValidated = false;
            pwdError.classList.remove('d-none');
        }
        else if (!isEqual(pwd, coPwd)) {
            isValidated = false;
            pwdError.classList.add('d-none');
            coPwdError.classList.remove('d-none');
        }
        else {
            isValidated = true;
            pwdError.classList.add('d-none');
            coPwdError.classList.add('d-none');
        }
    }
    else {
        pwdError.classList.add('d-none');
    }
    return isValidated;
}

function validateCoPwd(pwd, coPwd) {
    if (coPwd) {
        if (!isEqual(pwd, coPwd)) {
            isValidated = false;
            coPwdError.classList.remove('d-none');
        }
        else {
            isValidated = true;
            coPwdError.classList.add('d-none');
        }
    }
    else if (pwd) {
        coPwdError.classList.remove('d-none');
    }
    else {
        coPwdError.classList.add('d-none');
    }
    return isValidated;
}

function validateAge(age) {
    if (age) {
        if (isInvalidAge(age)) {
            isValidated = false;
            validAgeError.classList.remove('d-none');
        }
        else {
            isValidated = true;
            validAgeError.classList.add('d-none');
        }
        ageError.classList.add('d-none');
    }
    else {
        isValidated = false;
        validAgeError.classList.add('d-none');
        ageError.classList.remove('d-none');
    }
    return isValidated;
}

function validateContact(contact) {
    if (contact) {
        if (isInvalidContact(contact)) {
            isValidated = false;
            contactError.classList.remove('d-none');
        }
        else {
            isValidated = true;
            contactError.classList.add('d-none');
        }
    }
    else {
        contactError.classList.add('d-none');
    }
    return isValidated;
}

function validateEmails(emails) {
    if (emails) {
        if (areInvalidEmails(emails)) {
            isValidated = false;
            validEmailError.classList.remove('d-none');
        }
        else {
            isValidated = true;
            validEmailError.classList.add('d-none');
        }
        emailError.classList.add('d-none');
    }
    else {
        isValidated = false;
        validEmailError.classList.add('d-none');
        emailError.classList.remove('d-none');
    }
    return isValidated;
}

function resetForm() {
    document.getElementById('form').reset();
    btn.classList.add('disabled');
    isValidated = false;
}

btn.addEventListener('click', function formValidation() {
    alert('Form is Validated!');
    resetForm();
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