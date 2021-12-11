/* eslint-env jquery */

(function () {
    'use strict';

    var promoAlert = $('.book-promo');

    var hide = localStorage.getItem('hideBookPromoAlert');
    if (!hide) {
      promoAlert.removeClass('d-none');
      promoAlert.addClass('show');
    }

    promoAlert.on('closed.bs.alert', function() {
      localStorage.setItem('hideBookPromoAlert', 'true');
    })
})();
