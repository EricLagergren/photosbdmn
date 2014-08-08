var doc = document,
    dcf = doc.contactForm,
    email_value = dcf['_replyto'],
    name_value = dcf['name'],
    message_value = dcf['message'],
    question_value = dcf['question'],
    regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    email = message = fullname = false;


function checkForm() {
    if (regex.test(email_value.value)) {
        email_value.className = 'valid';
        email = true;
    } else if ($(email_value).is(':focus')) {
        email_value.className = 'invalid';
    }

    if (name_value.value !== '') {
        name_value.className = 'valid';
        fullname = true;
    } else if ($(name_value).is(':focus')) {
        name_value.className = 'invalid';
    }

    if (message_value.value !== '') {
        message_value.className = 'valid';
        message = true;
    } else if ($(message_value).is(':focus')) {
        message_value.className = 'invalid';
    }
}


function validateForm() {
    if (email === false || message === false || fullname === false) {
        doc.getElementById('tip0').style.display = 'block';

        if (email === false) {
            email_value.className = 'invalid';
        }

        if (message === false) {
            message_value.className = 'invalid';
        }

        if (fullname === false) {
            name_value.className = 'invalid';
        }
    }

    if (question_value.value != '16') {
        question_value.className = 'invalid';
        doc.getElementById('tip').style.display = 'block';
    }

    if (email === true && fullname === true && message === true && question_value.value == '16' ) {
        doc.forms.contactForm.submit();
    }
}