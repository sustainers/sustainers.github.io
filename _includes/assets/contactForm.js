(function() {
    'use strict';

    var form = document.getElementById('contact-form');
    var formEmail = document.getElementById('contactFormName');
    var formName = document.getElementById('contactFormEmail');
    var formMsg = document.getElementById('contactFormMessage');

    contactFormSubmit.addEventListener('click', function() {
        if (formEmail.validity.valid && formName.validity.valid && formMsg.validity.valid) {
            setTimeout(function() {
                window.location = '/';
            }, 1000);
        }
    }, false);
})();
