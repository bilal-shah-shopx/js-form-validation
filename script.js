const btn = document.querySelector('.btn');

btn.addEventListener('click', function formValidation() {
    let fName = document.getElementById('f-name').value;
    let lName = document.getElementById('l-name').value;
    let pwd = document.getElementById('pwd').value;
    let coPwd = document.getElementById('co-pwd').value;
    let age = document.getElementById('age').value;
    let contact = document.getElementById('contact').value;
    let emails = document.getElementById('email').value;

    const fNameError = document.querySelector('.f-name');
    const lNameError = document.querySelector('.l-name');
    const pwdError = document.querySelector('.pwd');
    const coPwdError = document.querySelector('.co-pwd');
    const ageError = document.querySelector('.age');
    const contactError = document.querySelector('.contact');
    const emailError = document.querySelector('.email');
    const validEmailError = document.querySelector('.valid-email');

    let isValidated = true;

    if (fName) {
        fNameError.classList.add('d-none');
    }
    else{
        isValidated = false;
        fNameError.classList.remove('d-none');
    }
    if (lName) {
        lNameError.classList.add('d-none');
    }
    else{
        isValidated = false;
        lNameError.classList.remove('d-none');
    }
    if (pwd) {
        if (isInvalidPwd(pwd)) {
            isValidated = false;
            pwdError.classList.remove('d-none');
        }
        else if(!isEqual(pwd, coPwd)){
            isValidated = false;
            pwdError.classList.add('d-none');
            coPwdError.classList.remove('d-none');
        }
        else{
            pwdError.classList.add('d-none');
            coPwdError.classList.add('d-none');
        }
    }
    if (age) {
        if(isInvalidAge(age)){
            isValidated = false;
            ageError.classList.remove('d-none');
        }
        else{
            ageError.classList.add('d-none');
        }
    }
    if (contact) {
        if(isInvalidContact(contact)){
            isValidated = false;
            contactError.classList.remove('d-none');
        }
        else{
            contactError.classList.add('d-none');
        }
    }
    if (emails) {
        if(areInvalidEmails(emails)){
            isValidated = false;
            validEmailError.classList.remove('d-none');
        }
        else{
            validEmailError.classList.add('d-none');
        }
        emailError.classList.add('d-none');
    }
    else {
        isValidated = false;
        validEmailError.classList.add('d-none');
        emailError.classList.remove('d-none');
    }

    if(isValidated){
        alert('Form is Validated!');
    }
}
);

function hasUpperCase(pwd) {
    return /[A-Z]/.test(pwd);
}

function hasLowerCase(pwd) {
    return /[a-z]/.test(pwd);
}

function hasNumber(pwd) {
    return /[0-9]/.test(pwd);
}

function isInvalidPwd(pwd){
    return pwd.length < 8 || !hasUpperCase(pwd) || !hasLowerCase(pwd) || !hasNumber(pwd);
}

function isEqual(pwd, coPwd){
    return pwd===coPwd;
}

function isInvalidAge(age){
    return !(age>=18&&age<=151) || !hasAllDigits(age);
}

function hasAllDigits(contact){
    return /^\d+$/.test(contact);
}

function isInvalidContact(contact){
    return contact.length!=11 || !hasAllDigits(contact); 
}

function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function areInvalidEmails(emails){
    const allEmails = emails.split(',').map(e => e.trim());
    return !(allEmails.every(email => isValidEmail(email)));
}