(function() {
    var cookieConsentJs = '{{ site.data.assets.cookieConsent.js }}';
    var jquery = '{{ site.data.assets.jquery.url }}';
    var jqueryIntegrity = '{{ site.data.assets.jquery.integrity }}';
    var bootstrapBundle = '{{ site.data.assets.bootstrap.js.url }}';
    var bootstrapIntegrity = '{{ site.data.assets.bootstrap.js.integrity }}';

    {%- if page.slug == 'tickets' -%}
        var ticketsCarousel = '/assets/js/tickets-carousel.js';
    {%- endif -%}

    {%- assign baseBundleItems = 'jquery, bootstrapBundle' -%}

    {%- if page.slug == 'tickets' -%}
        {%- assign bundleItems = baseBundleItems | append: ', ticketsCarousel' -%}
    {%- else -%}
        {%- assign bundleItems = baseBundleItems -%}
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
     window.loadjs(cookieConsentJs, 'cookieConsent', {
        success: {%- include assets/cookieconsent-init.js -%}
    });
})();
