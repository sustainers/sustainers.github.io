function() {
    'use strict';

    window.addEventListener('load', function() {
        window.cookieconsent.initialise({
            palette: {
                popup: {
                    background: '#000'
                },
                button: {
                    background: 'transparent',
                    border: '#f1d600',
                    text: '#f1d600'
                }
            },
            content: {
                href: '/privacy/'
            }
        });
    });
}
