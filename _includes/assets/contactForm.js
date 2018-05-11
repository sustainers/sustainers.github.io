(function() {
    'use strict';

    var form = document.getElementById('contact-form');
    var formEmail = document.getElementById('contactFormName');
    var formName = document.getElementById('contactFormEmail');
    var formMsg = document.getElementById('contactFormMessage');
    var contactFormSubmit = document.getElementById('contactFormSubmit');
    var formLog = document.getElementById('contactFormLog');

    contactFormSubmit.addEventListener('click', function() {
        if (formEmail.validity.valid && formName.validity.valid && formMsg.validity.valid) {
            setTimeout(function() {
                form.reset();
                formLog.style.display = 'block';
            }, 1000);
        }
    }, false);
})();
