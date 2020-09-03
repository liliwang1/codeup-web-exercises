(function() {
    'use strict';

    $(document).ready(function() {
        alert( 'The DOM has finished loading!' );
        $('#output').html('<h3>World</h3>');
        jQuery('#output').html('<h3>jQuery</h3>'); // override previous line




    });
})();

