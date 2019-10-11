/* eslint-env jquery */

(function () {
    'use strict';

    var hash = window.location.hash;
    // jQuery selector of the navs we want to show their tabs
    var $navs = $('.media-nav');

    // return early if the navs aren't present
    if ($navs.length === 0) {
        return;
    }

    // initial source: https://stackoverflow.com/a/39254773
    /**
     * Prevent automatic scrolling of page to anchor by browser after loading of page.
     * Do not call this function in $(...) or $(window).on('load', ...),
     * it should be called earlier, as soon as possible.
     */
    function preventAnchorScroll() {
        function scrollToTop() {
            $(window).scrollTop(0);
        }

        if (!hash) {
            return;
        }

        // handler is executed at most once
        $(window).one('scroll', scrollToTop);

        // make sure to release scroll 1 second after
        // document readiness to avoid negative UX
        $(function () {
            setTimeout(function () {
                $(window).off('scroll', scrollToTop);
            }, 1000);
        });
    }

    function showTab() {
        if (!hash) {
            return;
        }

        $navs.tab();
        $($navs).find('a[href="' + hash + '"]').tab('show');
    }

    preventAnchorScroll();
    showTab();

    // Change hash for page reload
    $($navs).find('[data-toggle="pill"]').on('show.bs.tab', function (e) {
        window.location.hash = e.target.hash;
    });
})();
