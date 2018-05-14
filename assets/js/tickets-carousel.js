/* eslint-env jquery */

(function ($) {
    'use strict';

    var $win = $(window);
    var $hasRun = false;
    var $carouselItems = $('.carousel-show-three .carousel-item');

    function removeCarouselItems() {
        if ($win.width() >= 768) {
            return;
        }

        $carouselItems.each(function () {
            // Remove .carousel-item's first child next elements
            $(this).children(':first-child').nextAll().remove();
        });

        $hasRun = false;
    }

    // For every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    function populateCarouselItems() {
        if ($win.width() < 768 || $hasRun === true) {
            return;
        }

        $carouselItems.each(function () {
            var $next = $(this).next();

            if (!$next.length) {
                $next = $(this).siblings(':first');
            }

            $next.children(':first-child').clone().appendTo($(this));

            if ($next.next().length > 0) {
                $next.next()
                    .children(':first-child')
                    .clone()
                    .appendTo($(this));
            } else {
                $(this)
                    .siblings(':first')
                    .children(':first-child')
                    .clone()
                    .appendTo($(this));
            }
        });

        $hasRun = true;
    }

    populateCarouselItems();

    $win.on('resize', function () {
        removeCarouselItems();
        populateCarouselItems();
    });
})(jQuery);
