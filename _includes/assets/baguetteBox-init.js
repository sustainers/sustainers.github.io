/* globals baguetteBoxJs:false */

window.loadjs(baguetteBoxJs, 'baguetteBox', {
    success: function() {
        window.baguetteBox.run('.gallery', {
            async: true,
            buttons: true,
            noScrollbars: true
        });
    }
});
