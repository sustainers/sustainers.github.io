(function() {
    var cookieConsentJs = '{{ site.data.assets.cookieConsent.js }}';
    var jquery = '{{ site.data.assets.jquery.url }}';
    var jqueryIntegrity = '{{ site.data.assets.jquery.integrity }}';
    var bootstrapBundle = '{{ site.data.assets.bootstrap.js.url }}';
    var bootstrapIntegrity = '{{ site.data.assets.bootstrap.js.integrity }}';
    var bookPromo = '/assets/js/sustain-2021-report-promo.js';

    {%- if page.slug == 'tickets' -%}
        var ticketsCarousel = '/assets/js/tickets-carousel.js';
    {%- endif -%}

    {%- if page.slug == 'media' -%}
        var mediaJS = '/assets/js/media.js';
    {%- endif -%}

    {%- if page.include_baguetteBox == true -%}
        var baguetteBoxJs = '{{ site.data.assets.baguetteBox.js }}';
    {%- endif -%}

    {%- assign bundleItems = 'jquery, bootstrapBundle, bookPromo' -%}

    {%- if page.slug == 'tickets' -%}
        {%- assign bundleItems = bundleItems | append: ', ticketsCarousel' -%}
    {%- endif -%}

    {%- if page.slug == 'media' -%}
        {%- assign bundleItems = bundleItems | append: ', mediaJS' -%}
    {%- endif -%}

    window.loadjs([{{ bundleItems }}], 'jsBundle', {
        async: false,
        before: function(path, scriptEl) {
            if (path === jquery) {
                scriptEl.integrity = jqueryIntegrity;
            } else if (path === bootstrapBundle) {
                scriptEl.integrity = bootstrapIntegrity;
            }
            scriptEl.crossOrigin = true;
        }
    });

    {%- include assets/cookieconsent-init.js -%}

    {%- if page.include_baguetteBox == true -%}
        {%- include assets/baguetteBox-init.js -%}
    {%- endif -%}
})();
