
const form = document.querySelector('form')
const fName = document.getElementById('f-name');
const lName = document.getElementById('l-name');
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');
const fNameEr = document.querySelector('#er-f-name');
const lNameEr = document.querySelector('#er-l-name');
const mailEr = document.querySelector('#er-mail');
const passEr = document.querySelector('#er-pass');

const emailRegex  = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// console.log(fName.id);

function restorePlaceholderName(id) {
    switch (id) {
        case 'f-name':
            return 'First Name';
        case 'l-name':
            return 'Last Name';
        case 'mail':
            return 'Email';
        case 'pass':
            return 'Password';
        default:
            return '';

    }
}

function isValid(mainElement, ErElement) {
    
    if (mainElement.value.length === 0) {
        mainElement.className = 'invalid';
        mainElement.placeholder = '';
        ErElement.textContent = `${restorePlaceholderName(mainElement.id)} cannot be empty`;
        ErElement.className = 'error active';

    }else if(mainElement.id === 'mail' && !emailRegex.test(mainElement.value)){
       
        console.log(emailRegex.test(mainElement.value));
        mainElement.className = 'invalid';
        mainElement.value = '';
        mainElement.placeholder = 'email@example.com';

        ErElement.textContent = 'Looks like this is not a email';
        ErElement.className = 'error active';
    }
     else {
        mainElement.className = 'valid';
        mainElement.placeholder = restorePlaceholderName(mainElement.id);
        ErElement.textContent = '';
        ErElement.className = 'error';
    }
}

function showError() {

    isValid(fName, fNameEr);
    isValid(lName, lNameEr);
    isValid(mail, mailEr);
    isValid(pass, passEr);
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    showError();
})



